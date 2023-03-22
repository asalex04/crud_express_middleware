"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bookModel_1 = __importDefault(require("../models/bookModel"));
const store = {
    books: []
};
class BookService {
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const { books } = store;
            return books;
        });
    }
    create(book) {
        return __awaiter(this, void 0, void 0, function* () {
            const { books } = store;
            const { title, description, authors, favorite, fileCover, fileName } = book;
            const newBook = new bookModel_1.default(title, description, authors, favorite, fileCover, fileName);
            books.push(newBook);
            return newBook;
        });
    }
    getOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const { books } = store;
            const idx = yield this.findBookById(id, books);
            return idx !== -1 ? books[idx] : null;
        });
    }
    update(id, book) {
        return __awaiter(this, void 0, void 0, function* () {
            const { title, description, authors, favorite, fileCover, fileName } = book;
            const { books } = store;
            const idx = yield this.findBookById(id, books);
            if (idx === -1) {
                return null;
            }
            books[idx] = Object.assign(Object.assign({}, books[idx]), { title, description, authors, favorite, fileCover, fileName });
            return books[idx];
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const { books } = store;
            const idx = yield this.findBookById(id, books);
            if (idx === -1) {
                return null;
            }
            books.splice(idx, 1);
            return 'Ok';
        });
    }
    findBookById(id, books) {
        return __awaiter(this, void 0, void 0, function* () {
            return books.findIndex(el => el.id === id);
        });
    }
}
exports.default = new BookService();
