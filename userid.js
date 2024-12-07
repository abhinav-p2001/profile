const formatUserInfo = (user) => {
    // Destructure properties with optional chaining
    const {
      id,
      profile: {
        name = "Information not available",
        address: {
          city = "Information not available",
          zipcode = "Information not available",
        } = {}, // Default empty object for address
      } = {}, // Default empty object for profile
    } = user;
  
    // Return formatted string
    return `User ${name} (ID: ${id}) lives in ${city} (ZIP: ${zipcode})`;
  };
  
  // Example usage:
  
  // Example 1: Full data
  const user1 = {
    id: 123,
    profile: {
      name: "John Doe",
      address: { city: "Los Angeles", zipcode: "90001" },
    },
  };
  console.log(formatUserInfo(user1));
  // Output: "User John Doe (ID: 123) lives in Los Angeles (ZIP: 90001)"
  
  // Example 2: Missing address
  const user2 = { id: 123, profile: { name: "John Doe" } };
  console.log(formatUserInfo(user2));
  // Output: "User John Doe (ID: 123) lives in Information not available (ZIP: Information not available)"
  
  // Example 3: Missing profile
  const user3 = { id: 123 };
  console.log(formatUserInfo(user3));
  // Output: "User Information not available (ID: 123) lives in Information not available (ZIP: Information not available)"
  