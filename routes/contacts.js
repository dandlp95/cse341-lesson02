const routes = require('express').Router();
const connect = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

routes.get('/', function (req, res){

    const results = connect.getCollection().find();

    results.toArray().then((documents)=>{
            res.status(200).json(documents);
            console.log('Returned all contacts.');
        });
});

routes.get('/:id', function (req, res){

    const contactId = new ObjectId(req.params.id);
    const results = connect.getCollection().find({_id: contactId});

    results.toArray().then((documents)=>{
            res.status(200).json(documents[0]);
            console.log('Returned one contact.');
        });
});


module.exports = routes;