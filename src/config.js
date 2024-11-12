import { config } from 'dotenv'

config();

const expressConfig = {
    port: process.env.EXPRESS_PORT,
    host: process.env.EXPRESS_HOST
}

const database = process.env.NAME_DB;
const dbSQLConfig = {
    user: process.env.USER_DB,
    password: process.env.PASSWORD_DB,
    server:  process.env.SERVER_DB,
    database: database,
    port: parseInt(process.env.PORT_DB, 10),
    options: {
        trustServerCertificate: true,
   encrypt: false , // Forzar el uso de cifrado trustServerCertificate: true, // Confiar en el certificado del servidor 
     //cryptoCredentialsDetails: { minVersion: 'TLSv1.2'
  //  }
}
}

export {
    expressConfig,
    dbSQLConfig,
    database
}