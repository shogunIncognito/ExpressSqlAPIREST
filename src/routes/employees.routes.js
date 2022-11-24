import { Router } from 'express'
import { getEmployees, deleteEmployees, postEmployees, updateEmployees, getEmployeeID } from '../controllers/employees.controller.js'

const router = Router()

router.get('/api/employees', getEmployees)
      .get('/api/employees/:id', getEmployeeID)
      .post('/api/employees', postEmployees)
      .patch('/api/employees/:id', updateEmployees)
      .delete('/api/employees/:id', deleteEmployees)

export default router