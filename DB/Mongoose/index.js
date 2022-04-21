const mongoose = require('mongoose');
const mongoose = 'mongodb://localhost/3000';
mongoose.Promise = global.Promise;


mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const db = mongoose.connection;

db.once('connected', () => {
  console.log('Mongo Happy')
})

module.exports = db;