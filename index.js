import express from 'express';
import { expressConfig } from './src/config.js';
import { getConnection } from './src/database/conexion.js';
import createRoutes from './src/create-routes/create-routes.js';  // Verifica esta ruta

const app = express();
app.use(express.json()); // Middleware para parsear JSON

async function startServer() {
  try {
    // Esperar la conexión a la base de datos antes de iniciar el servidor
    await getConnection();

    // Configurar el servidor
    app.set('port', expressConfig.port);
    app.set('host', expressConfig.host);

    // Ruta principal
    app.get('/', (req, res) => {
      res.send('Raiz del servidor');
    });
    
    // Usar las rutas definidas en create-routes
    app.use('/api', createRoutes); // Asegúrate de que las rutas están bajo "/api"

    // Iniciar el servidor
    app.listen(app.get('port'), app.get('host'), () => {
      console.log(`Servidor funcionando en http://${app.get('host')}:${app.get('port')}`);
    });
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
    process.exit(1); // Salir si la conexión falla
  }
}

startServer();
