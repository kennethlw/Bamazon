var mysql = require('mysql');
var inquirer = require('inquirer');
var consoleTable = require('console.table');

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "terran",
  database: "bamazon_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  createProduct();
});

function createProduct() {
  //product name, dept name, price, quantity
  var products = [
     [1,"Hair Dryer", "Appliances", 29.99, 50],
     [2,"Toilet Paper", "Toiletries", 4.99, 1000],
     [3,"Toothpaste", "Toiletries", 2.99, 1000],
     [4,"Toothbrush", "Toiletries", 1.99, 2000],
     [5,"Toaster", "Appliances", 19.99, 100],
     [6,"Tea Kettle", "Appliances", 19.99, 100],
     [7,"Blender", "Appliances", 99.99, 50],
     [8,"Razor", "Toiletries", 9.99, 200],
     [9,"Shampoo", "Toiletries", 14.99, 100],
     [10,"Conditioner", "Toiletries", 19.99, 100]
     ];
  var sql = "INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES?";
  var query = connection.query(sql, [products], function(err, res) {
          
  start();
  });

}

function start() {
  inquirer
    .prompt({
      name: "choice",
      type: "rawlist",
      message: "Select from following options",
      choices: ["Purchase item(s)", "Exit the store"]
    })
    .then(function(answer) {
      // based on their answer, either call the bid or the post functions
      if (answer.choice === "Purchase item(s)") {
        readProduct();
        buyProduct();
      }
      else if (answer.choice === "Exit the store") {
        console.log("Thank you for visiting. Come again soon.")
        connection.end();
      }
    });
}

function readProduct() {
  console.log("Selecting all products...\n");
  connection.query("SELECT item_id, product_name, price FROM products", function(err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.log('\n');
    console.log("--------------------------------------------------------");
    for (var i = 0; i < res.length; i++) {
      console.log("ITEM ID: " + res[i].item_id + " || PRODUCT NAME: " + res[i].product_name + " || PRICE (USD): " +res[i].price);
      
    };
    console.log("--------------------------------------------------------");
  });
}

function buyProduct() {
    inquirer
    .prompt([
      {
        name: "item",
        type: "input",
        message: "What item would you like to purchase?",
        validate: function(value) {
          if (isNaN(value) === false) {
            return true;
          }
          return false;
        }
      },
      {
        name: "quantity",
        type: "input",
        message: "How many would you like to purchase?",
        validate: function(value) {
          if (isNaN(value) === false) {
            return true;
          }
          return false;
        }
      }
    ])
    .then(function(answer) {
      // when finished prompting, insert a new item into the db with that info
      connection.query(
        "SELECT stock_quantity FROM products WHERE item_id=?", [answer.item], 
        function(err,res) {
          if (err) throw err;
      
          if (res[0].stock_quantity >= answer.quantity) {
            checkout(answer.quantity, answer.item);
          } else if (res[0].stock_quantity === 0) {
              console.log("Item out of stock. Please check back soon.");
              buyProduct();
            }
            else {
              console.log("Insufficient quantity to fulfill your order. Please select a lower amount.");
              buyProduct();
          }
        }
      );
    });
  }

function checkout(quantity, id) {
    var price = 0;
    connection.query(
        "SELECT price FROM products WHERE item_id=?", [id], 
        function(err,res) {
          if (err) throw err;
          price = res[0].price;
    });
    connection.query(
      "UPDATE products SET stock_quantity = stock_quantity-1  WHERE item_id=?", [id],
      function(err, res) {
        if (err) throw err;
        console.log("Thank you for your purchase. Your total is: $" + (quantity * price).toFixed(2));
      });
    setTimeout(start, 1000);
  }
