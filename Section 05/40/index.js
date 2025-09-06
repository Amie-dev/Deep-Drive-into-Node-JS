const express = require('express');
const app = express();
const port = 8000;

// Middleware to parse JSON bodies
app.use(express.json());

const books = [
  { id: 1, name: "To Kill a Mockingbird", author: "Harper Lee" },
  { id: 2, name: "1984", author: "George Orwell" },
  { id: 3, name: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { id: 4, name: "Pride and Prejudice", author: "Jane Austen" },
  { id: 5, name: "The Catcher in the Rye", author: "J.D. Salinger" },
  { id: 6, name: "The Hobbit", author: "J.R.R. Tolkien" },
  { id: 7, name: "Moby-Dick", author: "Herman Melville" },
  { id: 8, name: "War and Peace", author: "Leo Tolstoy" },
  { id: 9, name: "The Alchemist", author: "Paulo Coelho" },
  { id: 10, name: "The Book Thief", author: "Markus Zusak" }
];

// GET all books
app.get('/books', (req, res) => {
  res.status(200).json(books);
});

// GET book by ID
app.get('/book/:id', (req, res) => {
  const id = parseInt(req.params.id); // Convert to number
  const book = books.find(book => book.id === id);
  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }
  res.status(200).json(book);
});

// DELETE book by ID
app.delete('/book/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = books.findIndex(book => book.id === id);
  if (index === -1) {
    return res.status(404).json({ message: "Book not found" });
  }
  books.splice(index, 1);
  res.status(200).json({ message: "Book deleted successfully" });
});

// Start server
app.listen(port, () => {
  console.log(`Server is listening at port ${port}`);
});
