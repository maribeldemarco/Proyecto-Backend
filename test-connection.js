import { getConnection } from './src/database/conexion.js';

async function testConnection() {
    try {
        const pool = await getConnection();
        console.log('✅ Conexión exitosa a Supabase!');
        
        const result = await pool.query('SELECT NOW()');
        console.log('Hora del servidor:', result.rows[0]);
    } catch (error) {
        console.error('❌ Error de conexión:', error);
    }
}

testConnection();