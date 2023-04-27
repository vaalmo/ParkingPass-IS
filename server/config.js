// configuration file

export const PORT = 4000;

//database info
import { Pool } from 'postgres-pool';

export const pool = new Pool({
    host: 'xxxx',
    database: 'xxxx',
    user: 'xxxx',
    password: 'xxxx',
    port: xxxx,
  });

