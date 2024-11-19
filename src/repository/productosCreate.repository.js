import { getConnection, sql, queries } from '../database/exports.js';

export const createProductRepository = async (nuevoProducto) => {
    const { ProveedorID, CategoriaSubcategoriaID, Nombre, Marca, Stock, Perece, Fecha_Vencimiento } = nuevoProducto;
    const pool = await getConnection();

    try {
        const resultado = await pool.request()
            .input('ProveedorID', sql.Int, ProveedorID)
            .input('CategoriaSubcategoriaID', sql.Int, CategoriaSubcategoriaID)
            .input('Nombre', sql.VarChar, Nombre)
            .input('Marca', sql.VarChar, Marca)
            .input('Stock', sql.Int, Stock)
            .input('Perece', sql.Bit, Perece)
            .input('Fecha_Vencimiento', sql.Date, Fecha_Vencimiento )
            .query(queries.createProduct);

        console.log('el Producto fue  creado');
        console.table(resultado.recordset);

        return resultado.recordset;
    } catch (error) {
        console.error('Error al crear el producto:', error);
        throw new Error('Error en la consulta ');
    } finally {
        pool.close();  
    }
};

