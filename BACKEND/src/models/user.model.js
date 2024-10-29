import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt, { hash } from "bcrypt";

const userSchema = new Schema(
  {
    username: String, // Username for the user
    email: String, // Email for authentication
    password: String, // Hashed password
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model("User", userSchema);
