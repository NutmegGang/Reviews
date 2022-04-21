const router = require('express').Router();
const controller = require('./controller/index.js');

// connect model/controller here

router.get('/reviews', controller.testQuery);