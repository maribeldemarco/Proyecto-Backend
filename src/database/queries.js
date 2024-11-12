import { database } from "../config.js"

// Queries para la base de datos.
export default {
    readProductos: `USE ${database}; SELECT * FROM productos`,
}