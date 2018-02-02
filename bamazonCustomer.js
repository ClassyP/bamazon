var inquirer = require('inquirer');
var mysql = require('mysql');
//require("console.table")
const cTable = require('console.table');
var Table = require('cli-table');
//require("console.table")


// Define the MySQL connection parameters
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'bamazon_db'
});

connection.connect((err) => {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
    console.log('connected as id ' + connection.threadId);
  });

getProducts();
// Created a series of questions
inquirer.prompt([
  {
    type: "input",
    name: "shopItem",
    message: "What item woul you like to buy???"
  },
  {
    type: "input",
    name: "amount",
    message: "How many would you like?"
  }

]).then((answers) => {
    console.log(answers);
    console.log(answers.amount);   
});

// Gets all the products from the "products" table and logs them to the console as a table
function getProducts() {
    // query mysql table
    connection.query('SELECT * FROM products', function (error, results) {
        if (error) console.log(error);
        // connected!
        console.table(results);
        //console.log(results);
      });
    // log resuts to the console
    
};
