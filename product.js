// Base constructor function for Product
function Product(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
  
  // Method to update the quantity of a product
  Product.prototype.updateQuantity = function(newQuantity) {
    this.quantity = newQuantity;
    console.log(`The quantity of ${this.name} has been updated to ${this.quantity}.`);
  };
  
  // Method to display product details
  Product.prototype.displayDetails = function() {
    console.log(`Product: ${this.name}`);
    console.log(`Price: $${this.price}`);
    console.log(`Quantity: ${this.quantity}`);
  };
  
  // Constructor for Electronics, inheriting from Product
  function Electronics(name, price, quantity, brand, model) {
    Product.call(this, name, price, quantity); // Call the Product constructor
    this.brand = brand;
    this.model = model;
  }
  
  // Set Electronics prototype to inherit from Product
  Electronics.prototype = Object.create(Product.prototype);
  Electronics.prototype.constructor = Electronics;
  
  // Add methods specific to Electronics
  Electronics.prototype.powerOn = function() {
    console.log(`${this.brand} ${this.model} is now powered on.`);
  };
  
  Electronics.prototype.powerOff = function() {
    console.log(`${this.brand} ${this.model} is now powered off.`);
  };
  
  // Constructor for Clothing, inheriting from Product
  function Clothing(name, price, quantity, size, color) {
    Product.call(this, name, price, quantity); // Call the Product constructor
    this.size = size;
    this.color = color;
  }
  
  // Set Clothing prototype to inherit from Product
  Clothing.prototype = Object.create(Product.prototype);
  Clothing.prototype.constructor = Clothing;
  
  // Add methods specific to Clothing
  Clothing.prototype.displaySize = function() {
    console.log(`Size: ${this.size}`);
  };
  
  Clothing.prototype.displayColor = function() {
    console.log(`Color: ${this.color}`);
  };
  
  // Constructor for Books, inheriting from Product
  function Books(name, price, quantity, author, genre) {
    Product.call(this, name, price, quantity); // Call the Product constructor
    this.author = author;
    this.genre = genre;
  }
  
  // Set Books prototype to inherit from Product
  Books.prototype = Object.create(Product.prototype);
  Books.prototype.constructor = Books;
  
  // Add methods specific to Books
  Books.prototype.displayAuthor = function() {
    console.log(`Author: ${this.author}`);
  };
  
  Books.prototype.displayGenre = function() {
    console.log(`Genre: ${this.genre}`);
  };
  
  // Demonstration of functionality
  
  // Create instances of different product types
  const laptop = new Electronics("Laptop", 1000, 50, "Dell", "XPS 15");
  const shirt = new Clothing("T-Shirt", 20, 100, "L", "Blue");
  const book = new Books("JavaScript for Beginners", 15, 200, "John Doe", "Programming");
  
  // Display details of each product
  laptop.displayDetails();
  laptop.powerOn();
  laptop.powerOff();
  
  shirt.displayDetails();
  shirt.displaySize();
  shirt.displayColor();
  
  book.displayDetails();
  book.displayAuthor();
  book.displayGenre();
  
  // Update quantity and display again
  laptop.updateQuantity(45);
  shirt.updateQuantity(120);
  book.updateQuantity(180);
  