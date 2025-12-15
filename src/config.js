import { config } from 'dotenv'

config();

const expressConfig = {
    port: process.env.EXPRESS_PORT,
    host: process.env.EXPRESS_HOST
}

const database = process.env.NAME_DB;

// Si existe DATABASE_URL (Session Pooler - IPv4 compatible), úsala
// Si no, usa las variables individuales (Direct Connection - solo IPv6)
const dbConfig = process.env.DATABASE_URL ? {
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
} : {
    user: process.env.USER_DB,
    password: process.env.PASSWORD_DB,
    host: process.env.SERVER_DB,
    database: database,
    port: parseInt(process.env.PORT_DB, 10) || 5432,
    ssl: {
        rejectUnauthorized: false
    }
};

export {
    expressConfig,
    dbConfig,
    database
}