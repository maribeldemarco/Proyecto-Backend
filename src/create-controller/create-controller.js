import { createProductService } from '../create-service/create-service.js';

export const createProductController = async (req, res) => {
    try {
        // Obtenemos el nuevo producto desde el cuerpo de la solicitud
        const nuevoProducto = req.body;

        // Llamamos al servicio para crear el producto
        const productoCreado = await createProductService(nuevoProducto);

        // Respondemos con el producto creado
        res.status(201).json({ productoCreado });
    } catch (error) {
        console.error('Error al crear el producto:', error);
        res.status(500).json({ mensaje: 'Error al crear el producto' });
    }
};
