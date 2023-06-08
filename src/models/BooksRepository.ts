import bookService from "../services/bookService";

export interface IBook {
    id: string,
    title: string,
    description: string,
    authors: string,
    favorite: string,
    fileCover: string,
    fileName: string,
    fileBook: string
}

export abstract class BooksRepository {
    async createBook(book: IBook): Promise<IBook> {
        return await bookService.create(book)
    }

    async getBook(id: string): Promise<IBook>  {
        return await bookService.getOne(id)
    }

    async getBooks(): Promise<IBook[]> {
        return await bookService.getAll()
    }

    async updateBook(id: string, req: any): Promise<IBook> {
        return await bookService.update(id, req)
    }

    async deleteBook(id: string): Promise<string> {
        return await bookService.delete(id)
    }
}
