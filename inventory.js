// Factory function to create an inventory item
function createInventoryItem(name, category, price) {
    return {
      name: name,
      category: category,
      price: price,
      describeItem: function() {
        console.log(`Item: ${this.name}, Category: ${this.category}, Price: ${this.price}`);
      }
    };
  }
  
  // Factory function to add a discount to an inventory item
  function addItemDiscount(item, discountPercent) {
    // Calculate the discounted price
    let discountedPrice = item.price - (item.price * (discountPercent / 100));
    
    return {
      ...item, // Spread the original item properties
      discountedPrice: discountedPrice,
      applyDiscount: function() {
        console.log(`Discounted Price for ${this.name}: ${this.discountedPrice}`);
      }
    };
  }
  
  // Example usage:
  
  // Creating an inventory item
  const item = createInventoryItem("Laptop", "Electronics", 1500);
  item.describeItem();
  // Output: Item: Laptop, Category: Electronics, Price: 1500
  
  // Adding discount to the item
  const discountedItem = addItemDiscount(item, 10);
  discountedItem.applyDiscount();
  // Output: Discounted Price for Laptop: 1350
  