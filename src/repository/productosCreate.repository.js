import { getConnection } from '../database/exports.js';
import queries from '../database/queries.js';

export const createProductRepository = async (nuevoProducto) => {
    const { ProveedorID, CategoriaSubcategoriaID, Nombre, Marca, Stock, Perece, Fecha_Vencimiento } = nuevoProducto;
    const pool = await getConnection();

    try {
        // PostgreSQL usa un array de valores en orden
        const resultado = await pool.query(queries.createProduct, [
            ProveedorID,
            CategoriaSubcategoriaID,
            Nombre,
            Marca,
            Stock,
            Perece,
            Fecha_Vencimiento
        ]);

        console.log('el Producto fue creado');
        console.table(resultado.rows);

        return resultado.rows;
    } catch (error) {
        console.error('Error al crear el producto:', error);
        throw new Error('Error en la consulta');
    }
    // NO cerramos el pool en PostgreSQL - se reutiliza
};