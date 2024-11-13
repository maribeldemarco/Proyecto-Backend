import express from 'express';
import { createProductController } from '../create-controller/create-controller.js';  // Verifica la ruta

const router = express.Router();

// Ruta para crear un producto
router.post('/productos', createProductController);

// Ruta GET para obtener productos (puede ser un simple mensaje por ahora)
router.get('/productos', (req, res) => {
  res.send('Ruta de obtención de productos no implementada aún');
});

export default router;
