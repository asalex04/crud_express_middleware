import { Router } from 'express'
import fileMulter from '../middlewares/file'
import booksController from "../controllers/booksController";

const router = Router()

router.get('/books', booksController.getBooks)
router.post(
    '/books',
    fileMulter.single('fileBook'),
    booksController.createBook
)
router.get('/books/:id', booksController.getOneBook)
router.get('/books/:id/download', booksController.downloadBook)
router.put(
    '/books/:id',
    fileMulter.single('fileBook'),
    booksController.updateBook)
router.delete('/books/:id', booksController.deleteBook)

export default router