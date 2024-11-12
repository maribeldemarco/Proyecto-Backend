import express from  'express';
import { expressConfig } from './src/config.js';
import productosReadRoutes from './src/routes/productosRead.routes.js';

const app = express();

app.set('port', expressConfig.port)
app.set('host', expressConfig.host);

app.use(productosReadRoutes)

app.get('/', (req, res) => {
  res.send('Raiz del servidor')
})

app.listen(app.get('port'), app.get('host'), () => {
  console.log(`Servidor funcionando en http://${app.get('host')}:${app.get('port')}`)
})