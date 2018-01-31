var inquirer = require('inquirer');
var mysql = require('mysql');
require("console.table")
var Table = require('cli-table');
require("console.table")


// Define the MySQL connection parameters
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'bamazon_db'
});