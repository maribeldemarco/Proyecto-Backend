import express from 'express';
import { createProductController } from '../create-controller/create-controller.js';  // Verifica la ruta

const router = express.Router();

// Ruta para crear un producto
router.post('/productos', createProductController);

export default router;
