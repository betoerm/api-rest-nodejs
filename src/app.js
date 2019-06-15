
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
const router = express.Router();
//Rotas
const index = require('./routes/index');
const personRoute = require('./routes/personRoute');
const produtosRoute = require('./routes/produtosRoute');
const pedidosRoute = require('./routes/pedidosRoute');
const pagamentosRoute = require('./routes/pagamentosRoute');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/', index);
app.use('/person', personRoute);
app.use('/produtos', produtosRoute);
app.use('/pedidos', pedidosRoute);
app.use('/pagamentos', pagamentosRoute);



module.exports = app;
