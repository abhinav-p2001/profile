function manageStudents() {
    let students = ["Alice", "Bob", "Charlie"];

    // Add "David" at index 1
    students.splice(1, 0, "David");

    // Check if "Eve" is in the list
    console.log("Is 'Eve' in the list?", students.includes("Eve")); // Should return false

    // Convert the array to a string with names separated by commas
    console.log("Students list as a string:", students.join(",")); // Expected: "Alice,David,Bob,Charlie"
}

// Test cases
function testManageStudents() {
    console.log("\n--- Test Case 1 ---");
    manageStudents();

    console.log("\n--- Test Case 2: Adding a name at the start ---");
    let students = ["Alice", "Bob", "Charlie"];
    students.splice(0, 0, "Zara"); // Add "Zara" at the start
    console.log("After adding 'Zara' at the start:", students); // Expected: ["Zara", "Alice", "Bob", "Charlie"]

    console.log("\n--- Test Case 3: Checking for an existing name ---");
    console.log("Is 'Alice' in the list?", students.includes("Alice")); // Should return true
    console.log("Is 'Tom' in the list?", students.includes("Tom")); // Should return false

    console.log("\n--- Test Case 4: Joining array elements ---");
    console.log("Students list as a string:", students.join(", ")); // Expected: "Zara, Alice, Bob, Charlie"

    console.log("\n--- Test Case 5: Adding at a specific position ---");
    students.splice(2, 0, "Emma"); // Add "Emma" at index 2
    console.log("After adding 'Emma' at index 2:", students); // Expected: ["Zara", "Alice", "Emma", "Bob", "Charlie"]
}

// Run the main function and tests
testManageStudents();
