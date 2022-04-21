const model = require('../model/index.js');

// Build server response here

module.exports = {
  reviewsByID: async (req, res) => {
      console.log(req.params.product_id, 'this is req')
      await model.selectReviewsByProductID(req.params.product_id)
      .then((response) => {
        console.log(response, 'this is response')
      })
      .catch((error) => {
        console.log(error, 'sucks to suck')
      })
  },
}