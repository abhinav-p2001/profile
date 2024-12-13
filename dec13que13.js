// Custom method to filter even numbers
function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

// Custom method to calculate the sum of an array
function sumOfArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

// Custom method to sort two arrays and concatenate them
function sortAndConcat(arr1, arr2) {
    const sortedArr1 = arr1.slice().sort((a, b) => a - b); // Sort arr1 in ascending order
    const sortedArr2 = arr2.slice().sort((a, b) => a - b); // Sort arr2 in ascending order
    return sortedArr1.concat(sortedArr2); // Concatenate sorted arrays
}

// Main program
function main() {
    // Example input arrays
    const array1 = [7, 2, 9, 4, 6];
    const array2 = [10, 3, 8, 5, 1];

    // Filtering even numbers
    const evenNumbers1 = filterEvenNumbers(array1);
    const evenNumbers2 = filterEvenNumbers(array2);

    console.log("Filtered Even Numbers from Array 1:", evenNumbers1);
    console.log("Filtered Even Numbers from Array 2:", evenNumbers2);

    // Calculating sum of the arrays
    const sum1 = sumOfArray(array1);
    const sum2 = sumOfArray(array2);

    console.log("Sum of Array 1:", sum1);
    console.log("Sum of Array 2:", sum2);

    // Sorting and concatenating arrays
    const sortedAndConcatenatedArray = sortAndConcat(array1, array2);

    console.log("Sorted and Concatenated Array:", sortedAndConcatenatedArray);
}

// Run the program
main();
