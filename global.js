// Step 1: Declare a global variable age
let age = 25;

// Step 2: Create a function displayAge that logs the value of age
function displayAge() {
  console.log("Age:", age);
}

// Step 3: Create a second function changeAge that updates the global age variable
function changeAge() {
  age = 30;  // Update the global variable age
  console.log("Age updated to:", age);
}

// Step 4: Call displayAge and changeAge to check how the value of age is updated
displayAge();  // Logs the initial value of age (25)

changeAge();  // Updates the age to 30

displayAge();  // Logs the updated value of age (30)
