import bcrypt from "bcryptjs";
import User from "../models/User.js";
import generateToken from "../utils/generateToken.js";


// REGISTER USER

export const registerUser = async (
  req,
  res
) => {
  try {
    const {
      name,
      email,
      password,
      role,
    } = req.body;

    // Check existing user

    const userExists =
      await User.findOne({
        email,
      });

    if (userExists) {
      return res.status(400).json({
        message:
          "User already exists",
      });
    }

    // Password Validation
    // Min 8 chars
    // At least 1 number
    // At least 1 special character

    const passwordRegex =
      /^(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;

    if (
      !passwordRegex.test(password)
    ) {
      return res.status(400).json({
        message:
          "Password must contain at least 8 characters, one number and one special character.",
      });
    }

    // Hash Password

    const salt =
      await bcrypt.genSalt(10);

    const hashedPassword =
      await bcrypt.hash(
        password,
        salt
      );

    // Create User

    const user =
      await User.create({
        name,
        email,
        password:
          hashedPassword,
        role,
      });

    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        token:
          generateToken(
            user._id
          ),
      });
    } else {
      res.status(400).json({
        message:
          "Invalid User Data",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// LOGIN USER

export const loginUser = async (
  req,
  res
) => {
  try {
    const {
      email,
      password,
    } = req.body;

    const user =
      await User.findOne({
        email,
      });

    if (
      user &&
      (await bcrypt.compare(
        password,
        user.password
      ))
    ) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        token:
          generateToken(
            user._id
          ),
      });
    } else {
      res.status(401).json({
        message:
          "Invalid Email or Password",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};