"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class Book {
    constructor(title, description, authors, favorite, fileCover, fileName, id = (0, uuid_1.v4)()) {
        this.title = title;
        this.description = description;
        this.authors = authors;
        this.favorite = favorite;
        this.fileCover = fileCover;
        this.fileName = fileName;
        this.id = id;
    }
}
exports.default = Book;
