const router = require('express').Router();
const controller = require('./controller/index.js');

// GETS
router.get('/reviews/:product_id', controller.reviewsByID);
router.get('/meta/:product_id', controller.characteristicsByID);
router.get('/sort/:rating/:productID', controller.sortedByRating)
// GET AND SORT?


// UPDATES
router.put('/helpful/:review_id/helpfulness', controller.helpful); // good to go
router.put('/report/:review_id/reported', controller.reportedReview); // good to go



module.exports = router;