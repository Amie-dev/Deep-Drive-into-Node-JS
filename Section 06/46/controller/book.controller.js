const { BOOKS } = require("../model/books");

// Get all books
exports.getBooks = (req, res) => {
  console.log(BOOKS);
  res.json(BOOKS);
};

// Add a book
exports.addBook = (req, res) => {
  const { title, author } = req.body;

  if (!title) {
    return res.status(400).json({ error: "Book title is required" });
  }
  if (!author) {
    return res.status(400).json({ error: "Book author is required" });
  }

  const book = { id: BOOKS.length + 1, title, author };
  BOOKS.push(book);

  res.status(201).json({ message: "Book added successfully", book });
};

// Get book by ID
exports.getBook = (req, res) => {
  const id = parseInt(req.params.id);
  const book = BOOKS.find(book => book.id === id);

  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }

  res.status(200).json(book);
};

// Delete book by ID
exports.deleteBook = (req, res) => {
  const id = parseInt(req.params.id);
  const index = BOOKS.findIndex(book => book.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Book not found" });
  }

  BOOKS.splice(index, 1);
  res.status(200).json({ message: "Book deleted successfully" });
};
