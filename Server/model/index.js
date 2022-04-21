const pool = require('../../DB/Postgres/index.js');

// Build queries here

const getAProduct = async () => {
  const results = await pool.query(`
  SELECT * FROM postgres LIMIT 1
  `)
  .then((response) => {
    console.log(response, 'this is a response')
  })
  .catch((error) => {
    console.log(error, 'womp womp, error!')
  })
}