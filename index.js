import express from 'express';
import { expressConfig } from './src/config.js';
import productosDeleteRoute from './src/routes/productosDelete.route.js';
import productosReadRoutes from './src/routes/productosRead.routes.js';
import productosCreateRoutes from './src/routes/productosCreate.route.js';  
import productosUpdateRoutes from './src/routes/productosUpdate.routes.js';
import cors from 'cors';

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Rutas
app.use(productosDeleteRoute);
app.use(productosReadRoutes);
app.use(productosCreateRoutes);  
app.use(productosUpdateRoutes);

// Ruta raíz
app.get('/', (req, res) => {
  res.send('Raíz del servidor');
});

// Health check (opcional pero recomendado)
app.get('/health', (req, res) => {
  res.status(200).json({ ok: true });
});

// Puerto dinámico para Render
const PORT = process.env.PORT || expressConfig.port || 3000;

// Server
app.listen(PORT, () => {
  console.log(`Servidor funcionando en puerto ${PORT}`);
});
