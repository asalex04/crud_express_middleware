import {Request, Response} from "express";

class AuthController {
    async login(req: Request, res: Response) {
        res.status(201)
        res.json({ id: 1, mail: "test@mail.ru" })
    }
}

export default new AuthController()