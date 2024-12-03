// Step 1: Initial array of 5 orders
let orders = [
    "101: John",
    "102: Alice",
    "103: Bob",
    "104: Charlie",
    "105: David"
  ];
  
  // Step 2: Adding 3 new orders to the front of the queue
  orders.unshift("106: Emma");
  orders.unshift("107: Olivia");
  orders.unshift("108: Sophia");
  
  // Step 3: Removing 2 orders from the end (fulfilled orders)
  orders.pop();
  orders.pop();
  
  // Step 4: Function to process each order
  function processOrders() {
    orders.forEach(order => {
      // Extract OrderID and CustomerName
      let [orderID, customerName] = order.split(": ");
      // Print processing message
      console.log(`Processing ${orderID} for ${customerName}`);
    });
  }
  
  // Step 5: Process all orders
  processOrders();
  
  // Step 6: Log the final queue of unprocessed orders
  console.log("Final queue of unprocessed orders:", orders);
  
  // Bonus: Find the customer with the longest name in the current queue
  let longestNameCustomer = orders.reduce((longest, currentOrder) => {
    let currentName = currentOrder.split(": ")[1];
    return currentName.length > longest.length ? currentName : longest;
  }, "");
  
  // Log the customer with the longest name
  console.log(`Customer with the longest name is: ${longestNameCustomer}`);
  