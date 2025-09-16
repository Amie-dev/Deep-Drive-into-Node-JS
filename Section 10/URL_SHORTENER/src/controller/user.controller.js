import { db } from "../db/index.js";
import { userPostLogIn, userPostSignUp } from "../validations/userValidator.js"
import {userTable} from '../model/index.js'
import { eq } from "drizzle-orm";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'

export const userSignUp = async (req, res) => {
  const validationsResult = await userPostSignUp.safeParseAsync(req.body);

  if (!validationsResult.success) {
    return res.status(400).json({ error: validationsResult.error.format() });
  }

  const { firstName, email, password, lastName } = validationsResult.data;

  const [existingUser] = await db
    .select()
    .from(userTable)
    .where(eq(userTable.email, email));

  if (existingUser) {
    return res.status(409).json({ error: 'User already exists' });
  }

  const hashPassword = await bcrypt.hash(password, 11);

  const [insertedUser] = await db
    .insert(userTable)
    .values({
      firstName,
      lastName,
      password: hashPassword,
      email,
    })
    .returning();

  if (!insertedUser ) {
    return res.status(500).json({ error: 'Failed to create user' });
  }

  return res.status(201).json({ message: 'User created successfully', user: insertedUser });
};


export const userLogIn = async (req, res) => {
    // console.log("hhhh");
    
  const validationsResult = await userPostLogIn.safeParseAsync(req.body);

  if (!validationsResult.success) {
    return res.status(400).json({ error: validationsResult.error.format() });
  }

  const { email, password } = validationsResult.data;

  const [existingUser] = await db
    .select({
      id: userTable.id,
      firstName: userTable.firstName,
      lastName: userTable.lastName,
      email: userTable.email,
      password: userTable.password,
    })
    .from(userTable)
    .where(eq(userTable.email, email));

  if (!existingUser) {
    return res.status(404).json({ error: 'User not found' });
  }

  const isMatchPassword = await bcrypt.compare(password, existingUser.password);

  if (!isMatchPassword) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  const accessToken = jwt.sign(
    { id: existingUser.id },
    process.env.JWT_SRC,
    { expiresIn: 24 * 60 * 60 } // 1 day
  );

  res
    .status(200)
    .cookie('accessToken', accessToken, {
      httpOnly: true,
    //   secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 24 * 60 * 60 * 1000, // 1 day in ms
    })
    .json({ message: 'Login successful', user: { id: existingUser.id, email: existingUser.email } });
};





export const me = async (req, res) => {
    // console.log("JJJJ");
    
  const userId = req.user?.id;
    // console.log(userId);
    
  if (!userId) {
    return res.status(401).json({ message: "Unauthorized. No user ID found." });
  }

  try {
    const [currentUser] = await db
      .select({
        id: userTable.id,
        // userName: userTable.userName,
        email: userTable.email,
        firstName: userTable.firstName,
        lastName:userTable.lastName
      })
      .from(userTable)
      .where(eq(userTable.id, userId));

    if (!currentUser) {
      return res.status(404).json({ message: "User not found." });
    }

    return res.status(200).json({ user: currentUser });
  } catch (error) {
    console.error("Error fetching user:", error);
    return res.status(500).json({ message: "Internal server error.",error:error });
  }
};