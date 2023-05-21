// configuration file

export const PORT = 4000;

//database info
import { Pool } from 'postgres-pool';

export const pool = new Pool({
    host: 'localhost',
    database: 'parkingp',
    user: 'postgres',
    password: 'vaalmopostgres',
    port: 5432,
  });

