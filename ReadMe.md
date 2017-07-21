#Hello Visitor!

This app will be used to run and maintain a storefront by using either a customer view (bamazonCustomer.js) or a manager view (bamazonManager.js). They will both access the same database but have different functionality.

Words are great, but pictures are better! Let's take a look at some screenshots of the program.

###Customer View

![Customer Menu](https://github.com/kennethlw/Bamazon/blob/master/Images/Image1.png)

Here we can see what the customer will see. They can either choose to purchase an item or exit the store without making a purchase.

![Customer Buying](https://github.com/kennethlw/Bamazon/blob/master/Images/Image2.png)

If the customer selects the option to purchase an item, they will be shown all the items for sale with the prices

![Customer Purchase](https://github.com/kennethlw/Bamazon/blob/master/Images/Image3.png)

Once the customer selects an item they want to buy, the app asks them how many of that item they would like to purchase. If the item is in stock, then the program calculates the total price and displays it.

![Customer Error](https://github.com/kennethlw/Bamazon/blob/master/Images/Image4.png)

Now if there is not sufficient quantity to fulfill the customer order, the program will display that and have the customer choose a lower amount.

![Customer Exit](https://github.com/kennethlw/Bamazon/blob/master/Images/Image5.png)

Once the customer wants to leave the store, the program displays the farewell message

###Manager View

![Manager Menu](https://github.com/kennethlw/Bamazon/blob/master/Images/Image6.png)

The manager view has more options. They can view inventory, view low inventory (less than 5 quantity), add more inventory to existing items, or add a completely new product!

![Manager Inventory](https://github.com/kennethlw/Bamazon/blob/master/Images/Image8.png)

This displays all inventory for the store. Notice that unlike the customer view, there is an additional quantity column!

![Manager Low Inventory](https://github.com/kennethlw/Bamazon/blob/master/Images/Image9.png)

Displays all items that have less than 5 quantity. Now since we are a good store, and never let our inventory get that low, there is nothing to display here. =)


![Manager Add Inventory](https://github.com/kennethlw/Bamazon/blob/master/Images/Image10.png)

Let's say we just received a shipment and want to add to the current inventory. Let's add 1000 quantity of item #1 (hair dryer);


![Manager Add Successful](https://github.com/kennethlw/Bamazon/blob/master/Images/Image11.png)

Here we can see that the item has been successfully updated and just to make sure, let's display all inventory. As you can see, the quantity of hair dryers has now been updated to reflect 28 + 1000 = 1028.


![Manager Add Product](https://github.com/kennethlw/Bamazon/blob/master/Images/Image12.png)

Let's add some VHS tapes for old time's sake. The manager will be prompted for item name, price, dept name, and quantity. Once successfully added, the program will display a success message.


![Database](https://github.com/kennethlw/Bamazon/blob/master/Images/Image13.png)

Finally, let's take a look at what's holding all our products: the database! 

Thank you for taking the time to read this readme. Hope you enjoy the program!


