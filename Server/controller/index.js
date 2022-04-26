const model = require('../model/index.js');

  // ===== Reviews by Product ID
  const reviewsByID = async (req, res) => {
      await model.selectReviewsByProductID(req.params.product_id)
      .then((response) => {
        res.send(response.rows);
      })
      .catch((error) => {
        res.status(404).send(error);
      })
  }

  // ===== Characteristic by Product ID
  const characteristicsByID = async (req, res) => {
    await model.characteristicsByProdID(req.params.product_id)
    .then((response) => {
      res.send(response.rows.pop());
    })
    .catch((error) => {
      res.status(404).send(error);
    })
  }


  // ===== Update Helpful Count ----> Not Working Yet
  const helpful = async (req, res) => {
    await model.helpfulByProductID(req.params.review_id)
    .then((response) => {
      res.status(204).send('Thank you for finding this helpful!');
    })
    .catch((error) => {
      res.status(500).send(error);
    })
  }

  // ===== Handle Report Review Feature -----> To-Do
  const reportedReview = async (req, res) => {
    await model.reportReviewByID(req.params.review_id)
    .then((response) => {
      res.status(204).send('This review has been reported and will no longer be visible!');
    })
    .catch((error) => {
      res.status(500).send(error)
    })
  }

  // ===== Handle Sort Reviews -----> To-Do
  const sortedByRating = async (req, res) => {
    await model.sortByRating(req.params.rating, req.params.productID)
    .then((response) => {
      res.send(response.rows)
    })
    .catch((error) => {
      res.status(500).send(error)
    })
  }

  module.exports = {
    characteristicsByID,
    sortedByRating,
    reportedReview,
    reviewsByID,
    helpful
  }