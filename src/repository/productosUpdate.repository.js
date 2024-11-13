import { getConnection, queries, sql } from '../database/exports.js'

const updateProductoRepository = async (id, producto) => {
    try {
        const pool = await getConnection();
        
        const resultado = await pool.request()
            .input('ProductoID', sql.Int, id)
            .input('ProveedorID', sql.Int, producto.ProveedorID)
            .input('CategoriaSubcategoriaID', sql.Int, producto.CategoriaSubcategoriaID)
            .input('Nombre', sql.VarChar(255), producto.Nombre)
            .input('Marca', sql.VarChar(255), producto.Marca)
            .input('Stock', sql.Int, producto.Stock)
            .input('Perece', sql.Bit, producto.Perece)
            .input('Fecha_Vencimiento', sql.Date, producto.Fecha_Vencimiento || null)
            .query(queries.updateProductos);

        return resultado.rowsAffected[0] > 0;

    } catch (error) {
        console.error('Error en updateProductoRepository:', error);
        throw error;
    }
};

export { updateProductoRepository };