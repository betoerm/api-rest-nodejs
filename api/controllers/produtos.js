'use strict';
var util = require('util');

module.exports = {
    produtos: produtos
};

function produtos(req, res) {
    // variables defined in the Swagger document can be referenced using req.swagger.params.{parameter_name}
    var name = req.swagger.params.name.value;
    var id =  req.swagger.params.id.value;
    var price =  req.swagger.params.price.value;
    var description =  req.swagger.params.description.value; 

    var produtos = {
        id, 
        name, 
        price, 
        description
    };
    
    // this sends back a JSON response which is a single string
    res.json({ "message": produtos });
}