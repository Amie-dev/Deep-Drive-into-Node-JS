import { Router } from "express";

import {
    addNewBook,
  deleteBook,
  getAllBook,
  getBookById,
  updateBook,
} from '../controller/book.conrtoller.js'

const router = Router();

router.route("/book").get(getAllBook).post(addNewBook);
router.route("/book/:id").get(getBookById).delete(deleteBook).patch(updateBook);

export default router;
