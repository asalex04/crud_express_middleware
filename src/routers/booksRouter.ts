import { Router } from 'express'
import booksController from "../controllers/booksController";

const router = Router()

router.get('/books', booksController.getBooks)
router.post('/books', booksController.createBook)
router.get('/books/:id', booksController.getOneBook)
router.put('/books/:id', booksController.updateBook)
router.delete('/books/:id', booksController.deleteBook)

export default router