import { getConnection, queriesRead as queries } from '../database/exports.js'

export const readProductosRepository = async () => {
    const pool = await getConnection();
    try {
        const resultado = await pool.query(queries.readProductos);
        return resultado;
    } catch (error) {
        console.error('Error en el Repositorio: ', error)
        throw new Error('Error en la consulta a la base de datos')
    }
}

export const readProductosByIdRepository = async (id) => {
    const pool = await getConnection();
    try {
        const resultado = await pool.query(
            `${queries.readProductos} WHERE ${queries.readById}`,
            [id]
        );
        return resultado;
    } catch (error) {
        console.error('Error en el Repositorio: ', error)
        throw new Error('Error en la consulta a la base de datos')
    }
}

export const readProductosByCategoryRepository = async (category) => {
    const pool = await getConnection();
    try {
        const resultado = await pool.query(
            `${queries.readProductos} WHERE ${queries.readByCategory}`,
            [category]
        );
        return resultado;
    } catch (error) {
        console.error('Error en el Repositorio: ', error)
        throw new Error('Error en la consulta a la base de datos')
    }
}

export const readProductosBySubCategoryRepository = async (subcategory) => {
    const pool = await getConnection();
    try {
        const resultado = await pool.query(
            `${queries.readProductos} WHERE ${queries.readBySubcategory}`,
            [subcategory]
        );
        return resultado;
    } catch (error) {
        console.error('Error en el Repositorio: ', error)
        throw new Error('Error en la consulta a la base de datos')
    }
}

export const readProductosByProviderRepository = async (provider) => {
    const pool = await getConnection();
    try {
        const resultado = await pool.query(
            `${queries.readProductos} WHERE ${queries.readByProvider}`,
            [provider]
        );
        return resultado;
    } catch (error) {
        console.error('Error en el Repositorio: ', error)
        throw new Error('Error en la consulta a la base de datos')
    }
}

// ✅ ARREGLADO: Ahora usa $1 y $2
export const readProductosByCategoryAndSubcategoryRepository = async (category, subcategory) => {
    const pool = await getConnection();
    try {
        const resultado = await pool.query(
            `${queries.readProductos} WHERE cs.categorianombre = $1 AND cs.subcategorianombre = $2`,
            [category, subcategory]
        );
        return resultado;
    } catch (error) {
        console.error('Error en el Repositorio: ', error)
        throw new Error('Error en la consulta a la base de datos')
    }
}

// ✅ ARREGLADO: Ahora usa $1 y $2
export const readProductosByCategoryAndProviderRepository = async (category, provider) => {
    const pool = await getConnection();
    try {
        const resultado = await pool.query(
            `${queries.readProductos} WHERE cs.categorianombre = $1 AND pv.nombre = $2`,
            [category, provider]
        );
        return resultado;
    } catch (error) {
        console.error('Error en el Repositorio: ', error)
        throw new Error('Error en la consulta a la base de datos')
    }
}

// ✅ ARREGLADO: Ahora usa $1 y $2
export const readProductosBySubcategoryAndProviderRepository = async (subcategory, provider) => {
    const pool = await getConnection();
    try {
        const resultado = await pool.query(
            `${queries.readProductos} WHERE cs.subcategorianombre = $1 AND pv.nombre = $2`,
            [subcategory, provider]
        );
        return resultado;
    } catch (error) {
        console.error('Error en el Repositorio: ', error)
        throw new Error('Error en la consulta a la base de datos')
    }
}

// ✅ ARREGLADO: Ahora usa $1, $2 y $3
export const readProductosByCategoryAndSubcategoryAndProviderRepository = async (category, subcategory, provider) => {
    const pool = await getConnection();
    try {
        const resultado = await pool.query(
            `${queries.readProductos} WHERE cs.categorianombre = $1 AND cs.subcategorianombre = $2 AND pv.nombre = $3`,
            [category, subcategory, provider]
        );
        return resultado;
    } catch (error) {
        console.error('Error en el Repositorio: ', error)
        throw new Error('Error en la consulta a la base de datos')
    }
}

export const readProductosByPerishablilityRepository = async (perishable) => {
    const pool = await getConnection();
    try {
        const resultado = await pool.query(
            `${queries.readProductos} WHERE ${queries.readByPerishablility}`,
            [perishable]
        );
        return resultado;
    } catch (error) {
        console.error('Error en el Repositorio: ', error)
        throw new Error('Error en la consulta a la base de datos')
    }
}

export const readProductosByMaxDaysBeforePerishRepository = async (days) => {
    const pool = await getConnection();
    try {
        const resultado = await pool.query(
            `${queries.readProductos} WHERE ${queries.readByMaxDaysToPerish}`,
            [days]
        );
        return resultado;
    } catch (error) {
        console.error('Error en el Repositorio: ', error)
        throw new Error('Error en la consulta a la base de datos')
    }
}

export const readCategoriasRepository = async () => {
    const pool = await getConnection();
    try {
        const resultado = await pool.query(`${queries.readTable} categorias`);
        return resultado;
    } catch (error) {
        console.error('Error en el Repositorio: ', error)
        throw new Error('Error en la consulta a la base de datos')
    }
}

export const readSubcategoriasRepository = async () => {
    const pool = await getConnection();
    try {
        const resultado = await pool.query(`${queries.readTable} subcategorias`);
        return resultado;
    } catch (error) {
        console.error('Error en el Repositorio: ', error)
        throw new Error('Error en la consulta a la base de datos')
    }
}

export const readProveedoresRepository = async () => {
    const pool = await getConnection();
    try {
        const resultado = await pool.query(`${queries.readTable} proveedores`);
        return resultado;
    } catch (error) {
        console.error('Error en el Repositorio: ', error)
        throw new Error('Error en la consulta a la base de datos')
    }
}

export const readCategoriasSubcategoriasRepository = async () => {
    const pool = await getConnection();
    try {
        const resultado = await pool.query(`${queries.readTable} categoriassubcategorias`);
        return resultado;
    } catch (error) {
        console.error('Error en el Repositorio: ', error)
        throw new Error('Error en la consulta a la base de datos')
    }
}