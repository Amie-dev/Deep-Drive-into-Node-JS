import { Router } from "express";
import { addNewBook, deleteBookById, getAllBooks, getBookById, updateBookById } from "../controller/book.controller.js";

const bookRouter=Router()


bookRouter.route("/book").get(getAllBooks).post(addNewBook)
bookRouter.route("/book/:id").get(getBookById).patch(updateBookById).delete(deleteBookById)

export default bookRouter