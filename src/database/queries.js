import { database } from "../config.js"

// Queries para la base de datos.
export default {
    getProductoById:`USE PetsShop SELECT * FROM Productos WHERE ProductoID = @ID`,
    eliminarProducto:`USE PetsShop DELETE FROM Productos WHERE ProductoID = @ID`,
}
