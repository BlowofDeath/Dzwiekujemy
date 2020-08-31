import jwt from "jsonwebtoken";

export const signToken = (data) => {
  try {
    const sign = jwt.sign(
      {
        data,
      },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );
    return sign;
  } catch (err) {
    console.log("Error with sign token");
  }
};

export const verifyToken = (token) => {
  try {
    console.log(JWT_SECRET);
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "1234");
    return decoded;
  } catch (err) {
    console.log("Token error");
  }
};
