function extractAndReverse(arr) {
    // Extract a subarray from the 3rd (index 2) to the 5th (index 4) element
    let subArray = arr.slice(2, 4);
    
    // Reverse the extracted subarray
    let reversedSubArray = subArray.reverse();
    
    // Return the reversed subarray
    return reversedSubArray;
}

// Test the function with the given array
let originalArray = [15, 30, 45, 60, 75, 90];
let result = extractAndReverse(originalArray);

console.log("Reversed Subarray:", result); // Output: [60, 45]
console.log("Original Array:", originalArray); // Ensure the original array remains unchanged
