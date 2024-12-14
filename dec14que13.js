function countAndSortCategories(categories) {
    // Step 1: Use reduce() to count occurrences of each category
    const categoryCounts = categories.reduce((acc, category) => {
        acc[category] = (acc[category] || 0) + 1;
        return acc;
    }, {});

    // Step 2 (Extra Challenge): Sort categories by their counts in descending order
    const sortedCategories = Object.entries(categoryCounts)
        .sort((a, b) => b[1] - a[1]) // Sort by count, descending
        .map(entry => ({ category: entry[0], count: entry[1] }));

    return { counts: categoryCounts, sorted: sortedCategories };
}
const categories = ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"];

const result = countAndSortCategories(categories);
console.log("Category Counts:", result.counts);
console.log("Sorted Categories:", result.sorted);