const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();

//app.use('/', require('./routes'));

app.listen(PORT, ()=>{
    console.log(`listening on PORT ${PORT}`);
});

const dotenv = require('dotenv');
dotenv.config();

const MongoClient = require('mongodb').MongoClient;
MongoClient.connect(process.env.MONGODB_URL, function(err, db) {
    if (err) throw err;
    var dbo = db.db("contacts");
    dbo.collection("contacts").find().toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});
