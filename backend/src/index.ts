import express from 'express'
import cors from 'cors'
import mainRoutes from './routes/mainRoutes'
import dotenv from 'dotenv'

dotenv.config()
const PORT = process.env.PORT || 4000

const app = express()

app.use(express.json())
app.use(cors())

app.use('/api/v1/', mainRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})