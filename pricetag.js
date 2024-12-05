let price = 750; // You can change this value to test with different prices

// Using chained ternary operators for classification
let classification = (price < 0) ? "Invalid Price" :
                      (price === 0) ? "Free" :
                      (price < 500) ? "Affordable" :
                      (price <= 999) ? "Moderate" :
                      "Expensive";

console.log(`The product is classified as: ${classification}`);
