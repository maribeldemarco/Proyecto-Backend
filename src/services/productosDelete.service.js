import { eliminarProductosRepository } from "../repository/productosDelete.repository.js"

export const eliminarProductosService = async (id) => {
    try {
        const productoEliminado = await eliminarProductosRepository(id)
    return productoEliminado

    } catch (error) {
        console.error('Error en el service', error)
        throw new Error('Error al eliminar el producto')
    }
}