const {Pool} = require('pg');
require('dotenv').config();

module.exports = new Pool({
  host: 'localhost',
  port: 5432,
  database: `${process.env.DB}`,
  username: `${process.env.USER}`,
  password: `${process.env.PW}`,
  idleTimeoutMillis: 5000,
  connectionTimeoutMillis: 5000,
})









