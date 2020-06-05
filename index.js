const express = require('express');
const app = express();

const bodyParser = require('body-parser');

//BODY PARSER
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const parserRoute = require('./parser');


app.use('/parser', parserRoute);

app.listen(3000);

module.exports = app;