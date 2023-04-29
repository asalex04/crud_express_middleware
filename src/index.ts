import express from 'express'
import mongoose from "mongoose";
import session from "express-session"
import 'dotenv/config'
import router from "./routers";
import error404 from "./middlewares/error-404";
import passport from "./middlewares/passport.mw";
import path from "path";


const PORT = process.env.PORT || 5000
const URL_DB = process.env.URL_DB || `mongodb://books_db:27017/books`

const app = express()
app.set('views', path.resolve(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.json())
app.use(express.urlencoded());

app.use(session({ secret: process.env.SECRET || 'secret'}));
app.use(passport.initialize())
app.use(passport.session())
app.use('/api', router)
// app.use(error404)

const startApp = async () => {
    try {
        await mongoose.connect(URL_DB).then(() => console.log('DB connected'))
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

startApp()