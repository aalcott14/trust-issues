const express = require('express');
const path = require('path');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../client')));

app.listen('3030', () => {
  console.log('Listening on port 3030...');
});
