import {nanoid} from 'nanoid'
import { urlShortnerPostRequest } from '../validations/urlValidations.js';
import { db } from '../db/index.js';
import { urlTable } from '../model/url.model.js';
import { and, eq } from 'drizzle-orm';
import { userTable } from '../model/user.model.js';
import { qrcode } from '../utils/qrUrl.js';


export const shorten=async(req,res)=>{
    const validationsResult = await urlShortnerPostRequest.safeParseAsync(req.body);
    
      if (!validationsResult.success) {
        return res.status(400).json({ error: validationsResult.error.format() });
      }
    
      const { targetUrl,code} = validationsResult.data;

      const shortCode=code ?? nanoid(6);

      //

      const result=await qrcode(targetUrl,shortCode)
      console.log(result.filePath);
      

      const [shortenUrl]=await db.insert(urlTable).values({
        targetUrl,
        shortCode,
        userId:req.user?.id
      }).returning({
        id:urlTable.id,
        shortCode:urlTable.shortCode,
        targetUrl:urlTable.targetUrl,
        userId:urlTable.userId
      })

      res.status(201).json({userId:shortenUrl.userId,targetUrl:shortenUrl.targetUrl,shortCode:shortenUrl.shortCode})
}


export const getUrlByCode = async (req, res) => {
  const { code } = req.params;

  const [result] = await db
    .select({
      targetUrl: urlTable.targetUrl,
    })
    .from(urlTable)
    .where(eq(urlTable.shortCode, code));

  if (!result) {
    return res.status(404).json({ message: "Short URL not found." });
  }

  // Option 1: Redirect only
//   return res.redirect(result.targetUrl);

  // Option 2: If you want to return JSON instead of redirecting
  return res.status(200).json({ targetUrl: result.targetUrl });
};

export const getAllShortCode = async (req, res) => {
  const userId = req.user?.id;

  if (!userId) {
    return res.status(401).json({ message: "Unauthorized. No user ID found." });
  }

  try {
    const result = await db
      .select()
      .from(urlTable)
      .where(eq(urlTable.userId, userId));

    return res.status(200).json(result);
  } catch (error) {
    console.error("Error fetching short codes:", error);
    return res.status(500).json({ message: "Internal server error.", error });
  }
};

export const deleteShortCode = async (req, res) => {
  const id = req.params.id;
  const userId = req.user?.id;

  if (!id || !userId) {
    return res.status(400).json({ message: "Missing ID or unauthorized." });
  }

  try {
    const result = await db
      .delete(urlTable)
      .where(and(eq(urlTable.id, id), eq(urlTable.userId, userId)));

    return res.status(200).json({ message: "Short URL deleted successfully." });
  } catch (error) {
    console.error("Error deleting short code:", error);
    return res.status(500).json({ message: "Internal server error.", error });
  }
};
