import { pool as sql } from '../db/db.js'

const errorMessage = (res) => res.status(500).json({ code: 500, message: "Error interno del servidor" })

export const getEmployees = async (req, res) => {
    try {
        const [rows] = await sql.query('SELECT * FROM companydb')
        res.json(rows)
    } catch (error) {
        errorMessage(res)
    }
}

export const getEmployeeID = async (req, res) => {
    try {
        const [rows] = await sql.query('SELECT * FROM companydb WHERE id = ?', [req.params.id])

        if (rows.length === 0) return res.status(404).json({
            code: 404,
            message: 'Employee not found'
        })

        res.json(rows[0])
    } catch (error) {
        errorMessage(res)
    }
}

export const postEmployees = async (req, res) => {
    try {
        const { name, salary } = req.body
        const [rows] = await sql.query('INSERT INTO companydb (name, salary) VALUES (?, ?)', [name, salary])
        res.json({
            message: 'Added employee',
            id: rows.insertId,
            name,
            salary
        })
    } catch (error) {
        errorMessage(res)
    }
}

export const updateEmployees = async (req, res) => {
    try {
        const { body, params: { id } } = req
        const [rows] = await sql.query('UPDATE companydb set ? WHERE id = ?', [body, id])

        if (rows.affectedRows === 0) return res.status(404).json({ code: 404, message: "Not found" })

        res.json({ message: 'Updated employee' })
    } catch (error) {
        errorMessage(res)
    }
}

export const deleteEmployees = async (req, res) => {
    try {
        const { id } = req.params
        const [rows] = await sql.query('DELETE FROM companydb WHERE id = ?', [id])

        if (rows.affectedRows === 0) return res.status(404).json({ message: 'Employee not found' })

        res.sendStatus(204)
    } catch (error) {
        errorMessage(res)
    }
}
