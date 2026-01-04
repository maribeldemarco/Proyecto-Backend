import pkg from 'pg';
const { Pool } = pkg;

let pool;

export async function getConnection() {
    try {
        if (!pool) {
            pool = new Pool({
                connectionString: process.env.DATABASE_URL,  // ⭐ Usar esto
                ssl: {
                    rejectUnauthorized: false
                },
                max: 3
            });
            
            console.log('✓ Pool de conexión creado');
        }
        return pool;
    } catch (error) {
        console.log('✗ Error en getConnection:', error);
        throw error;
    }
}

export { pool };