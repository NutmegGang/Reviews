const pool = require('../../DB/Postgres/index.js');

// Build queries here

const selectReviewsByProductID = async (productID) => {
    console.log(productID)
    const results = await pool.query(`
      SELECT * FROM "public".reviews
      WHERE product_id = ${productID};
    `)
    return results;
}

const helpfulByProductID = async (reviewID) => {
  const result = await pool.put(`
    UPDATE helpfulness FROM "public".reviews
    SET helpfulness = helpfulness + 1
<<<<<<< HEAD
    WHERE id = ${reviewID};
=======
    WHERE product_id = ${reviewID};
>>>>>>> 1fd4a848248b1e896f2e0bfae1956e5d9901795c
    `)
    return results;
}

// need an update to increase helpfulness

module.exports = {
  selectReviewsByProductID,
  helpfulByProductID
}