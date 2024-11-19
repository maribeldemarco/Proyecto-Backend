import sql from 'mssql'
import { dbSQLConfig } from '../config.js'

export async function getConnection() {
    try {
        const pool = await sql.connect(dbSQLConfig);
        return pool
    } catch (error) {
        console.log(error)
    }
}

export { sql }