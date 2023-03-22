import { Router } from 'express'
import authRouter from "./authRouter";
import booksRouter from "./booksRouter";

const router = Router()

router.use(authRouter)
router.use(booksRouter)

export default router