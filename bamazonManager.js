
var inquirer = require('inquirer');
var mysql = require('mysql');

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: " ",
  database: "bamazon_db"
});

//make a connection
connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  //inquire user 
  inquireUser();
});

//inquire function
function inquireUser(){
 //post or bid?  
  inquirer.prompt([{
    type: 'rawlist',
    choices: ['View Products for Sale', 'View Low Inventory', 'Add to Inventory', 'Add New Product', 'Exit the store'],
    message: 'Select a mode',
    name: 'mode'
  }]).then(function(res){
    //execute POST or BID
    if (res.mode === 'View Products for Sale') {
      readProducts();
    }
    else if (res.mode === 'View Low Inventory') {
      viewInventory();
    }
    else if(res.mode === 'Add to Inventory') {
      addInventory();
    }
    else if(res.mode === 'Add New Product') {
      addProduct();
    }
    else if(res.mode === 'Exit the store') {
      console.log("Exiting...");
      connection.end();
    }
  });
}

function readProducts() {
  console.log("Selecting all products...\n");
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.log('\n');
    console.log("--------------------------------------------------------");
    for (var i = 0; i < res.length; i++) {
      console.log("ITEM ID: " + res[i].item_id + " || PRODUCT NAME: " + res[i].product_name + " || PRICE (USD): " +res[i].price + " || QTY: " +res[i].stock_quantity);
      
    };
    console.log("--------------------------------------------------------");
  });

  setTimeout(inquireUser, 2000);
}

function viewInventory() {
  console.log("Selecting all products with quantity less than 5\n");
  connection.query("SELECT item_id, product_name, stock_quantity FROM products WHERE stock_quantity < 5", function(err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.log('\n');
    console.log("--------------------------------------------------------");
    if (res[0] == null) {
      console.log("There are no products with a quantity of less than 5");
      
    }
    else {
      for (var i = 0; i < res.length; i++) {
        console.log("ITEM ID: " + res[i].item_id + " || PRODUCT NAME: " + res[i].product_name + " || QTY: " +res[i].stock_quantity);
      };
    }
      console.log("--------------------------------------------------------");
  });

  setTimeout(inquireUser, 2000);
}

function addInventory() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.log('\n');
    console.log("--------------------------------------------------------");
    for (var i = 0; i < res.length; i++) {
      console.log("ITEM ID: " + res[i].item_id + " || PRODUCT NAME: " + res[i].product_name + " || PRICE (USD): " +res[i].price + " || QTY: " +res[i].stock_quantity);    
    };
    console.log("--------------------------------------------------------");
  });

  inquirer
  .prompt({
      name: "choice",
      type: "input",
      message: "Select item to add to inventory",
  })
  .then(function(answer) {
  var item = answer.choice;
  inquirer
  .prompt({
      name: "quantity",
      type: "input",
      message: "Select quantity to add to stock",
      })
    .then(function(answer) {
    connection.query("UPDATE products SET stock_quantity=stock_quantity+? WHERE item_id= ?", [answer.quantity, item], function(err, res) {
    if (err) throw err;
    
    console.log('\n');
    console.log("--------------------------------------------------------");
    console.log("Item ID: " + item + " successfully updated");
    console.log("--------------------------------------------------------");
  });
    setTimeout(inquireUser, 2000);
 })
})
}

function addProduct() {
  inquirer.prompt([{
    type: 'input',
    message: 'Enter item name to add',
    name: 'name'
  },
  {
    type: 'input',
    message: 'Enter item price to add',
    name: 'price'
  },
  {
    type: 'input',
    message: 'Enter quantity of item to add',
    name: 'quantity'
  },
  {
    type: 'input',
    message: 'Enter department of item to add',
    name: 'dept'
  }]).then(function(res){
    //add this item to mySQL database
    connection.query('INSERT INTO products set ?', {
      product_name:res.name,
      department_name:res.dept,
      price:res.price,
      stock_quantity: res.quantity
    }, function(err, res2){
      if (err) throw err;
      console.log('Your item was successful added to the database.');
      inquireUser();
    });
  });
}


