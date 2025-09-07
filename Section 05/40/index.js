const express = require('express');
const app = express();
const port = 8000;

// Middleware to parse JSON bodies
app.use(express.json());

const books = [
  { id: 1, title: "To Kill a Mockingbird", author: "Harper Lee" },
  { id: 2, title: "1984", author: "George Orwell" },
  { id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { id: 4, title: "Pride and Prejudice", author: "Jane Austen" },
  { id: 5, title: "The Catcher in the Rye", author: "J.D. Salinger" },
  { id: 6, title: "The Hobbit", author: "J.R.R. Tolkien" },
  { id: 7, title: "Moby-Dick", author: "Herman Melville" },
  { id: 8, title: "War and Peace", author: "Leo Tolstoy" },
  { id: 9, title: "The Alchemist", author: "Paulo Coelho" },
  { id: 10, title: "The Book Thief", author: "Markus Zusak" }
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

//add books
app.post('/books',(req,res)=>{
  const {title,author}=req.body
  if (!title || !title==='') {
    return res.status(400).json({error:"Book Title are require"})
  }
  if (!author || !author==='') {
    return res.status(400).json({error:"Book authore are require"})
  }

  const book={id:books.length+1,title,author}

  books.push(book)
  res.status(201).json({message:"Book add succefully",book})
})

// Start server
app.listen(port, () => {
  console.log(`Server is listening at port ${port}`);
});
