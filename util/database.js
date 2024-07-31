// const mysql = require('mysql2');
// require('dotenv').config();

// const pool = mysql.createPool({
//     host: 'localhost',
//     user: process.env.DB_USER,
//     database: 'node-project-database',
//     password: process.env.DB_PASSWORD
// });

// module.exports = pool.promise();

require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-project-database', process.env.DB_USER, process.env.DB_PASSWORD, {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306
});

module.exports = sequelize;