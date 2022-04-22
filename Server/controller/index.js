const model = require('../model/index.js');

// Build server response here

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

  const photosByID = async (req, res) => {
    await model.photosByReviewID(req.params.review_id)
    .then((response) => {
      res.send(response.rows);
    })
    .catch((error) => {
      res.status(500).send(error);
    })
  }

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
    helpful
  }