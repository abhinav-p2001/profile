// Function to display a greeting message
function displayMessage(name) {
    console.log(`Hello, ${name}!`);
}

// Function to simulate retrieving a username and calling a callback
function getUserInput(callback) {
    setTimeout(() => {
        const retrievedName = "Alice"; // Simulated username
        callback(retrievedName);      // Call the callback with the username
    }, 1000); // Simulates a 1-second delay
}

// Call getUserInput and pass displayMessage as the callback
getUserInput(displayMessage);
