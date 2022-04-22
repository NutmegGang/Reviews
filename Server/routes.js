const router = require('express').Router();
const controller = require('./controller/index.js');

// connect model/controller here

// GETS
router.get('/reviews/:product_id', controller.reviewsByID);
router.get('/reviews_photos/:review_id', controller.photosByID);
router.get('/characteristics/:product_id', controller.characteristicsByID);
router.get('/characteristic_reviews/:review_id', controller.characteristicValues);

// UPDATES
router.post('/reviews/:review_id/helpfulness', controller.helpful);


module.exports = router;