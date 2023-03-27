import express from 'express'
import 'dotenv/config'
import router from "./routers";
import error404 from "./middlewares/error-404";


const PORT = process.env.PORT || 5000

const app = express()
app.use(express.json())
app.use('/api', router)

app.use(error404)

const startApp = () => {

    app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
}

startApp()