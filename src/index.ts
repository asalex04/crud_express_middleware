import express from 'express'
import 'dotenv/config'
import router from "./routers";
// import errorHandler from './middleware/ErrorHandlingMiddleware.js'

const PORT = process.env.PORT || 5000

const app = express()
app.use(express.json())
app.use('/api', router)
//Обработка ошибок
// app.use(errorHandler)



const startApp = () => {

    app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
}

startApp()