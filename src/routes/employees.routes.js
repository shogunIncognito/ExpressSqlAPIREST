import { Router } from 'express'
import { getEmployees, deleteEmployees, postEmployees, updateEmployees, getEmployeeID, dashboard } from '../controllers/employees.controller.js'

const router = Router()

router.get('/', dashboard)
      .get('/employees', getEmployees)
      .get('/employees/:id', getEmployeeID)
      .post('/employees', postEmployees)
      .patch('/employees/:id', updateEmployees)
      .delete('/employees/:id', deleteEmployees)

export default router