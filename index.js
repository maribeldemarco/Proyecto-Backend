import express from  'express';
import { expressConfig } from './src/config.js';

const app = express();

app.set('port', expressConfig.port)
app.set('host', expressConfig.host);


app.get('/', (req, res) => {
  res.send('Raiz del servidor')
})

app.listen(app.get('port'), app.get('host'), () => {
  console.log(`Servidor funcionando en http://${app.get('host')}:${app.get('port')}`)
})