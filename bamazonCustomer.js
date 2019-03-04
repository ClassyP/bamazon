//              Load the NPM Packages
const inquirer = require("inquirer");
require("console.table");
var mysql = require("mysql");
//              Initialize Connection w/MySQL
var con = mysql.createConnection({
  host: "127.0.0.1",
  // port: 3306,
  user: "root",
  password: "",
  database: "bamazon_db"
});


//              Initialize connection w/server and load data
con.connect(function(err) {
      if (err) {throw err}
      console.log("Successful Connection. Importing Data");
      showProducts();
      // con.end();
});    

//              Functions for application
function showProducts() {
    con.query(`SELECT * FROM products`, function(err, result, fields) {
          if (err) throw err;
          console.table(result);
          customerChoice(result);
        }
    );
};
//          Prompt for user selection
function customerChoice(inventory) {
    inquirer.prompt([
      {
        type: "input",
        name: "itemID",
        message: "What is the ID of the product you would like to buy?"
      }
    ])

 
    .then(function(val) {
      closeProgram(val.itemID);
      console.log(val);
      const choiceId = parseInt(val.itemID);
      const product = checkInventory(choiceId, inventory);


      // If an item matching request is picked ask how many
      if (product) {
        customerQuantity(product);
      }
      else {
      // Item not available
        console.log("\nSorry that's not available at this time");
        showProducts();
      }
    });
}

//  Function to prompt user for how many items they want to buy

function customerQuantity(product){
  inquirer.prompt([
    {
      type: "input",
      name: "quantity",
      message: "How many would you like?"
    }
  ])
  .then(function(val) {
    closeProgram(val.quantity);
    var quantity = parseInt(val.quantity);

    // if not in stock let them know
    if (quantity > product.stock_quantity) {
      console.log("\n Sorry we do not have enough for your order");
      showProducts();
    }
    else {
      finalizeTransaction(product, quantity);
    }
  });
}

//     Purchase the chosen amount and update database

function finalizeTransaction(product, quantity) {
  // console.log(product);
  con.query(
    "UPDATE products SET stock_quantity = stock_quantity - ? WHERE item_id = ?",
    [quantity,product.item_id],
    function(err, result) {
      // Provide confirmation to buyer
      console.log("\nSuccessful transaction " + quantity + " " + product.product_name + "'s!" + " Your total is $" + (product.price * quantity));
      // console.log(result);
      showProducts(); 
    }
  );
};

//      Confirm the item the buyer wants is available
function checkInventory(choiceId, inventory) {
  // if....else
  for (var i = 0; i < inventory.length; i++) {
    if (inventory[i].item_id === choiceId) {
      // return product if found
      return inventory[i];
    }
  }
  // return null if not
  return null;
  
};

function closeProgram(choice) {
  if (choice.toLowerCase() === "q") {
    // Log a message and exit the current node process
    console.log("Goodbye!");
    process.exit(0);
  }
};

