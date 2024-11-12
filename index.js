import express from 'express';
import { expressConfig } from './src/config.js';
import { getConnection } from './src/database/conexion.js';

const app = express();

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
