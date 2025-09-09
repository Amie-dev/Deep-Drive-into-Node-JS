const express=require('express');
const { books } = require('../db');
const router=express.Router()

router.get('/', (req, res) => {
  res.status(200).json(books);
});

// GET book by ID
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id); // Convert to number
  const book = books.find(book => book.id === id);
  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }
  res.status(200).json(book);
});

// DELETE book by ID
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = books.findIndex(book => book.id === id);
  if (index === -1) {
    return res.status(404).json({ message: "Book not found" });
  }
  books.splice(index, 1);
  res.status(200).json({ message: "Book deleted successfully" });
});

//add books
router.post('/',(req,res)=>{
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

module.exports=router