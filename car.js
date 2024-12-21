// Constructor function for Car
function Car(make, model, year, isAvailable = true) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.isAvailable = isAvailable;
  }
  
  // Constructor function for Customer
  function Customer(name) {
    this.name = name;
    this.rentedCars = [];
  }
  
  // Method to rent a car
  Customer.prototype.rentCar = function(car) {
    if (car.isAvailable) {
      car.isAvailable = false;  // Mark the car as rented
      this.rentedCars.push(car); // Add car to the customer's rented cars
      console.log(`${this.name} rented a ${car.make} ${car.model}.`);
    } else {
      console.log(`${car.make} ${car.model} is already rented.`);
    }
  };
  
  // Method to return a car
  Customer.prototype.returnCar = function(car) {
    const carIndex = this.rentedCars.indexOf(car);
    if (carIndex > -1) {
      car.isAvailable = true;  // Mark the car as available
      this.rentedCars.splice(carIndex, 1);  // Remove the car from the rented cars list
      console.log(`${this.name} returned the ${car.make} ${car.model}.`);
    }
    
    // Simulate a delay in processing the return
    setTimeout(() => {
      console.log(`Processing return of ${car.make} ${car.model}...`);
    }, 2000);
  };
  
  // Constructor function for PremiumCustomer (inherits from Customer)
  function PremiumCustomer(name, discountRate) {
    Customer.call(this, name);  // Call the Customer constructor
    this.discountRate = discountRate;
  }
  
  // Inherit methods from Customer
  PremiumCustomer.prototype = Object.create(Customer.prototype);
  PremiumCustomer.prototype.constructor = PremiumCustomer;
  
  // Method to rent a car with discount for PremiumCustomer
  PremiumCustomer.prototype.rentCar = function(car) {
    if (car.isAvailable) {
      car.isAvailable = false;
      this.rentedCars.push(car);
      console.log(`${this.name} (Premium) rented a ${car.make} ${car.model} with a discount.`);
    } else {
      console.log(`${car.make} ${car.model} is already rented.`);
    }
  };
  
  // Function to calculate rental price
  function calculateRentalPrice(car, days, customer) {
    const basePricePerDay = 50; // Base price per day
    const carTypePrices = {
      SUV: 70,
      Sedan: 50,
      Hatchback: 40,
    };
  
    // Get the price based on the car type
    const carTypePrice = carTypePrices[car.model] || basePricePerDay;
  
    // Calculate the rental price
    let totalPrice = carTypePrice * days;
  
    // Apply discount for premium customers
    if (customer instanceof PremiumCustomer) {
      totalPrice -= totalPrice * (customer.discountRate / 100);
    }
  
    return totalPrice;
  }
  
  // Maintenance function
  function Maintenance(car, delay) {
    setTimeout(() => {
      car.isAvailable = true;
      console.log(`${car.make} ${car.model} is now available after maintenance.`);
    }, delay);
  }
  
  // Demonstration of functionality
  
  // Create car objects of different types
  const car1 = new Car("Toyota", "SUV", 2022);
  const car2 = new Car("Honda", "Sedan", 2021);
  const car3 = new Car("Ford", "Hatchback", 2020);
  
  // Create regular and premium customers
  const customer1 = new Customer("Alice");
  const premiumCustomer1 = new PremiumCustomer("Bob", 10); // 10% discount
  
  // Show renting and returning cars
  customer1.rentCar(car1);  // Alice rents the Toyota SUV
  premiumCustomer1.rentCar(car2);  // Bob rents the Honda Sedan with a discount
  
  // Calculate rental price for Alice (regular customer)
  const rentalPrice1 = calculateRentalPrice(car1, 5, customer1);
  console.log(`Total rental price for Alice: $${rentalPrice1}`);
  
  // Calculate rental price for Bob (premium customer)
  const rentalPrice2 = calculateRentalPrice(car2, 5, premiumCustomer1);
  console.log(`Total rental price for Bob (with discount): $${rentalPrice2}`);
  
  // Simulate the return process
  customer1.returnCar(car1); // Alice returns the Toyota SUV
  premiumCustomer1.returnCar(car2); // Bob returns the Honda Sedan
  
  // Simulate maintenance on the car
  Maintenance(car3, 3000);  // Ford Hatchback undergoes maintenance for 3 seconds
  