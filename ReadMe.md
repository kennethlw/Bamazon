#Hello Visitor!

This app will be used to run and maintain a storefront by using either a customer view (bamazonCustomer.js) or a manager view (bamazonManager.js). They will both access the same database but have different functionality.

Words are great, but pictures are better! Let's take a look at some screenshots of the program.

###Customer View

![Customer Menu](/images/image1.jpg)

Here we can see what the customer will see. They can either choose to purchase an item or exit the store without making a purchase.

![Customer Buying](/images/image2.jpg)

If the customer selects the option to purchase an item, they will be shown all the items for sale with the prices

![Customer Purchase](/images/image3.jpg)

Once the customer selects an item they want to buy, the app asks them how many of that item they would like to purchase. If the item is in stock, then the program calculates the total price and displays it.

![Customer Error](/images/image4.jpg)

Now if there is not sufficient quantity to fulfill the customer order, the program will display that and have the customer choose a lower amount.

![Customer Exit](/images/image5.jpg)

Once the customer wants to leave the store, the program displays the farewell message

###Manager View

![Manager Menu](/images/image6.jpg)

The manager view has more options. They can view inventory, view low inventory (less than 5 quantity), add more inventory to existing items, or add a completely new product!

![Manager Inventory](/images/image8.jpg)

This displays all inventory for the store. Notice that unlike the customer view, there is an additional quantity column!

![Manager Low Inventory](/images/image9.jpg)

Displays all items that have less than 5 quantity. Now since we are a good store, and never let our inventory get that low, there is nothing to display here. =)


![Manager Add Inventory](/images/image10.jpg)

Let's say we just received a shipment and want to add to the current inventory. Let's add 1000 quantity of item #1 (hair dryer);


![Manager Add Successful](/images/image11.jpg)

Here we can see that the item has been successfully updated and just to make sure, let's display all inventory. As you can see, the quantity of hair dryers has now been updated to reflect 28 + 1000 = 1028.


![Manager Add Product](/images/image12.jpg)

Let's add some VHS tapes for old time's sake. The manager will be prompted for item name, price, dept name, and quantity. Once successfully added, the program will display a success message.


![Database](/images/image13.jpg)

Finally, let's take a look at what's holding all our products: the database! 

Thank you for taking the time to read this readme. Hope you enjoy the program!


