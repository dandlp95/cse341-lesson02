const dotenv = require('dotenv');
dotenv.config();

const MongoClient = require('mongodb').MongoClient;

let _client;
let _collection;

const initDatabase = () => {

    MongoClient.connect(process.env.MONGODB_URL, (err, client) => {
        if (err) throw err;
        _client = client;
        _collection = client.db("contacts").collection("contacts");

        console.log('Database  connected successfully');
    });
};

const getCollection = () => {
    return _collection;
}

module.exports = { initDatabase, getCollection };