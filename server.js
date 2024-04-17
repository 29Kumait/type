import mongoose from "mongoose";

const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) return;

  return mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

export default connectDB;
import { handleSignUp } from "../controllers/sign.js";
import connectDB from "../utils/connectDB.js";
import jwt from "jsonwebtoken";

export default async (req, res) => {
  await connectDB();

  // Wrapped the handleSignUp call to include JWT logic here
  const { email, username, password } = req.body;

  try {
    const user = await handleSignUp({ email, username, password }); // Adjust this function to return the user
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "24h" });
    res.status(201).json({ token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


import { handleSignIn } from "../controllers/sign.js";
import connectDB from "../utils/connectDB.js";
import jwt from "jsonwebtoken";

export default async (req, res) => {
  await connectDB();

  // Wrapped the handleSignIn call to include JWT logic here
  const { username, password } = req.body;

  try {
    const user = await handleSignIn(username, password); // Adjust this function to validate user and return the user
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "24h" });
    res.status(200).json({ token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
// controllers/sign.js

import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const handleSignUp = async ({ email, username, password }) => {
  // Check if user already exists
  const existingUser = await User.findOne({ $or: [{ email }, { username }] });
  if (existingUser) {
    throw new Error("User already exists");
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 12);

  // Create new user
  const user = new User({
    email,
    username,
    password: hashedPassword,
  });

  await user.save();

  return user; // Return the newly created user
};
// controllers/sign.js

import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const handleSignUp = async ({ email, username, password }) => {
  // Check if user already exists
  const existingUser = await User.findOne({ $or: [{ email }, { username }] });
  if (existingUser) {
    throw new Error("User already exists");
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 12);

  // Create new user
  const user = new User({
    email,
    username,
    password: hashedPassword,
  });

  await user.save();

  return user; // Return the newly created user
};
export const handleSignIn = async (username, password) => {
  // Find the user by username
  const user = await User.findOne({ username });
  if (!user) {
    throw new Error("User not found");
  }

  // Check password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Invalid credentials");
  }

  return user; // Return the authenticated user
};
