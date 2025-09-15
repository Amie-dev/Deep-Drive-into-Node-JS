import jwt from 'jsonwebtoken';
import { db } from '../db/index.js';
import { userTable } from '../model/index.js';
import { eq } from 'drizzle-orm'; // Make sure this is imported



export const userMiddleware = async (req, res, next) => {
  const token = req.cookies?.token || req.headers.authorization?.split(" ")[1];
    // console.log(token);
    // console.log('Cookies:', req.cookies);
    // console.log(req);
    
    
  if (!token) {
    return res.status(401).json({ message: "Access denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token, "annnn"); // Replace with your actual secret

    const [user] = await db
      .select()
      .from(userTable)
      .where(eq(userTable.id, decoded.id));

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    req.user = user; // Attach user to request
    next(); // Proceed
  } catch (error) {
    console.error("Token verification error:", error);
    return res.status(403).json({ message: "Invalid or expired token." });
  }
};

export const accessRole=async(allawRole=[])=>{
    async(req,res,next)=>{
        const userId=req.user?.id

        const user=await db.select().from(userTable).where(table=>eq(table.id,userId));

        const giveRole=user.role

        if (!allawRole.includes(giveRole)) {
            res.status(403).json({message:"'Access denied. Only project admins or project_admin can perform this action.'"})
        }
        next()
    }
}
