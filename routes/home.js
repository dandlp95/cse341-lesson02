const routes = require('express').Router();

routes.get('/', function (req, res){
    res.send('Home here...');

})

module.exports = routes;