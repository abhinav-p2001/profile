// Simulated fetch function with potential intermittent failure
function fetchDataWithCallback(callback) {
    setTimeout(() => {
        // Simulate intermittent failure
        const isSuccess = Math.random() > 0.5; // 50% chance of success
        if (isSuccess) {
            callback(null, "Fetched data successfully");
        } else {
            callback("Error fetching data", null);
        }
    }, 1000);
}

// Call fetchDataWithCallback and handle errors in the callback
fetchDataWithCallback((error, data) => {
    if (error) {
        console.log("Error fetching data"); // Log error message
    } else {
        console.log(data); // Log success message
    }
});
