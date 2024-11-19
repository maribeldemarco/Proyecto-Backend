import { getConnection, sql, queries } from '../database/exports.js'

export const eliminarProductosRepository = async (id) => {
    const pool = await getConnection();

    try {
        const productoEncontrado = await pool.request().input('id', sql.Int, id).query(queries.getProductoById)
        //console.log('Producto encontrado a eliminar', productoEncontrado);
        if(productoEncontrado.recordset.length == 0) {
            console.log('Producto no encontrado');
        }else {
            console.log('Se eliminó el siguiente producto de la lista')
            console.table(productoEncontrado.recordset[0])
        }
        
        const productoEliminado = productoEncontrado.recordset[0]

        await pool.request().input('id', sql.Int, id).query(queries.eliminarProducto)
        return productoEliminado
    } catch (error) {
        console.error('Error en el repositorio', error)
        throw new Error('Error al eliminar el producto de la base de datos')
    } finally {
        pool.close()
    }
}