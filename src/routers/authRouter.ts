import { Router } from 'express'
import authController from "../controllers/authController";

const router = Router()

router.get('/', authController.getHome)
router.get('/user/login', authController.loginForm)
router.post('/user/signup', authController.signup)
router.post('/user/login', authController.login)
router.get('/user/me', authController.getProfile)

export default router