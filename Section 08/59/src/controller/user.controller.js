import { eq } from "drizzle-orm";
import { db } from "../DB/index.js";
import { userSessions, userTable } from "../model/index.js";
import { randomBytes ,createHmac} from 'node:crypto';

export const userSignUp = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const existingUser = await db.select().from(userTable).where((table) => eq(table.email, email));

        if (existingUser.length > 0) {
            return res.status(400).json({ message: `User already registered with ${email}` });
        }

        const salt = randomBytes(16).toString('hex');
        const hashPassword = createHmac('sha256',salt).update(password).toString('hex');

        const newUser = await db.insert(userTable).values({
            name,
            email,
            password: hashPassword,
            salt
        }).returning({ id: userTable.id });

        return res.status(201).json({ message: 'User registered successfully', userId: newUser[0].id });
    } catch (error) {
        console.error('Error creating user:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

export const userLogin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const [existingUser] = await db.select({
            id: userTable.id,
            email: userTable.email,
            salt: userTable.salt,
            password: userTable.password
        }).from(userTable).where((table) => eq(table.email, email));

        if (!existingUser) {
            return res.status(404).json({ message: `User not found with ${email}` });
        }

        const { salt, password: storedHash } = existingUser;
        const newHash = createHmac('sha256', salt).update(password).digest('hex');

        if (storedHash !== newHash) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        const [sessions]=await db.insert(userSessions).values({
            userId:existingUser.id
        }).returning({id:sessions.id})
        return res.status(200).json({ message: 'Login successful',sessionsId:sessions.id });
    } catch (error) {
        console.error('Error during login:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

export const user = async (req, res) => {
    const sessionId = req.headers['sessions-id']; // Use quotes for header key

    if (!sessionId) {
        return res.status(401).json({ error: "Unauthorized" }); // Return to prevent further execution
    }

    try {
        const [user] = await db
            .select({
                id: userSessions.id,
                userId: userSessions.userId,
                name:userTable.name,
                email:userTable.email
            })
            .from(userSessions)
            .rightJoin(userTable, eq(userTable.id, userSessions.userId))
            .where(eq(userSessions.id, sessionId)); // Use correct table alias for sessionId

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        res.status(200).json(user);
    } catch (error) {
        console.error("Database error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

