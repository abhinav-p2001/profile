// Factory function to create a product
function createProduct(name, price, category) {
    return {
        name,
        price,
        category,
        applyDiscount(discountPercentage) {
            this.price -= this.price * (discountPercentage / 100);
        }
    };
}

// Factory function to manage categories
function createCategoryManager(categoryName) {
    return {
        categoryName,
        products: [],

        // Add a product to the category
        addProduct(product) {
            if (product.category === this.categoryName) {
                this.products.push(product);
            } else {
                console.error(`Product category mismatch. Expected: ${this.categoryName}, Found: ${product.category}`);
            }
        },

        // Remove a product by name
        removeProduct(productName) {
            this.products = this.products.filter(product => product.name !== productName);
        },

        // List all products in the category
        listProducts() {
            return this.products;
        },

        // Apply a discount to all products in the category
        applyCategoryDiscount(discountPercentage) {
            this.products.forEach(product => product.applyDiscount(discountPercentage));
        }
    };
}

// Example usage
const product1 = createProduct('Laptop', 1000, 'Electronics');
const product2 = createProduct('Headphones', 200, 'Electronics');
const product3 = createProduct('Shoes', 100, 'Apparel');

const electronicsManager = createCategoryManager('Electronics');
const apparelManager = createCategoryManager('Apparel');

// Adding products to respective managers
electronicsManager.addProduct(product1);
electronicsManager.addProduct(product2);
apparelManager.addProduct(product3);

// Listing products before discount
console.log('Electronics before discount:', electronicsManager.listProducts());
console.log('Apparel before discount:', apparelManager.listProducts());

// Applying category discounts
electronicsManager.applyCategoryDiscount(10);
apparelManager.applyCategoryDiscount(20);

// Listing products after discount
console.log('Electronics after discount:', electronicsManager.listProducts());
console.log('Apparel after discount:', apparelManager.listProducts());

// Removing a product
electronicsManager.removeProduct('Headphones');
console.log('Electronics after removing headphones:', electronicsManager.listProducts());
