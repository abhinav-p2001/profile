let N = 3; // number of rows
let M = 2; // number of columns
let arr = [
  [1, 2],
  [3, 4],
  [5, 6]
];

// Outer loop for rows
for (let i = 0; i < N; i++) { // Loop through rows
  let row = ""; // Initialize an empty string to store the row's values

  // Inner loop for columns
  for (let j = 0; j < M; j++) { // Loop through columns of each row
    row += arr[i][j] + " "; // Append the element in the row to the string
  }
  
  console.log(row.trim()); // Print the row string, trimming extra space
}
