import { config } from 'dotenv'

config();

const expressConfig = {
    port: process.env.EXPRESS_PORT,
    host: process.env.EXPRESS_HOST
}

const database = process.env.NAME_DB;

// Configuración para PostgreSQL (Supabase)
const dbConfig = {
    user: process.env.USER_DB,
    password: process.env.PASSWORD_DB,
    host: process.env.SERVER_DB,  // Cambió de "server" a "host"
    database: database,
    port: parseInt(process.env.PORT_DB, 10) || 5432,  // PostgreSQL usa puerto 5432 por defecto
    ssl: {
        rejectUnauthorized: false  // Supabase requiere SSL
    }
}

export {
    expressConfig,
    dbConfig,  // Cambió el nombre
    database
}