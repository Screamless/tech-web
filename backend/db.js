import pkg from 'pg';
const { Pool } = pkg;

export const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'sneaker_store',
  password: 'azerty123',
  port: 5432,
});
