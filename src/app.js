
var SwaggerExpress = require('swagger-express-mw');
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

SwaggerExpress.create(config, function (err, swaggerExpress) {
    if (err) { throw err; }

    // install middleware
    swaggerExpress.register(app);

    var port = process.env.PORT || 10010;
    app.listen(port, function () {
        if (swaggerExpress.runner.swagger.paths['/hello']) {
            console.log('try this:\ncurl http://127.0.0.1:' + port + '/hello?name=Scott');
        }
        resolve(app);
    });
});

    module.exports = app;
