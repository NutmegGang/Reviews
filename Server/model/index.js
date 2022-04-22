const pool = require('../../DB/Postgres/index.js');

// ===== Reviews by Product ID
const selectReviewsByProductID = async (productID) => {
    const results = await pool.query(`
      SELECT * FROM "public".reviews
      WHERE product_id = ${productID};
    `)
    return results;
}

// ===== Photos By Review ID
const photosByReviewID = async (reviewID) => {
  const results = await pool.query(`
    SELECT * FROM "public".reviews_photos
    WHERE review_id = ${reviewID};
  `)
  return results;
}

// ===== Characteristics By Product ID
const characteristicsByProdID = async (product_id) => {
  const results = await pool.query(`
    SELECT * FROM "public".characteristics
    WHERE product_id = ${product_id};
  `)
  return results;
}

// ===== Characteristic Values by Review ID
const characteristicValuesByReview = async (review_id) => {
  const results = await pool.query(`
    SELECT * FROM "public".characteristic_reviews
    WHERE review_id = ${review_id};
  `)
  return results;
}


// ===== Increment Helpfulness -------> Not Done Yet
const helpfulByProductID = async (reviewID) => {
  const result = await pool.put(`
    UPDATE helpfulness FROM "public".reviews
    SET helpfulness = helpfulness + 1
    WHERE product_id = ${reviewID};
    `)
    return results;
}


module.exports = {
  selectReviewsByProductID,
  helpfulByProductID,
  characteristicValuesByReview,
  characteristicsByProdID,
  photosByReviewID
}