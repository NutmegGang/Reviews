const compression = require('compression');
const router = require('./routes.js');
const express = require('express');
const morgan = require('morgan');
require('dotenv').config();
const app = express();

app.use(express.json());
app.use(router);
app.use(compression({threshold: 0, level: 9}));
app.use(morgan('dev'));

app.listen(process.env.PORT, () => {
  console.log(`Did somebody order a port ${process.env.PORT} ?`)
})

module.exports = app;



