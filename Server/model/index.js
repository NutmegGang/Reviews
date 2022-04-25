const pool = require('../../DB/Postgres/index.js');

// ===== Reviews by Product ID ---> Nest the photo information
const selectReviewsByProductID = async (productID) => {
  const results = await pool.query(`
    SELECT *, json_agg(rp) as photos

    FROM reviews r

    JOIN photos rp
    ON r.id = rp.review_id

    WHERE r.product_id = ${productID} AND
    rp.review_id = r.id AND
    r.reported = false

    GROUP BY r.id, rp.review_id, rp.id
  `)
  return results;
}

// ===== Characteristics By Product ID
const characteristicsByProdID = async (product_id) => {
  const results = await pool.query(`
  SELECT ch.product_id, jsonb_object_agg(ch.name, json_build_object(
		'id', ch.id, 'value', cd.value) ) AS characteristics
        FROM meta ch
        JOIN meta_data cd
        ON ch.id = cd.cid
        WHERE product_id = ${product_id}

		GROUP BY ch.product_id
  `)
  return results;
}

// ===== Increment Helpfulness
const helpfulByProductID = async (review_id) => {
  console.log(review_id)
  const result = await pool.query(`
    UPDATE reviews
    SET helpfulness = helpfulness + 1
    WHERE id = ${review_id};
    `)
    return results;
}

  // ===== Handle Report Review Feature
  const reportReviewByID = async (review_id) => {
    const results = await pool.query(`
      UPDATE reviews
      SET reported = true
      WHERE id = ${review_id}
    `)
    return results;
  }

  // ===== Handle Sort Reviews
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
  selectReviewsByProductID,
  characteristicsByProdID,
  helpfulByProductID,
  reportReviewByID,
  sortByRating,
}