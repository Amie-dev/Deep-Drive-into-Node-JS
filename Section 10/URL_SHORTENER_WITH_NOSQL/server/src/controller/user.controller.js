import User from "../model/user.model.js";
import { userPostRegister } from "../validations/user.validations.js";

const userRegister = async (req, res) => {
  const validationsResult = await userPostRegister.safeParseAsync(req.body);
  if (!validationsResult.success) {
    return res.status(400).json({ error: validationsResult.error.format() });
  }

  const { fullName, email, username, password } = validationsResult.data;

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(409).json({ error: "User already exists" });
  }

  const newUser = await User.create({
    username,
    fullName,
    email,
    password
  });

  return res.status(201).json({ message: "User registered successfully", user: newUser });
};
const userLogIn = async (req, res) => {
  try {
    const { email, username, password } = req.body;

    if (!(email || username)) {
      return res.status(400).json({ error: "Username or email is required" });
    }

    const user = await User.findOne({
      $or: [{ email }, { username: username?.toLowerCase() }],
    });

    if (!user) {
      return res.status(404).json({ error: "User does not exist" });
    }

    const isPasswordCorrect = await user.isCorrectPassword(password);
    if (!isPasswordCorrect) {
      return res.status(401).json({ error: "Wrong password" });
    }

    const accessToken = user.generateAccessToken();

    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
    });

    return res.status(200).json({ message: "Login successful", user });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

const userLogOut = async (req, res) => {
  res.clearCookie("accessToken", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict"
  });

  return res.status(200).json({ message: "Logged out successfully" });
};

const me=async (req,res) => {
    
}
const user=async (req,res) => {
    
}

export {
    userRegister,
    userLogIn,
    userLogOut,
    me
}