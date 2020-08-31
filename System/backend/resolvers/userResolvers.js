import User from "../models/User";
import bcrypt from "bcrypt";
import validator from "validator";
import { signToken, verifyToken } from "./../utilities/tokenJWT";

const userResolvers = {
  Query: {
    me: async (_, args, context) => {
      const id = 1; //id z token auth
      const me = await User.findOne({ id });
      return me;
    },
    user: async (_, { id }, context) => {
      const user = await User.findOne({ id });
      return user;
    },
  },
  Mutation: {
    registerUser: async (_, { email, password, confirmPassword }, context) => {
      if (await User.findOne({ where: { email } }))
        throw new Error("Adres email jest zajęty.");
      const pattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
      if (password !== confirmPassword || !pattern.test(password))
        throw new Error("Hasła muszą być identyczne.");
      if (!validator.isEmail(email)) throw new Error("Incorrect email.");
      const hash = bcrypt.hashSync(password, 12);
      if (!hash) throw new Error("Problem z szyfrowaniem.");
      const user = await User.create({ email, password: hash });
      if (!user) throw new Error("Problem z rejestracją użytkownika.");
      const auth = {
        user: { id: user.id, email: user.email },
        token: signToken({ id: user.id, email: user.email }),
      };
      return auth;
    },
    loginUser: async (_, { email, password }, context) => {
      const user = await User.findOne({ where: { email } });
      if (!user) throw new Error("Użytkownik nie istnieje.");
      if (!bcrypt.compareSync(password, user.password))
        throw new Error("Błędne hasło.");
      const auth = {
        user,
        token: signToken({ id: user.id, email: user.email }),
      };
      return auth;
    },
  },
};

export default userResolvers;
