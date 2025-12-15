import pkg from 'pg';
const { Pool } = pkg;
import { dbConfig } from '../config.js'
import dns from 'dns';
import { promisify } from 'util';

const resolve4 = promisify(dns.resolve4);

let pool;

export async function getConnection() {
    try {
        if (!pool) {
            // Resolver el hostname a IPv4 ANTES de crear el pool
            let resolvedHost = dbConfig.host;
            
            try {
                console.log(`Resolviendo ${dbConfig.host} a IPv4...`);  // ← FALTABA PARÉNTESIS
                const addresses = await resolve4(dbConfig.host);
                if (addresses && addresses.length > 0) {
                    resolvedHost = addresses[0];
                    console.log(`✓ Resuelto a IPv4: ${resolvedHost}`);  // ← FALTABA PARÉNTESIS
                }
            } catch (dnsError) {
                console.log('⚠ No se pudo resolver a IPv4, usando hostname original');
            }
            
            // Crear pool con la configuración modificada
            pool = new Pool({
                ...dbConfig,
                host: resolvedHost  // Usar la IP resuelta
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