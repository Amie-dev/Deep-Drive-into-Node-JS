import { db } from "../db/index.js";
import { Book } from "../drizzle/schema.js";
import { eq } from "drizzle-orm";

// ✅ Get all books
export const getAllBook = async (req, res) => {
  try {
    const books = await db.select().from(Book);
    console.log("Fetched books:", books);
    res.status(200).json(books);
  } catch (error) {
    console.error("Error fetching books:", error);
    res.status(500).json({ error: "Failed to fetch books" });
  }
};

// ➕ Add a new book
export const addNewBook = async (req, res) => {
  try {
    const newBook = req.body;
    const result = await db.insert(Book).values(newBook).returning();
    res.status(201).json(result[0]);
  } catch (error) {
    console.error("Error adding book:", error);
    res.status(500).json({ error: "Failed to add book" });
  }
};

// 🔍 Get book by ID
export const getBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await db.select().from(Book).where(eq(Book.id, id));
    if (book.length === 0) {
      return res.status(404).json({ error: "Book not found" });
    }
    res.status(200).json(book[0]);
  } catch (error) {
    console.error("Error fetching book by ID:", error);
    res.status(500).json({ error: "Failed to fetch book" });
  }
};

// ❌ Delete book
export const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    await db.delete(Book).where(eq(Book.id, id));
    res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    console.error("Error deleting book:", error);
    res.status(500).json({ error: "Failed to delete book" });
  }
};

// ✏️ Update book
export const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;
    const result = await db.update(Book).set(updatedData).where(eq(Book.id, id)).returning();
    res.status(200).json(result[0]);
  } catch (error) {
    console.error("Error updating book:", error);
    res.status(500).json({ error: "Failed to update book" });
  }
};
