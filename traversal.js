function reverseUTraversal(matrix) {
    let N = matrix.length;  // Size of the square matrix
    let result = [];
  
    // 1. Traverse the leftmost column (from bottom to top)
    for (let i = N - 1; i >= 0; i--) {
      result.push(matrix[i][0]);
    }
  
    // 2. Traverse the bottom row (left to right)
    for (let i = 1; i < N; i++) {
      result.push(matrix[N - 1][i]);
    }
  
    // 3. Traverse the rightmost column (from bottom to top), skipping the bottom element
    for (let i = N - 2; i >= 0; i--) {
      result.push(matrix[i][N - 1]);
    }
  
    // Output the result array
    console.log(result.join(" "));
  }
  
  // Test the function with an example
  let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  reverseUTraversal(matrix);  // Expected Output: 7 4 1 2 3 6 9 8
  