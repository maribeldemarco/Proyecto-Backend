import { getConnection, queriesRead as queries, sql } from '../database/exports.js'

export const readProductosRepository = async () => {
    const pool = await getConnection();
    try {
        const resultado = await pool.request().query(queries.readProductos);
        return resultado
    } catch (error) {
        console.error('Error en el Repositorio: ', error)
        throw new Error('Error en la consulta a la base de datos')
    } finally {
        pool.close()
    }
}

export const readProductosByIdRepository = async (id) => {
    const pool = await getConnection();
    try {
        const resultado = await pool.request()
            .input('id', sql.Int, id)
            .query(queries.readProductos + ' WHERE ' + queries.readById);
        return resultado
    } catch (error) {
        console.error('Error en el Repositorio: ', error)
        throw new Error('Error en la consulta a la base de datos')
    } finally {
        pool.close()
    }
}


export const readProductosByCategoryRepository = async (category) => {
    const pool = await getConnection();
    try {
        const resultado = await pool.request()
            .input('category', sql.NVarChar, category)
            .query(queries.readProductos + ' INNER JOIN ' + queries.joinCategorySubcategory + ' WHERE ' + queries.readByCategory);
        return resultado
    } catch (error) {
        console.error('Error en el Repositorio: ', error)
        throw new Error('Error en la consulta a la base de datos')
    } finally {
        pool.close()
    }
}

export const readProductosBySubCategoryRepository = async (subcategory) => {
    const pool = await getConnection();
    try {
        const resultado = await pool.request()
            .input('subcategory', sql.NVarChar, subcategory)
            .query(queries.readProductos + ' INNER JOIN ' + queries.joinCategorySubcategory + ' WHERE ' + queries.readBySubcategory);
        return resultado
    } catch (error) {
        console.error('Error en el Repositorio: ', error)
        throw new Error('Error en la consulta a la base de datos')
    } finally {
        pool.close()
    }
}

export const readProductosByProviderRepository = async (provider) => {
    const pool = await getConnection();
    try {
        const resultado = await pool.request()
            .input('provider', sql.NVarChar, provider)
            .query(queries.readProductos + ' INNER JOIN ' + queries.joinProvider + ' WHERE ' + queries.readByProvider);
        return resultado
    } catch (error) {
        console.error('Error en el Repositorio: ', error)
        throw new Error('Error en la consulta a la base de datos')
    } finally {
        pool.close()
    }
}

export const readProductosByCategoryAndSubcategoryRepository = async (category, subcategory) => {
    const pool = await getConnection();
    try {
        const resultado = await pool.request()
            .input('category', sql.NVarChar, category)
            .input('subcategory', sql.NVarChar, subcategory)
            .query(queries.readProductos + ' INNER JOIN ' + queries.joinCategorySubcategory + ' WHERE ' + queries.readByCategory + ' AND ' + queries.readBySubcategory);
        return resultado
    } catch (error) {
        console.error('Error en el Repositorio: ', error)
        throw new Error('Error en la consulta a la base de datos')
    } finally {
        pool.close()
    }
}

export const readProductosByCategoryAndProviderRepository = async (category, provider) => {
    const pool = await getConnection();
    try {
        const resultado = await pool.request()
            .input('category', sql.NVarChar, category)
            .input('provider', sql.NVarChar, provider)
            .query(queries.readProductos + ' INNER JOIN ' + queries.joinCategorySubcategory + ' INNER JOIN ' + queries.joinProvider + ' WHERE ' + queries.readByCategory + ' AND ' + queries.readByProvider);
        return resultado
    } catch (error) {
        console.error('Error en el Repositorio: ', error)
        throw new Error('Error en la consulta a la base de datos')
    } finally {
        pool.close()
    }
}

export const readProductosBySubcategoryAndProviderRepository = async (subcategory, provider) => {
    const pool = await getConnection();
    try {
        const resultado = await pool.request()
            .input('subcategory', sql.NVarChar, subcategory)
            .input('provider', sql.NVarChar, provider)
            .query(queries.readProductos + ' INNER JOIN ' + queries.joinCategorySubcategory + ' INNER JOIN ' + queries.joinProvider + ' WHERE ' + queries.readBySubcategory + ' AND ' + queries.readByProvider);
        return resultado
    } catch (error) {
        console.error('Error en el Repositorio: ', error)
        throw new Error('Error en la consulta a la base de datos')
    } finally {
        pool.close()
    }
}

export const readProductosByCategoryAndSubcategoryAndProviderRepository = async (category, subcategory, provider) => {
    const pool = await getConnection();
    try {
        const resultado = await pool.request()
            .input('category', sql.NVarChar, category)
            .input('subcategory', sql.NVarChar, subcategory)
            .input('provider', sql.NVarChar, provider)
            .query(queries.readProductos + ' INNER JOIN ' + queries.joinCategorySubcategory + ' INNER JOIN ' + queries.joinProvider + ' WHERE ' + queries.readByCategory + ' AND ' + queries.readBySubcategory + ' AND ' + queries.readByProvider);
        return resultado
    } catch (error) {
        console.error('Error en el Repositorio: ', error)
        throw new Error('Error en la consulta a la base de datos')
    } finally {
        pool.close()
    }
}

export const readProductosByPerishablilityRepository = async (perishable) => {
    const pool = await getConnection();
    try {
        const resultado = await pool.request()
            .input('perishable', sql.Int, perishable)
            .query(queries.readProductos + ' WHERE ' + queries.readByPerishablility)
        return resultado
    } catch (error) {
        console.error('Error en el Repositorio: ', error)
        throw new Error('Error en la consulta a la base de datos')
    } finally {
        pool.close()
    }
}

export const readProductosByMaxDaysBeforePerishRepository = async (days) => {
    const pool = await getConnection();
    try {
        const resultado = await pool.request()
            .input('days', sql.Int, days)
            .query(queries.readProductos + ' WHERE ' + queries.readByMaxDaysToToPerish)
        return resultado
    } catch (error) {
        console.error('Error en el Repositorio: ', error)
        throw new Error('Error en la consulta a la base de datos')
    } finally {
        pool.close()
    }
}

export const readCategoriasRepository = async () => {
    const pool = await getConnection();
    try {
        const resultado = await pool.request()
            .query(queries.readTable + 'categorias');
        return resultado
    } catch (error) {
        console.error('Error en el Repositorio: ', error)
        throw new Error('Error en la consulta a la base de datos')
    } finally {
        pool.close()
    }
}

export const readSubcategoriasRepository = async () => {
    const pool = await getConnection();
    try {
        const resultado = await pool.request()
            .query(queries.readTable + 'Subcategorias');
        return resultado
    } catch (error) {
        console.error('Error en el Repositorio: ', error)
        throw new Error('Error en la consulta a la base de datos')
    } finally {
        pool.close()
    }
}

export const readProveedoresRepository = async () => {
    const pool = await getConnection();
    try {
        const resultado = await pool.request()
            .query(queries.readTable + 'proveedores');
        return resultado
    } catch (error) {
        console.error('Error en el Repositorio: ', error)
        throw new Error('Error en la consulta a la base de datos')
    } finally {
        pool.close()
    }
}