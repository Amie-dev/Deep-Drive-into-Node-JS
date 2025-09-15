import { eq } from "drizzle-orm"
import { db } from "../db/index.js"
import { userRoleEnum, userTable } from "../model/index.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'




export const userSignUp = async (req, res) => {
  const { fullName, userName, password, email } = req.body;

  // Validate input
  if (![fullName, userName, email, password].every(e => e && e.trim() !== "")) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    // Check if user already exists
    const existingUser = await db
      .select()
      .from(userTable)
      .where((table) => eq(table.email, email));

    if (existingUser.length > 0) {
      return res.status(409).json({ message: "User already exists." });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert new user
    const newUser = await db
      .insert(userTable)
      .values({
        fullName,
        userName,
        email,
        password: hashedPassword,
      })
      .returning({ id: userTable.id });

    return res.status(201).json({
      message: "User created successfully.",
      userId: newUser[0].id,
    });
  } catch (error) {
    console.error("Signup error:", error);
    return res.status(500).json({ message: "Internal server error." });
  }
};

export const userLogin = async (req, res) => {
  const { email, userName, password } = req.body || {};

  // Validate input
  if (!password || !(email || userName)) {
    return res.status(400).json({ message: "Email or username and password are required." });
  }

  try {
    // Find user by email or username
    const [user] = await db
      .select({
        id: userTable.id,
        userName: userTable.userName,
        email: userTable.email,
        fullName: userTable.fullName,
        password: userTable.password, // Needed for password comparison
      })
      .from(userTable)
      .where((table) =>
        email ? eq(table.email, email) : eq(table.userName, userName)
      );

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    // Compare password
    const isMatchPassword = await bcrypt.compare(password, user.password);
    if (!isMatchPassword) {
      return res.status(401).json({ message: "Invalid password." });
    }

    // Generate token
    const payload = {
      id: user.id,
      userName: user.userName,
    };
    const accessToken = jwt.sign(payload, "annnn", { expiresIn: 24 * 60 * 60 });

    // Send response with cookie
    res
      .cookie("token", accessToken, { httpOnly: true, secure: true })
      .status(200)
      .json({ message: "Login successful", userId: user.id });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};

export const me = async (req, res) => {
  const userId = req.user?.id;

  if (!userId) {
    return res.status(401).json({ message: "Unauthorized. No user ID found." });
  }

  try {
    const [currentUser] = await db
      .select({
        id: userTable.id,
        userName: userTable.userName,
        email: userTable.email,
        fullName: userTable.fullName
      })
      .from(userTable)
      .where(eq(userTable.id, userId));

    if (!currentUser) {
      return res.status(404).json({ message: "User not found." });
    }

    return res.status(200).json({ user: currentUser });
  } catch (error) {
    console.error("Error fetching user:", error);
    return res.status(500).json({ message: "Internal server error." });
  }
};

export const admin=async (req,res)=>{
    res.status(200).json({message:"Only admin can acces this router"})
}