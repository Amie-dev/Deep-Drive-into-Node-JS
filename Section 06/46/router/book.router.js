const express=require('express');
const { getBooks, getBook, deleteBook, addBook } = require('../controller/book.controller');

const router= express.Router();
router.get('/',getBooks)
router.get('/:id',getBook)
router.delete('/:id',deleteBook)
router.post('/',addBook)

module.exports=router