import jwt from 'jsonwebtoken'
import { db } from '../db/index.js';
import { userTable } from '../model/index.js';
import { eq } from 'drizzle-orm';



export const authMiddleware = async (req, res, next) => {
    const accessToken = req.cookies?.accessToken || req.headers.authorization?.split(" ")[1];
    // console.log(accessToken);

    if (!accessToken) {
        return res.status(401).json({ message: "Access denied. No token provided." });
    }

    try {
        const decoded = jwt.verify(accessToken, process.env.JWT_SRC); // Replace with your actual secret

        const [user] = await db
            .select({
                id: userTable.id,
                firstName: userTable.firstName,
                lastName: userTable.lastName,
                email: userTable.email,
            })
            .from(userTable)
            .where(eq(userTable.id, decoded.id));

            // console.log(user);
            
        if (!user) {
            return res.status(404).json({ message: "User not found." });
        }

        req.user = user; // Attach user to request
        // console.log(req.user);
        
        next(); // Proceed
    } catch (error) {
        console.error("Token verification error:", error);
        return res.status(403).json({ message: "Invalid or expired token." });
    }
}