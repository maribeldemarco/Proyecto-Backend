import { readProductosRepository, readProductosByCategoryRepository, readProductosBySubCategoryRepository, readProductosByProviderRepository, readProductosByPerishablilityRepository, readProductosByMaxDaysBeforePerishRepository, readProductosByIdRepository, readCategoriasRepository, readSubcategoriasRepository, readProductosByCategoryAndSubcategoryRepository, readProveedoresRepository, readProductosByCategoryAndProviderRepository, readProductosBySubcategoryAndProviderRepository, readProductosByCategoryAndSubcategoryAndProviderRepository, readCategoriasSubcategoriasRepository }  from '../repository/productosRead.repository.js';

export const readProductosService = async () => {
    try {
        return readProductosRepository()
    } catch (error) {
        console.error('Error en el Servicio: ', error)
        throw new Error('Error al obtener los productos')
    }
}

export const readProductosByIdService = async (id) => {
    try {
        return readProductosByIdRepository(id)
    } catch (error) {
        console.error('Error en el Servicio: ', error)
        throw new Error('Error al obtener los productos')
    }
}

export const readProductosByCategoryService = async (category) => {
    try {
        return readProductosByCategoryRepository(category)
    } catch (error) {
        console.error('Error en el Servicio: ', error)
        throw new Error('Error al obtener los productos')
    }
}

export const readProductosBySubCategoryService = async (subcategory) => {
    try {
        return readProductosBySubCategoryRepository(subcategory)
    } catch (error) {
        console.error('Error en el Servicio: ', error)
        throw new Error('Error al obtener los productos')
    }
}

export const readProductosByProviderService = async (provider) => {
    try {
        return readProductosByProviderRepository(provider)
    } catch (error) {
        console.error('Error en el Servicio: ', error)
        throw new Error('Error al obtener los productos')
    }
}

export const readProductosByCategoryAndSubcategoryService = async (category, subcategory) => {
    try {
        return readProductosByCategoryAndSubcategoryRepository(category, subcategory)
    } catch (error) {
        console.error('Error en el Servicio: ', error)
        throw new Error('Error al obtener los productos')
    }
}

export const readProductosByCategoryAndProviderService = async (category, provider) => {
    try {
        return readProductosByCategoryAndProviderRepository(category, provider)
    } catch (error) {
        console.error('Error en el Servicio: ', error)
        throw new Error('Error al obtener los productos')
    }
}

export const readProductosBySubcategoryAndProviderService = async (subcategory, provider) => {
    try {
        return readProductosBySubcategoryAndProviderRepository(subcategory, provider)
    } catch (error) {
        console.error('Error en el Servicio: ', error)
        throw new Error('Error al obtener los productos')
    }
}

export const readProductosByCategoryAndSubcategoryAndProviderService = async (category, subcategory, provider) => {
    try {
        return readProductosByCategoryAndSubcategoryAndProviderRepository(category, subcategory, provider)
    } catch (error) {
        console.error('Error en el Servicio: ', error)
        throw new Error('Error al obtener los productos')
    }
}

export const readProductosByPerishablilityService = async (perishable) => {
    try {
        return readProductosByPerishablilityRepository(perishable)
    } catch (error) {
        console.error('Error en el Servicio: ', error)
        throw new Error('Error al obtener los productos')
    }
}

export const readProductosByMaxDaysToPerishService = async (days) => {
    try {
        return readProductosByMaxDaysBeforePerishRepository(days)
    } catch (error) {
        console.error('Error en el Servicio: ', error)
        throw new Error('Error al obtener los productos')
    }
}

export const readCategoriasService = async () => {
    try {
        return readCategoriasRepository()
    } catch (error) {
        console.error('Error en el Servicio: ', error)
        throw new Error('Error al obtener las categorias')
    }
}

export const readSubcategoriasService = async () => {
    try {
        return readSubcategoriasRepository()
    } catch (error) {
        console.error('Error en el Servicio: ', error)
        throw new Error('Error al obtener las subcategorias')
    }
}

export const readProveedoresService = async () => {
    try {
        return readProveedoresRepository()
    } catch (error) {
        console.error('Error en el Servicio: ', error)
        throw new Error('Error al obtener los proveedores')
    }
}

export const readCategoriasSubcategoriasService = async () => {
    try {
        return readCategoriasSubcategoriasRepository()
    } catch (error) {
        console.error('Error en el Servicio: ', error)
        throw new Error('Error al obtener los proveedores')
    }
}