const { drizzle } = require('drizzle-orm/node-postgres');
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: 'postgres://aminul:myPass@127.0.0.1:5432/mydb',
});

const db = drizzle(pool);

module.exports = db;
