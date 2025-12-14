import pkg from 'pg';
const { Pool } = pkg;
import { dbConfig } from '../config.js'

let pool;

export async function getConnection() {
    try {
        if (!pool) {
            pool = new Pool(dbConfig);
        }
        return pool;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export { pool };