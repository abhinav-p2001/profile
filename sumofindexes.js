let N = 3; // Number of rows
let M = 2; // Number of columns
let arr = [
  [1, 2],
  [3, 4],
  [5, 6]
];

// Loop through the rows
for (let i = 0; i < N; i++) {
  let rowSum = ''; // To hold the sum for the current row
  // Loop through the columns for each row
  for (let j = 0; j < M; j++) {
    // Calculate the sum of indexes (i + j)
    let sum = i + j;
    // Add the sum to the rowSum string
    rowSum += sum + ' ';
  }
  // Print the row of sums
  console.log(rowSum.trim());
}

