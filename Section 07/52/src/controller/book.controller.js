import { db } from "../db/index.js";
import { booksTable, authorsTable } from "../model/index.js"; // Make sure this path is correct
import { eq, sql } from "drizzle-orm";

export const addNewBook = async (req, res) => {
    const { title, descriptions, authorId } = req.body;

    try {
        const result = await db.insert(booksTable).values({
            title,
            descriptions,
            authorId
        }).returning();

        res.status(201).json({ message: "Book added successfully", book: result[0] });
    } catch (error) {
        res.status(500).json({ error: "Failed to add book", details: error.message });
    }
};

export const getAllBooks = async (req, res) => {
    const search=req.query.search
    //book?search=
    if (search) {
        const book=await db.select().from(booksTable).where(sql`to_tsvector('english',${booksTable.title}) @@ to_tsquery('english',${search})`)
       return res.status(200).json(book);
    }
    try {
        const books = await db.select().from(booksTable);
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch books", details: error.message });
    }
};

export const getBookById = async (req, res) => {
    const { id } = req.params;

    try {
        const book = await db.select().from(booksTable).where(eq(booksTable.id,id)).leftJoin(authorsTable,eq(booksTable.authorId,authorsTable.id));
        if (book.length === 0) {
            return res.status(404).json({ error: "Book not found" });
        }
        res.status(200).json(book[0]);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch book", details: error.message });
    }
};

export const updateBookById = async (req, res) => {
    const { id } = req.params;
    const { title, descriptions, authorId } = req.body;

    try {
        const result = await db.update(booksTable)
            .set({ title, descriptions, authorId })
            .where(eq(booksTable.id,id))
            .returning();

        if (result.length === 0) {
            return res.status(404).json({ error: "Book not found" });
        }

        res.status(200).json({ message: "Book updated", book: result[0] });
    } catch (error) {
        res.status(500).json({ error: "Failed to update book", details: error.message });
    }
};

export const deleteBookById = async (req, res) => {
    const { id } = req.params;

    try {
        const result = await db.delete(booksTable).where(eq(booksTable.id, id)).returning();

        if (result.length === 0) {
            return res.status(404).json({ error: "Book not found" });
        }

        res.status(200).json({ message: "Book deleted", book: result[0] });
    } catch (error) {
        res.status(500).json({ error: "Failed to delete book", details: error.message });
    }
};
