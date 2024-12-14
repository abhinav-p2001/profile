function processProducts(products) {
    // Step 1: Use map() to extract product names
    const productNames = products.map(product => product.name);

    // Step 2: Use forEach() to iterate over the products
    products.forEach(product => {
        if (product.price > 50) {
            console.log(`${product.name} is above $50`);
        } else {
            console.log(`${product.name} is below $50`);
        }
    });

    // Return the array of product names
    return productNames;
}

// Example usage
const products = [
    { name: "Laptop", price: 1000 },
    { name: "Mouse", price: 20 },
    { name: "Keyboard", price: 45 },
    { name: "Monitor", price: 150 }
];

const names = processProducts(products);
console.log("Product Names:", names);