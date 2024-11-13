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
        const resultado = await pool.request().input('id', sql.Int, id).query(queries.readProductoById);
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
        const resultado = await pool.request().input('category', sql.NVarChar, category).query(queries.readProductosByCategory);
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
        const resultado = await pool.request().input('subcategory', sql.NVarChar, subcategory).query(queries.readProductosBySubCategory);
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
        const resultado = await pool.request().input('provider', sql.NVarChar, provider).query(queries.readProductosByProvider);
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
        const resultado = await pool.request().input('perishable', sql.Int, perishable).query(queries.readProductosByPerishablility);
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
        const resultado = await pool.request().input('days', sql.Int, days).query(queries.readProductosByMaxDaysToToPerish);
        return resultado
    } catch (error) {
        console.error('Error en el Repositorio: ', error)
        throw new Error('Error en la consulta a la base de datos')
    } finally {
        pool.close()
    }
}
