import express from 'express'
import mongoose from "mongoose";
import 'dotenv/config'
import router from "./routers";
import error404 from "./middlewares/error-404";


const PORT = process.env.PORT || 5000
const URL_DB = process.env.URL_DB

const app = express()
app.use(express.json())
app.use('/api', router)

app.use(error404)

const startApp = async () => {
    try {
        await mongoose.connect(URL_DB).then(() => console.log('DB connected'))
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }

}

startApp()