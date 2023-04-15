const mysql = require("mysql");
require('dotenv').config();

var con = mysql.createConnection({
    host: process.env.DBHOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DBNAME
});

con.connect(err=> err ? console.log(err) : console.log("success conection") );


module.exports = con;