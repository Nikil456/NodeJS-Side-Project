// const mysql = require('mysql2');
// require('dotenv').config();

// const pool = mysql.createPool({
//     host: 'localhost',
//     user: process.env.DB_USER,
//     database: 'node-project-database',
//     password: process.env.DB_PASSWORD
// });

// module.exports = pool.promise();

// require('dotenv').config();

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db; 

const mongoConnect = (callback) => {
    MongoClient.connect('mongodb+srv://kandalanikil:AfemlUlwvAybOAin@cluster0.s3y3s.mongodb.net/shop?retryWrites=true')
    .then(client => {
        console.log('Connected');
        _db = client.db();
        callback(client);
    })
    .catch(err => {
        console.log(err);
        throw err;
    });
};

const getDb = () => {
    if (_db) {
        return _db;
    }
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;