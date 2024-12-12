function createHeavyDataHandler() {
    let largeData = new Array(1000000).fill(0); // Large data array
  
    return {
      processData: function () {
        console.log("Processing data of size:", largeData.length);
      },
      clearData: function () {
        console.log("Clearing data");
        largeData = null; // This frees the large data for garbage collection
      },
      // Optionally, you can add a method to explicitly release the closure
      releaseHandler: function () {
        // The handler itself can be released to allow garbage collection
        this.processData = null; // Removes the reference to processData
        this.clearData = null; // Removes the reference to clearData
      }
    };
  }
  
  const handler = createHeavyDataHandler();
  
  handler.processData(); // Output: Processing data of size: 1000000
  handler.clearData(); // Output: Clearing data
  
  // Call releaseHandler to ensure the closure and references are cleaned up
  handler.releaseHandler();
  
  // Now, the memory should be freed as the closure no longer holds any references to largeData
  