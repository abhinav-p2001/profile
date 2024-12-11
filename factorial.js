function factorial(n) {
    // Check for invalid input
    if (typeof n !== 'number' || n < 0 || isNaN(n)) {
      console.log("Invalid input");
      return;
    }
  
    // Base case for recursion: factorial(0) is 1
    if (n === 0) {
      return 1;
    }
  
    // Recursive case
    return n * factorial(n - 1);
  }
  
  // Test cases
  console.log(factorial(5));   // Expected: 120
  console.log(factorial(0));   // Expected: 1
  console.log(factorial(-3));  // Expected: "Invalid input"
  console.log(factorial("abc")); // Expected: "Invalid input"
  console.log(factorial(3.5)); // Expected: "Invalid input"
  