import {Schema} from 'mongoose'
import mongoose from "mongoose";

export interface IBook {
    title: string,
    description: string,
    authors: string,
    favorite: string,
    fileCover: string,
    fileName: string,
}

const bookSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    authors: {type: String, required: true},
    favorite: {type: String},
    fileCover: {type: String},
    fileName: {type: String}
})

const Book = mongoose.model('Book', bookSchema)
export { Book }