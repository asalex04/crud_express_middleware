import {Request, Response} from "express";
import bookService from "../services/bookService";


class BooksController {
    async getBooks(req: Request, res: Response) {
        try {
            const bookData = await bookService.getAll()
            res.json(bookData)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async createBook(req: Request, res: Response) {
        try {
            const newBook = await bookService.create(req)
            res.status(201)
            res.json(newBook)
        } catch (e) {
            res
                .status(500).json(e)
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
            res
                .status(500).json(e)
        }
    }

    async updateBook(req: Request, res: Response) {
        try {
            const {id} = req.params
            const bookData = await bookService.update(id, req)
            bookData
                ? res.redirect(`api/books/${id}`)
                : (
                    res.status(404),
                    res.json('404 | страница не найдена')
                )
        } catch (e) {
            res.status(500).json(e)
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
            res.status(500).json(e)
        }
    }
}

export default new BooksController()