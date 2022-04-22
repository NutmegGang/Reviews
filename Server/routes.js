const router = require('express').Router();
const controller = require('./controller/index.js');

// connect model/controller here
router.get('/reviews/:product_id', controller.reviewsByID);
router.get('/reviews_photos/:review_id', controller.photosByID);
router.post('/reviews/:review_id/helpfulness', controller.helpful);

module.exports = router;