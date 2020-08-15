import User from "../models/User";

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
};

export default userResolvers;
