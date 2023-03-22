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
const bookService_1 = __importDefault(require("../services/bookService"));
class BooksController {
    getBooks(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const bookData = yield bookService_1.default.getAll();
                res.json(bookData);
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    createBook(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newBook = yield bookService_1.default.create(req.body);
                res.status(201);
                res.json(newBook);
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    getOneBook(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const bookData = yield bookService_1.default.getOne(id);
                bookData
                    ? res.json(bookData)
                    : (res.status(404),
                        res.json('404 | страница не найдена'));
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    updateBook(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const book = req.body;
                const bookData = yield bookService_1.default.update(id, book);
                bookData
                    ? res.json(bookData)
                    : (res.status(404),
                        res.json('404 | страница не найдена'));
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    deleteBook(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const bookData = yield bookService_1.default.delete(id);
                bookData
                    ? res.json(bookData)
                    : (res.status(404),
                        res.json('404 | страница не найдена'));
            }
            catch (e) {
                console.log(e);
            }
        });
    }
}
exports.default = new BooksController();
