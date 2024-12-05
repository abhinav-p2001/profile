let user = { name: "Alice", role: "admin", active: false }; // Change values to test

// Determine the access message using ternary operators
let message = (user.role === "admin") 
              ? (user.active ? "Admin Access Granted!" : "Admin Access Revoked") 
              : (user.role === "user") 
              ? (user.active ? "User Access Granted!" : "User Access Revoked") 
              : "Access Denied";

console.log(message);
