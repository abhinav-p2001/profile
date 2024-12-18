// Function to simulate a timer
function timer(duration, onComplete) {
    setTimeout(() => {
        // Call the onComplete callback with the message
        onComplete(`Timer of ${duration} ms finished`);
    }, duration); // Wait for the specified duration
}

// Example usage
timer(3000, (message) => {
    console.log(message);
});
