import { createPool } from "mysql2/promise";
import { DB_HOST, DB_PASS, DB_NAME, DB_PORT, DB_USER } from "./config.js";

export const pool = createPool({
    database: DB_NAME,
    user: DB_USER,
    host: DB_HOST,
    password: DB_PASS,
    port: DB_PORT,
    ssl: {
        rejectUnauthorized: false
    }
})