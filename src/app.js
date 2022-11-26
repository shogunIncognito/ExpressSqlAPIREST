import express from 'express'
import employeesRoute from './routes/employees.routes.js'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())
app.use(employeesRoute)

app.use((req, res) => {
    res.status(404).json({ code: 404, message: 'Endpoint not found' })
})

export default app