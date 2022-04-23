const router = require('express').Router();
const controller = require('./controller/index.js');

// GETS
router.get('/reviews/:product_id', controller.reviewsByID);
router.get('/reviews_photos/:review_id', controller.photosByID);
router.get('/characteristics/:product_id', controller.characteristicsByID);
router.get('/characteristic_reviews/:review_id', controller.characteristicValues);

// GET AND SORT?


// UPDATES
router.put('/reviews/:review_id/helpfulness', controller.helpful);
router.put('/reviews/:review_id/reported', controller.reportedReview);



module.exports = router;