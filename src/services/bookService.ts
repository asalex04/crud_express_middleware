import Book, {IBook} from "../models/bookModel";

const store = {
    books: [] as IBook[]
}

class BookService {
    async getAll() {
        const {books} = store
        return books
    }

    async create(book: IBook) {
        const {books} = store
        const {title, description, authors, favorite, fileCover, fileName} = book
        const newBook = new Book(title, description, authors, favorite, fileCover, fileName)
        books.push(newBook)
        return newBook
    }

    async getOne(id: string) {
        const {books} = store
        const idx = await this.findBookById(id, books)
        return idx !== -1 ? books[idx] : null
    }

    async update(id: string, book: IBook) {
        const {title, description, authors, favorite, fileCover, fileName} = book
        const {books} = store
        const idx = await this.findBookById(id, books)
        if (idx === -1) {
            return null
        }
        books[idx] = {
            ...books[idx],
            title, description, authors, favorite, fileCover, fileName
        }
        return books[idx]
    }

    async delete(id: string) {
        const {books} = store
        const idx = await this.findBookById(id, books)
        if (idx === -1) {
            return null
        }
        books.splice(idx, 1)
        return 'Ok'
    }

    async findBookById(id: string, books: IBook[]) {
        return books.findIndex(el => el.id === id)
    }
}

export default new BookService()