const pool = require('../../DB/Postgres/index.js');

// ===== Reviews by Product ID ---> Nest the photo information
const selectReviewsByProductID = async (productID) => {
  const results = await pool.query(`
    SELECT *, json_agg(rp) as photos
    FROM "public".reviews r
    JOIN "public".reviews_photos rp
    ON r.id = rp.review_id
    WHERE r.product_id = ${productID} AND
    rp.review_id = r.id AND
    r.reported = false
    GROUP BY r.id, rp.review_id, rp.id
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
    WHERE product_id = ${product_id}
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

// ===== Increment Helpfulness
const helpfulByProductID = async (review_id) => {
  console.log(review_id)
  const result = await pool.query(`
    UPDATE "public".reviews
    SET helpfulness = helpfulness + 1
    WHERE id = ${review_id};
    `)
    return results;
}

  // ===== Handle Report Review Feature
  const reportReviewByID = async (review_id) => {
    const results = await pool.query(`
      UPDATE "public".reviews
      SET reported = true
      WHERE id = ${review_id}
    `)
    return results;
  }



  // ===== Handle Sort Reviews -----> To-Do
  const sortByRating = async (rating, productID) => {
    const results = await pool.query(`
      SELECT * FROM "public".reviews
      WHERE rating = ${rating} AND
      product_id = ${productID} AND
      reported = false
    `)
    return results;
  }


module.exports = {
  characteristicValuesByReview,
  selectReviewsByProductID,
  characteristicsByProdID,
  helpfulByProductID,
  photosByReviewID,
  reportReviewByID,
  sortByRating,
}