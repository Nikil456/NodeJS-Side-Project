const mysql = require('mysql2');
require('dotenv').config();

const pool = mysql.createPool({
    host: 'localhost',
    user: process.env.DB_USER,
    database: 'node-project-database',
    password: process.env.DB_PASSWORD
});

module.exports = pool.promise();