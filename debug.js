const userProfile = {
    name: "Alice",
    age: 28,
  
    // Corrected details method using proper template literals
    details: function() {
      return `${this.name} is ${this.age} years old.`;  // Correct string interpolation
    },
  
    // Corrected updateAge method to properly call details() and update age
    updateAge(newAge) {
      if (newAge <= 0) {
        console.log("Invalid age.");
        return;
      }
  
      this.age = newAge;  // Update the age
      console.log(this.details());  // Corrected to call the details method
    }
  };
  
  // Test the functionality
  userProfile.updateAge(30);  // Expected to update the age and log "Alice is 30 years old."
  console.log(userProfile.details());  // Expected output: "Alice is 30 years old."
  