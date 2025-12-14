import { database } from "../config.js"

const queries = {
    // PostgreSQL usa RETURNING en vez de OUTPUT INSERTED
    // Y usa $1, $2, etc. en vez de @parametros
    createProduct: `
        INSERT INTO Productos (ProveedorID, CategoriaSubcategoriaID, Nombre, Marca, Stock, Perece, Fecha_Vencimiento)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        RETURNING *`,
    
    // PostgreSQL no usa "USE database"
    getProductoById: `SELECT * FROM Productos WHERE ProductoID = $1`,
    
    eliminarProducto: `DELETE FROM Productos WHERE ProductoID = $1`,
};

export default queries;