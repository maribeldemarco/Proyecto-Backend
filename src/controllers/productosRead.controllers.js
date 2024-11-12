import { readProductosService } from  '../services/productosRead.service.js';

export const readProductosController = async (req, res) => {
    try {
        let productos = await readProductosService()

        productos.recordset.length === 0 ? res.send('La base de datos está vacía') : res.send(productos.recordset)

    } catch (error) {
        console.error(error)
        res.status(500).send({ message: 'Error al obtener los productos' })
    }
}