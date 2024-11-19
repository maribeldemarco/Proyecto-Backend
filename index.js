import express from  'express';
import { expressConfig } from './src/config.js';
import productosDeleteRoute from './src/routes/productosDelete.route.js';
import productosReadRoutes from './src/routes/productosRead.routes.js';
import createRoutes from './src/routes/productosCreate.route.js';  

import cors from 'cors';

const app = express();
app.set('port', expressConfig.port)
app.set('host', expressConfig.host);

app.use(express.json())
app.use(cors())
app.use(productosDeleteRoute)
app.use(productosReadRoutes)
app.use(createRoutes);  

app.get('/', (req, res) => {
  res.send('Raiz del servidor')
})

app.listen(app.get('port'), app.get('host'), () => {
  console.log(`Servidor funcionando en http://${app.get('host')}:${app.get('port')}`)
})