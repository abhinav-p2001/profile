let arr = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 1],
    [3, 2, 5, 4, 6],
    [7, 8, 9, 1, 2]
  ];
  
  let N = arr.length; // Number of rows
  let M = arr[0].length; // Number of columns
  
  let result = [];
  
  // Traverse diagonals starting from the top-right corner
  for (let start = 0; start < N + M - 1; start++) {
    let row = start < N ? start : N - 1;  // row will start either from 0 or N-1 based on the diagonal
    let col = start < M ? M - 1 - start : 0;  // col will start from M-1 or 0 based on the diagonal
  
    let diagonal = [];
    
    // Traverse the current diagonal
    while (row < N && col < M) {
      diagonal.push(arr[row][col]);
      row++;
      col++;
    }
  
    // Alternate the direction for zig-zag pattern
    if (start % 2 === 0) {
      result.push(...diagonal.reverse());  // Reverse for even diagonals
    } else {
      result.push(...diagonal);  // Keep the order for odd diagonals
    }
  }
  
  // Output the result
  console.log(result.join(" "));
  
  