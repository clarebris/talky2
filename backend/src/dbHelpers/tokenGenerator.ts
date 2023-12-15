import jwt from "jsonwebtoken";

import dotenv from "dotenv";

dotenv.config();

const secretKey = process.env.SECRET_KEY as string;

export const generateToken = (
  email: string,
  _id: string,
  username: string,
  
  isAdmin: boolean
): string => {
  return jwt.sign(
    {
      username,
      email,
      _id,
      isAdmin,
      
    },
    secretKey,
    { expiresIn: "24h" }
  );
};