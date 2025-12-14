import { getConnection, queriesUpdate } from '../database/exports.js'

const updateProductoRepository = async (id, producto) => {
    try {
        const pool = await getConnection();
        
        const resultado = await pool.query(queriesUpdate.updateProductos, [
            producto.ProveedorID,
            producto.CategoriaSubcategoriaID,
            producto.Nombre,
            producto.Marca,
            producto.Stock,
            producto.Perece,
            producto.Fecha_Vencimiento || null,
            id  // El ID va último porque está en el WHERE
        ]);

        return resultado.rowCount > 0;

    } catch (error) {
        console.error('Error en updateProductoRepository:', error);
        throw error;
    }
};

export { updateProductoRepository };