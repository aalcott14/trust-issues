const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../client')));
app.use(bodyParser.json()); // get info from html forms;
app.use(bodyParser.urlencoded({
  extended: true,
}));

app.listen('3030', () => {
  console.log('Listening on port 3030...');
});
