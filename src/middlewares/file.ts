import {Request} from 'express'
import multer from 'multer'

type DestinationCallback = (error: Error | null, destination: string) => void
type FileNameCallback = (error: Error | null, filename: string) => void

const fileStorage = multer.diskStorage({
    destination: (
        request: Request,
        file: Express.Multer.File,
        cb: DestinationCallback
    ): void => {
        cb(null, 'public/files')
    },
    filename: (
        req: Request,
        file: Express.Multer.File,
        cb: FileNameCallback
    ): void => {
        cb(null, `${file.originalname}`)
    }
})

export default multer({storage: fileStorage})