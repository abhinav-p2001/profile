function outerFunction() {
    const message = "Hello from the outer function!";
    
    // Return an inner function that logs the message
    return function() {
      console.log(message);
    };
  }
  
  // Invoke the outer function and store the result in a variable
  const innerFunction = outerFunction();
  
  // Call the stored function
  innerFunction(); // Logs: "Hello from the outer function!"
  