// Function to manage inventory and calculate reorder costs
function manageInventory(products) {
    // Step 1: Filter products with stock less than 100
    const lowStockProducts = products.filter(product => product.stock < 100);

    // Step 2: Map low-stock products to include name, category, and total reorder cost
    const reorderDetails = lowStockProducts.map(product => {
        const reorderCost = product.pricePerUnit * (100 - product.stock);
        return { name: product.name, category: product.category, reorderCost };
    });

    // Step 3: Group products by category and calculate total reorder cost per category
    const categoryReorderCosts = reorderDetails.reduce((acc, product) => {
        if (!acc[product.category]) {
            acc[product.category] = 0;
        }
        acc[product.category] += product.reorderCost;
        return acc;
    }, {});

    // Step 4: Sort categories by total reorder cost in descending order
    const sortedCategories = Object.entries(categoryReorderCosts)
        .sort((a, b) => b[1] - a[1])
        .reduce((acc, [category, totalCost]) => {
            acc[category] = totalCost;
            return acc;
        }, {});

    return sortedCategories;
}

// Example usage
const products = [
    { name: "Laptop", category: "Electronics", stock: 50, pricePerUnit: 1000 },
    { name: "Phone", category: "Electronics", stock: 150, pricePerUnit: 500 },
    { name: "T-shirt", category: "Clothing", stock: 40, pricePerUnit: 20 },
    { name: "Jeans", category: "Clothing", stock: 90, pricePerUnit: 40 },
    { name: "Watch", category: "Accessories", stock: 70, pricePerUnit: 150 }
];

const result = manageInventory(products);
console.log("Reorder Costs by Category:", result);
