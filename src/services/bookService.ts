import {Book, IBook} from "../models/book";

class BookService {
    async getAll() {
        return Book.find();
    }

    async create(req: any) {
        const {title, description, authors, favorite, fileCover, fileName} = req.body
        const newBook = new Book({title, description, authors, favorite, fileCover, fileName})
        return await newBook.save()
    }

    async getOne(id: string) {
        return Book.findById(id);
    }

    async update(id: string, req: any) {
        const {title, description, authors, favorite, fileCover, fileName} = req.body
        const book = await Book.findByIdAndUpdate(id, {
            title, description, authors, favorite, fileCover, fileName
        })
        return book
    }

    async delete(id: string) {
        await Book.deleteOne({_id: id})
        return 'Ok'
    }

}

export default new BookService()