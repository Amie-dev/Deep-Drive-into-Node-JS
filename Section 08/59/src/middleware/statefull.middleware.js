import { eq } from "drizzle-orm";
import { db } from "../DB/index.js";
import { userSessions, userTable } from "../model/index.js";

export const statefullMiddleware = async (req, res, next) => {
    const sessionId = req.headers['sessions-id'];

    if (!sessionId) {
        return res.status(401).json({ error: "Unauthorized: Missing session ID" });
    }

    try {
        const [user] = await db
            .select({
                id: userSessions.id,
                userId: userSessions.userId,
                name: userTable.name,
                email: userTable.email
            })
            .from(userSessions)
            .rightJoin(userTable, eq(userTable.id, userSessions.userId))
            .where(eq(userSessions.id, sessionId));

        if (!user) {
            return res.status(404).json({ error: "User not found or session invalid" });
        }

        req.user = user;
        next();
    } catch (error) {
        console.error("Middleware error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
