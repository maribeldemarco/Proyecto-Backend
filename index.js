import express from  'express';
import { expressConfig } from './src/config.js';
import productosUpdateRoutes from './src/routes/productosUpdate.routes.js';
import cors from 'cors';

const app = express();

app.set('port', expressConfig.port)
app.set('host', expressConfig.host);

// Configurar CORS
app.use(cors({
  origin: 'http://localhost:4200', // Permitir solo el origen del frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Métodos permitidos
  allowedHeaders: ['Content-Type', 'Authorization'] // Cabeceras permitidas
}));

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Raiz del servidor')
})

app.use('/api', productosUpdateRoutes);

app.listen(app.get('port'), app.get('host'), () => {
  console.log(`Servidor funcionando en http://${app.get('host')}:${app.get('port')}`)
})