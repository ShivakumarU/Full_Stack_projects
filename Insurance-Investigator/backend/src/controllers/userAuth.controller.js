import UserAuth from "../models/userAuth.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Register new user
export const createUserAuth = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const existingUser = await UserAuth.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new UserAuth({ email, password: hashedPassword });
    await user.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error creating User Auth:", error);
    res.status(500).json({ message: "Server Error", error });
  }
};

// Login user & generate JWT
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UserAuth.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Generate JWT
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({ token });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ message: "Server Error", error });
  }
};

// Protected route (just example)
export const getUserAuth = async (req, res) => {
  try {
    // req.user will be set by middleware
    const user = await UserAuth.findById(req.user.id).select("-password");
    res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching User Auth:", error);
    res.status(500).json({ message: "Server Error", error });
  }
};
