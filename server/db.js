import { Pool } from 'postgres-pool';

export const pool = new Pool({
    host: 'localhost',
    database: 'parkingpass',
    user: 'localhost',
    password: 'vaalmopostgres',
    port: 5432,
  });



