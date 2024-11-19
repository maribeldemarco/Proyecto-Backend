import { createProductService } from '../services/productosCreate.service.js';

export const createProductController = async (req, res) => {
    try {
        const nuevoProducto = req.body;
        // Llamamos al servicio para crear el producto
        console.log('Datos recibidos:', nuevoProducto);  // Agrega esto para ver lo que se recibe
        const productoCreado = await createProductService(nuevoProducto);
        // Respondemos con el producto creado
      res.status(201).json({ productoCreado });
    } catch (error) {
        console.error('Error al crear el producto:', error);
       res.status(500).json({ mensaje: 'Error al crear el producto' });
    }
};
