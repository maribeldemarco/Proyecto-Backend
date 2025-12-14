import { getConnection } from '../database/exports.js'
import queries from '../database/queries.js'

export const eliminarProductosRepository = async (id) => {
    const pool = await getConnection();

    try {
        const productoEncontrado = await pool.query(queries.getProductoById, [id]);
        
        if(productoEncontrado.rows.length == 0) {
            console.log('Producto no encontrado');
            return null;
        } else {
            console.log('Se eliminó el siguiente producto de la lista')
            console.table(productoEncontrado.rows[0])
        }
        
        const productoEliminado = productoEncontrado.rows[0];

        await pool.query(queries.eliminarProducto, [id]);
        
        return productoEliminado;
    } catch (error) {
        console.error('Error en el repositorio', error)
        throw new Error('Error al eliminar el producto de la base de datos')
    }
    // NO cerramos el pool
}