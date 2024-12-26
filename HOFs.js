// CustomArray constructor
function CustomArray(initialData = []) {
    this.data = initialData; // Internal data array

    // Map method
    this.map = function(callback) {
        return this.data.map(callback);
    };

    // Filter method
    this.filter = function(callback) {
        return this.data.filter(callback);
    };

    // Reduce method
    this.reduce = function(callback, initialValue) {
        return this.data.reduce(callback, initialValue);
    };

    // ForEach method
    this.forEach = function(callback) {
        this.data.forEach(callback);
    };

    // Sort method
    this.sort = function(compareFunction) {
        return this.data.slice().sort(compareFunction); // Return a sorted copy
    };
}

// Test the CustomArray methods
const myArray = new CustomArray([5, 2, 9, 1, 5, 6]);

// Map: Double each element
const doubled = myArray.map(num => num * 2);
console.log("Doubled:", doubled); // [10, 4, 18, 2, 10, 12]

// Filter: Get elements greater than 5
const greaterThanFive = myArray.filter(num => num > 5);
console.log("Filtered (greater than 5):", greaterThanFive); // [9, 6]

// Reduce: Calculate the sum of all elements
const sum = myArray.reduce((acc, num) => acc + num, 0);
console.log("Sum:", sum); // 28

// ForEach: Print each element
console.log("ForEach:");
myArray.forEach(num => console.log(num)); // 5, 2, 9, 1, 5, 6

// Sort: Ascending order
const sortedAsc = myArray.sort((a, b) => a - b);
console.log("Sorted (ascending):", sortedAsc); // [1, 2, 5, 5, 6, 9]

// Sort: Descending order
const sortedDesc = myArray.sort((a, b) => b - a);
console.log("Sorted (descending):", sortedDesc); // [9, 6, 5, 5, 2, 1]
