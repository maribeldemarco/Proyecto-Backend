import sql from 'mssql'
import { dbSQLConfig } from '../config.js'

export async function getConnection() {
    try {
        const pool = await sql.connect(dbSQLConfig);
        console.log('Conexion exitosa a la base de datos');

        return pool
    } catch (error) {
        console.log(error)
    }
}

getConnection();
export { sql }