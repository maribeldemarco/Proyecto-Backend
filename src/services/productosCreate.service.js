import { createProductRepository } from '../repository/productosCreate.repository.js';

export const createProductService = async (nuevoProducto) => {
    try {
        // Llamamos al repositorio para crear el producto
        const productoCreado = await createProductRepository(nuevoProducto);
        return productoCreado;
    } catch (error) {
        console.error('Error en el servicio al crear el producto:', error);
        throw new Error('Error en el servicio al crear el producto');
    }
};
