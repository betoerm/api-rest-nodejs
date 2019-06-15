
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
const router = express.Router();
//Rotas
const index = require('./routes/index');
const personRoute = require('./routes/personRoute');
const productsRoute = require('./routes/productsRoute');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/', index);
app.use('/person', personRoute);
app.use('/products', productsRoute);



module.exports = app;
