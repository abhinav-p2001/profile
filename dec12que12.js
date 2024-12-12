function createCounter() {
    let count = 0; // Private variable count
  
    return {
      increment: function() {
        count++; // Increment count by 1
        return count;
      },
      getCount: function() {
        return count; // Return the current count
      }
    };
  }
  
  // Create a counter instance
  const counter = createCounter();
  
  console.log(counter.increment()); // Output: 1
  console.log(counter.increment()); // Output: 2
  console.log(counter.getCount()); // Output: 2
  