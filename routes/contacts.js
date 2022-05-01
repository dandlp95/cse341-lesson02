const routes = require('express').Router();

routes.get('/', function (req, res){

    const dotenv = require('dotenv');
    dotenv.config();

    const MongoClient = require('mongodb').MongoClient;
    MongoClient.connect(process.env.MONGODB_URL, function(err, db) {
        if (err) throw err;
        var dbo = db.db("contacts");
        dbo.collection("contacts").find().toArray(function(err, result) {
            if (err) throw err;
            res.json(result);
            db.close();
        });
});
});

module.exports = routes;