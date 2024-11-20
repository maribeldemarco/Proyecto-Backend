import { eliminarProductosService } from "../services/productosDelete.service.js"

export const eliminarProductosController = async (req, res) => {
    const {id}= req.params

    if(isNaN(id)) {
        return res.status(404).send({mensaje: 'Error en la solicitud, el ID debe ser un número'})
    }

    try {
        const productoEliminado = await eliminarProductosService(id)

        if(!productoEliminado) {
            return res.status(404).send({mensaje: `No se encotró ningún producto con ID ${id}`})
        }

        res.status(200).send({mensaje: 'El producto ha sido eliminado correctamente', productoEliminado})
    } catch (error) {
        console.error(error)
        res.status(500).send({mensaje: 'Error al eliminar el producto'})
    }
}