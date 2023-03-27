import { v4 as uuidv4 } from 'uuid'

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

export default class Book {
    id: string
    constructor(
        public title: string,
        public description: string,
        public authors: string,
        public favorite: string,
        public fileCover: string,
        public fileName: string,
        public fileBook: string,
        id = uuidv4()
    ) {
        this.id = id
    }
}