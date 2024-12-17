// Start logging "Loading..." every 1 second
const loadingInterval = setInterval(() => {
    console.log("Loading...");
  }, 1000);
  
  // Stop the loading messages after 5 seconds and log "Loaded successfully!"
  setTimeout(() => {
    clearInterval(loadingInterval);
    console.log("Loaded successfully!");
  }, 5000);
  