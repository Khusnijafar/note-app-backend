require('dotenv').config();
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: process.env.DB_HOST  || 'remotemysql.com',
    user: process.env.DB_USER || 'cO2LaSCYh3',
    password: process.env.DB_PASS || 'Q9Z5E62jMb',
    database: process.env.DB_NAME || 'cO2LaSCYh3',
});

connection.connect((err) => {
    if (err) console.log(`Error: ${err}`);
});

module.exports = connection;