import { eq } from "drizzle-orm";
import { db } from "../db/index.js";
import { authorsTable, booksTable } from "../model/index.js";

export const getAllAuthors = async (req, res) => {
  try {
    const authors = await db.select().from(authorsTable);
    return res.status(200).json(authors);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Failed to fetch authors" });
  }
};

export const getAuthorById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await db.select().from(authorsTable).where(eq(authorsTable.id, id));
    if (result.length === 0) {
      return res.status(404).json({ error: "Author not found" });
    }
    return res.status(200).json(result[0]);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Failed to fetch author" });
  }
};

export const getBooksByAuthor = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await db.select().from(booksTable).where(eq(booksTable.authorId, id));
    return res.status(200).json(result);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Failed to fetch books" });
  }
};

export const addAuthor = async (req, res) => {
  const { firstName, lastName, email } = req.body;
  try {
    const result = await db.insert(authorsTable).values({ firstName, lastName, email });
    return res.status(201).json(result);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Failed to add author" });
  }
};
