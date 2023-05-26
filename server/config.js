// configuration file

export const PORT = 4000;

//database info
import { Pool } from 'postgres-pool';

export const pool = new Pool({
  host: 'localhost',
  database: 'postgres',
  user: 'spalacioj',
  password: '1q2w3e4r5t',
  port: 5432,
});

