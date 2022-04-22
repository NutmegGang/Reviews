const model = require('../model/index.js');

  // ===== Reviews by Product ID
  const reviewsByID = async (req, res) => {
    console.log('here')
      await model.selectReviewsByProductID(req.params.product_id)
      .then((response) => {
        res.send(response.rows);
      })
      .catch((error) => {
        res.status(500).send(error);
      })
  }

  // Reviews by Page and Count Selection -----> To-Do




  // ===== Photos by Review ID
  const photosByID = async (req, res) => {
    await model.photosByReviewID(req.params.review_id)
    .then((response) => {
      res.send(response.rows);
    })
    .catch((error) => {
      res.status(500).send(error);
    })
  }

  // ===== Characteristic by Product ID
  const characteristicsByID = async (req, res) => {
    await model.characteristicsByProdID(req.params.product_id)
    .then((response) => {
      res.send(response.rows);
    })
    .catch((error) => {
      res.status(500).send(error);
    })
  }

  // ===== Characteristic Values by Review ID
  const characteristicValues = async (req, res) => {
    await model.characteristicValuesByReview(req.params.review_id)
    .then((response) => {
      res.send(response.rows);
    })
    .catch((error) => {
      res.status(500).send(error);
    })
  }

  // ===== Handle Report Review Feature -----> To-Do

  // ===== Handle Sort Reviews -----> To-Do

  // ===== Update Helpful Count ----> Not Working Yet
  const helpful = async (req, res) => {
    await model.helpfulByProductID(req.params.product_id)
    .then((response) => {
      console.log(response, 'this is response')
      res.send(response.rows);
    })
    .catch((error) => {
      res.status(500).send(error);
    })
  }

  module.exports = {
    reviewsByID,
    photosByID,
    characteristicsByID,
    characteristicValues,
    helpful
  }