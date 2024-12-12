function createFunctionList() {
    let functions = [];
  
    for (let i = 0; i < 5; i++) { // Use let instead of var
  
      functions.push(function () {
        console.log("Index:", i); // Now it correctly captures the value of i
      });
  
    }
  
    return functions;
  }
  
  const functionList = createFunctionList();
  
  functionList[0](); // Output: "Index: 0"
  functionList[1](); // Output: "Index: 1"
  functionList[2](); // Output: "Index: 2"
  functionList[3](); // Output: "Index: 3"
  functionList[4](); // Output: "Index: 4"
  