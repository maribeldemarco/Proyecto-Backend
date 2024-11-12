import { readProductosService, readProductosByCategoryService, readProductosBySubCategoryService, readProductosByProviderService, readProductosByPerishablilityService } from '../services/productosRead.service.js';

export const readProductosController = async (req, res) => {
    try {
        let productos = await readProductosService()

        productos.recordset.length === 0 ? res.send('La base de datos está vacía') : res.send(productos.recordset)

    } catch (error) {
        console.error(error)
        res.status(500).send({ message: 'Error al obtener los productos' })
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