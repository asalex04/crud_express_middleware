import {Request, Response} from "express";

export default (req: Request, res: Response) => {
    res.status(404)
    res.json('404 | страица не найдена')
}