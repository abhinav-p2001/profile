// Simulate user registration
function registerUser(callback) {
    setTimeout(() => {
        const isSuccess = Math.random() > 0.2; // 80% chance of success
        if (isSuccess) {
            console.log("User registered successfully.");
            callback(null); // No error, proceed to the next step
        } else {
            callback("Error during user registration.");
        }
    }, 1000);
}

// Simulate sending verification email
function sendVerification(callback) {
    setTimeout(() => {
        const isSuccess = Math.random() > 0.3; // 70% chance of success
        if (isSuccess) {
            console.log("Verification email sent.");
            callback(null); // No error, proceed to the next step
        } else {
            callback("Error sending verification email.");
        }
    }, 1000);
}

// Simulate logging the user in
function loginUser(callback) {
    setTimeout(() => {
        const isSuccess = Math.random() > 0.4; // 60% chance of success
        if (isSuccess) {
            console.log("User logged in successfully.");
            callback(null); // No error, proceed to the next step
        } else {
            callback("Error during login.");
        }
    }, 1000);
}

// Simulate displaying a welcome message
function displayWelcomeMessage(callback) {
    setTimeout(() => {
        console.log("Welcome to our platform!");
        callback(null); // Successfully completed
    }, 1000);
}

// Execute the workflow using nested callbacks
registerUser((error) => {
    if (error) {
        console.log(error);
        return; // Stop workflow
    }

    sendVerification((error) => {
        if (error) {
            console.log(error);
            return; // Stop workflow
        }

        loginUser((error) => {
            if (error) {
                console.log(error);
                return; // Stop workflow
            }

            displayWelcomeMessage((error) => {
                if (error) {
                    console.log(error);
                    return; // Stop workflow
                }

                console.log("All steps completed successfully.");
            });
        });
    });
});
