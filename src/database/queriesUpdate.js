import { database } from "../config.js"

// Queries para la base de datos.

const updateProductos = `
    UPDATE Productos
    SET ProveedorID = $1, 
        CategoriaSubcategoriaID = $2,  
        Nombre = $3, 
        Marca = $4, 
        Stock = $5, 
        Perece = $6, 
        Fecha_Vencimiento = $7
    WHERE ProductoID = $8
    RETURNING *`
    
export default { updateProductos }