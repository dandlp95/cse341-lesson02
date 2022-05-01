const routes = require('express').Router();
const connect = require('../db/connect');

routes.get('/', function (req, res){

    connect.getCollection().find().toArray((err, result)=>{
            if (err) throw err;
            res.json(result);
            console.log('Contacts Query Succesful')
        });
});
module.exports = routes;