// Initial array of 10 student scores
let scores = [35, 55, 92, 45, 88, 28, 67, 72, 99, 80];

// Adjust scores based on the conditions
for (let i = 0; i < scores.length; i++) {
  // Increase score by 20 for students with a score below 40
  if (scores[i] < 40) {
    scores[i] += 20;
  }
  // Adjust score to a maximum of 90 for students with scores over 90
  if (scores[i] > 90) {
    scores[i] = 90;
  }
}

// Count how many students passed (score of 50 or more)
let passedCount = scores.filter(score => score >= 50).length;

// Log the number of students who passed
console.log(`Number of students who passed: ${passedCount}`);

// Log the final adjusted array of scores
console.log("Final adjusted scores:", scores);
