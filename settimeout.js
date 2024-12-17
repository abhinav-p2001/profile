const readline = require('readline');

// Create an interface for reading input from the user
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Prompt the user for countdown time
rl.question("Enter the number of seconds to countdown: ", (input) => {
  let countdownTime = parseInt(input);

  // Ensure the input is a valid number
  if (isNaN(countdownTime) || countdownTime <= 0) {
    console.log("Please enter a valid number greater than 0.");
    rl.close();
    return;
  }

  // Function to stop the countdown
  let stopCountdown = false;

  // Set interval to update the countdown every second
  const countdownInterval = setInterval(() => {
    if (stopCountdown) {
      clearInterval(countdownInterval);
      console.log("Countdown stopped!");
      rl.close();
      return;
    }

    if (countdownTime > 0) {
      console.log(`Remaining time: ${countdownTime} seconds`);
      countdownTime--;  // Decrease time by 1 second each interval
    } else {
      clearInterval(countdownInterval);
      console.log("Countdown Complete!");
      rl.close();
    }
  }, 1000);

  // Function to check for user input (e.g., pressing the "s" key to stop)
  const checkKeyPress = () => {
    process.stdin.on('data', (input) => {
      if (input.toString().trim() === 's') {
        stopCountdown = true;
      }
    });
  };

  // Use setTimeout to delay checking for user input after 500ms
  setTimeout(checkKeyPress, 500); // Check for key press after a small delay
});

