import { readProductosService, readProductosByCategoryService } from  '../services/productosRead.service.js';

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