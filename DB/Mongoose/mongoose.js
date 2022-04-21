const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const reviewSchema = mongoose.Schema({
  review_id: Number,
  reviewer_name: String,
  rating: Number,
  summary: String,
  recommend: Boolean,
  response: Boolean,
  body: String,
  date: Date,
  helpfulness: Number,
  photos: [{
    id: Number,
    url: String,
  }]
})

const Aetelier = mongoose.model('Aetelier', reviewsData);

module.exports = {Aetelier};