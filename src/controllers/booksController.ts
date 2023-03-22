import {Request, Response} from "express";
import bookService from "../services/bookService";


class BooksController {
    async getBooks(req: Request, res: Response) {
        try {
            const bookData = await bookService.getAll()
            res.json(bookData)
        } catch (e) {
            console.log(e)
        }
    }

    async createBook(req: Request, res: Response) {
        try {
            const newBook = await bookService.create(req.body)
            res.status(201)
            res.json(newBook)
        } catch (e) {
            console.log(e)
        }
    }

    async getOneBook(req: Request, res: Response) {
        try {
            const {id} = req.params
            const bookData = await bookService.getOne(id)
            bookData
                ? res.json(bookData)
                : (
                    res.status(404),
                    res.json('404 | страница не найдена')
                )
        } catch (e) {
            console.log(e)
        }
    }

    async updateBook(req: Request, res: Response) {
        try {
            const {id} = req.params
            const book = req.body
            const bookData = await bookService.update(id, book)
            bookData
                ? res.json(bookData)
                : (
                    res.status(404),
                    res.json('404 | страница не найдена')
                )
        } catch (e) {
            console.log(e)
        }
    }

    async deleteBook(req: Request, res: Response) {
        try {
            const {id} = req.params
            const bookData = await bookService.delete(id)
            bookData
                ? res.json(bookData)
                : (
                    res.status(404),
                    res.json('404 | страница не найдена')
                )
        } catch (e) {
            console.log(e)
        }
    }
}

export default new BooksController()