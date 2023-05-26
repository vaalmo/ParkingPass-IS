// configuration file

export const PORT = 4000;

//database info
import { Pool } from 'postgres-pool';

export const pool = new Pool({
    host: 'localhost',
    database: 'parkingpass',
    user: 'postgres',
    password: '1174',
    port: 5432,
});
