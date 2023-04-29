import {NextFunction, Request, Response} from "express";
import {User} from "../models/user";
import bcrypt from "bcryptjs";
import passport from '../middlewares/passport.mw';

class AuthController {

    async getHome(req: Request, res: Response) {
        res.render('home')
    }

    async loginForm(req: Request, res: Response) {
        res.render('login')
    }

    async login(req: Request, res: Response) {
        passport.authenticate('local', {
            successRedirect: '/profile',
            failureRedirect: '/user/login'
        })
        res.status(201).json(req.body)
    }

    async signup(req: Request, res: Response, next: NextFunction) {
        const {email, username, password} = req.body
        const candidate = await User.findOne({email})
        if (candidate) {
            return res.status(403).json({message: `User with email: ${email} already exist`})
        }
        const hashPassword = await bcrypt.hash(password.toString(), 8)
        const user = await User.create({email, username, password: hashPassword})
        res.status(200).json({user})
    }

    async getProfile(req: Request, res: Response) {
        if (!req.isAuthenticated()) {
            console.log(req.isAuthenticated())
            return res.status(401).redirect('/api/user/login')
        }
        res.render('profile', {user: req.user})
    }
}

export default new AuthController()