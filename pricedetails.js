const checkout = {
    items: [],
    total: 0,
  
    // Method to add item to the checkout system
    addItem(item) {
      // Validate that the price is a valid number and not NaN
      if (typeof item.price !== 'number' || isNaN(item.price)) {
        console.log("Invalid price.");
        return;
      }
  
      // If the price is a string, convert it to a number
      if (typeof item.price === 'string') {
        item.price = parseFloat(item.price);
      }
  
      // Add the item to the items array and update the total
      this.items.push(item);
      this.total += item.price;
    },
  
    // Method to get the total with proper formatting
    getTotal() {
      // Ensure the total is displayed as a number with two decimal places
      return `Total: $${parseFloat(this.total).toFixed(2)}`;
    }
  };
  
  // Test the checkout system
  
  // Adding an item with a string price (should be converted to a number)
  checkout.addItem({ name: "Coffee Maker", price: "99.95" });
  
  // Adding an item with a valid numerical price
  checkout.addItem({ name: "Milk", price: 3.50 });
  
  // Display the total
  console.log(checkout.getTotal()); // Expected output: Total: $103.45
  