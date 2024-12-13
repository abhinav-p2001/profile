function modifyAndMerge(arr1, arr2) {
    // Create copies of the original arrays to avoid modifying them
    let copyArr1 = arr1.slice();
    let copyArr2 = arr2.slice();
    
    // Replace "bike" in copyArr1 with "bus" and "scooter"
    let bikeIndex = copyArr1.indexOf("bike");
    if (bikeIndex !== -1) {
        copyArr1.splice(bikeIndex, 1, "bus", "scooter");
    }

    // Concatenate the modified copyArr1 with copyArr2
    let mergedArray = copyArr1.concat(copyArr2);

    // Return the merged array
    return mergedArray;
}

// Test the function with the given arrays
let arr1 = ["car", "bike", "train"];
let arr2 = ["plane", "ship"];

let result = modifyAndMerge(arr1, arr2);

console.log("Modified and Merged Array:", result); 
// Output: ["car", "bus", "scooter", "train", "plane", "ship"]

console.log("Original Array 1:", arr1); 
// Output: ["car", "bike", "train"]

console.log("Original Array 2:", arr2); 
// Output: ["plane", "ship"]
