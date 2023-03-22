import express from 'express'
import 'dotenv/config'
import router from "./routers";

const PORT = process.env.PORT || 5000

const app = express()
app.use(express.json())
app.use('/api', router)


const startApp = () => {

    app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
}

startApp()