"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const booksController_1 = __importDefault(require("../controllers/booksController"));
const router = (0, express_1.Router)();
router.get('/books', booksController_1.default.getBooks);
router.post('/books', booksController_1.default.createBook);
router.get('/books/:id', booksController_1.default.getOneBook);
router.put('/books/:id', booksController_1.default.updateBook);
router.delete('/books/:id', booksController_1.default.deleteBook);
exports.default = router;
