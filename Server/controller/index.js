const model = require('../model/index.js');

// Build server response here

module.exports = {
  testQuery: async (req, res) => {
    console.log(req, 'this is a req')
    await model.getAProduct()
    .then((response) => {
      console.log(response, 'this is inside controllers')
    })
    .catch((error) => {
      console.log(error, 'this is insdie controllers')
    })
  },


}