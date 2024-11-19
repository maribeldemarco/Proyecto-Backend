import { readProductosService, readProductosByCategoryService, readProductosBySubCategoryService, readProductosByProviderService, readProductosByPerishablilityService, readProductosByMaxDaysToPerishService, readProductosByIdService, readCategoriasService, readSubcategoriasService, readProductosByCategoryAndSubcategoryService, readProveedoresService, readProductosByCategoryAndProviderService, readProductosBySubcategoryAndProviderService, readProductosByCategoryAndSubcategoryAndProviderService } from '../services/productosRead.service.js';

export const readProductosController = async (req, res) => {
    try {
        let productos = await readProductosService()

        productos.recordset.length === 0 ? res.send('La base de datos está vacía') : res.send(productos.recordset)

    } catch (error) {
        console.error(error)
        res.status(500).send({ message: 'Error al obtener los productos' })
    }
}

export const readProductosByIdController = async (req, res) => {
    try {
        let { id } = req.params
        if (isNaN(id) || id <= 0) {
            res.send('El id debe ser un numero entero mayor a 0')
        } else {
            let productos = await readProductosByIdService(id)

            productos.recordset.length === 0 ? res.send('No hay datos sobre un producto con ese id') : res.send(productos.recordset)
        }
    } catch (error) {
        console.error(error)
        res.status(500).send({ message: 'Error al obtener el producto' })
    }
}

export const readProductosByCategoryController = async (req, res) => {
    try {
        let { category } = req.params
        let productos = await readProductosByCategoryService(category)

        productos.recordset.length === 0 ? res.send('No hay datos sobre la categoria o esta no existe') : res.send(productos.recordset)

    } catch (error) {
        console.error(error)
        res.status(500).send({ message: 'Error al obtener los productos' })
    }
}

export const readProductosBySubCategoryController = async (req, res) => {
    try {
        let { subcategory } = req.params
        let productos = await readProductosBySubCategoryService(subcategory)

        productos.recordset.length === 0 ? res.send('No hay datos sobre la subcategoria o esta no existe') : res.send(productos.recordset)

    } catch (error) {
        console.error(error)
        res.status(500).send({ message: 'Error al obtener los productos' })
    }
}

export const readProductosByProviderController = async (req, res) => {
    try {
        let { provider } = req.params
        let productos = await readProductosByProviderService(provider)

        productos.recordset.length === 0 ? res.send('No hay datos sobre el proveedor o este no existe') : res.send(productos.recordset)

    } catch (error) {
        console.error(error)
        res.status(500).send({ message: 'Error al obtener los productos' })
    }
}

export const readProductosByCategoryAndSubcategoryController = async (req, res) => {
    try {
        let { category, subcategory } = req.params
        let productos = await readProductosByCategoryAndSubcategoryService(category, subcategory)

        productos.recordset.length === 0 ? res.send('No hay datos sobre la categoria/subcategoria o alguna no existe') : res.send(productos.recordset)

    } catch (error) {
        console.error(error)
        res.status(500).send({ message: 'Error al obtener los productos' })
    }
}

export const readProductosByCategoryAndProviderController = async (req, res) => {
    try {
        let { category, provider } = req.params
        let productos = await readProductosByCategoryAndProviderService(category, provider)

        productos.recordset.length === 0 ? res.send('No hay datos sobre la categoria/proveedor o alguna no existe') : res.send(productos.recordset)

    } catch (error) {
        console.error(error)
        res.status(500).send({ message: 'Error al obtener los productos' })
    }
}

export const readProductosBySubcategoryAndProviderController = async (req, res) => {
    try {
        let { Subcategory, provider } = req.params
        let productos = await readProductosBySubcategoryAndProviderService(Subcategory, provider)

        productos.recordset.length === 0 ? res.send('No hay datos sobre la subcategoria/proveedor o alguna no existe') : res.send(productos.recordset)

    } catch (error) {
        console.error(error)
        res.status(500).send({ message: 'Error al obtener los productos' })
    }
}

export const readProductosByCategoryAndSubcategoryAndProviderController = async (req, res) => {
    try {
        let { category, subcategory, provider } = req.params
        let productos = await readProductosByCategoryAndSubcategoryAndProviderService(category, subcategory, provider)

        productos.recordset.length === 0 ? res.send('No hay datos sobre la categoria/subcategoria/proveedor o alguna no existe') : res.send(productos.recordset)

    } catch (error) {
        console.error(error)
        res.status(500).send({ message: 'Error al obtener los productos' })
    }
}

export const readProductosByPerishabilityController = async (req, res) => {
    try {
        let options = ['no', 'si']
        let perishable = options.indexOf(req.params.option.toLowerCase())
        if (perishable === -1) {
            res.send('No existe ese estado de perecimiento')
        } else {
            let productos = await readProductosByPerishablilityService(perishable)

            productos.recordset.length === 0 ? res.send('No hay datos sobre ese estado de perecimiento') : res.send(productos.recordset)
        }
    } catch (error) {
        console.error(error)
        res.status(500).send({ message: 'Error al obtener los productos' })
    }
}

export const readProductosByMaxDaysToPerishController = async (req, res) => {
    try {
        let { days } = req.params
        if (isNaN(days) || days < 0) {
            res.send('La cantidad de dias debe ser un numero entero mayor a 0')
        } else {
            let productos = await readProductosByMaxDaysToPerishService(days)

            productos.recordset.length === 0 ? res.send('No hay datos sobre productos en ese rango para perecer') : res.send(productos.recordset)
        }
    } catch (error) {
        console.error(error)
        res.status(500).send({ message: 'Error al obtener los productos' })
    }
}

export const readCategoriasController = async (req, res) => {
    try {
        let categorias = await readCategoriasService()

        categorias.recordset.length === 0 ? res.send('La base de datos está vacía') : res.send(categorias.recordset)

    } catch (error) {
        console.error(error)
        res.status(500).send({ message: 'Error al obtener las categorias' })
    }
}

export const readSubcategoriasController = async (req, res) => {
    try {
        let subcategorias = await readSubcategoriasService()

        subcategorias.recordset.length === 0 ? res.send('La base de datos está vacía') : res.send(subcategorias.recordset)

    } catch (error) {
        console.error(error)
        res.status(500).send({ message: 'Error al obtener las subcategorias' })
    }
}

export const readProveedoresController = async (req, res) => {
    try {
        let proveedores = await readProveedoresService()

        proveedores.recordset.length === 0 ? res.send('La base de datos está vacía') : res.send(proveedores.recordset)

    } catch (error) {
        console.error(error)
        res.status(500).send({ message: 'Error al obtener los proveedores' })
    }
}