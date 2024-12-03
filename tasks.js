// Create an array with five tasks
let tasks = ["Task 1", "Task 2", "Task 3", "Task 4", "Task 5"];

// Remove the first task from the list by shifting the tasks
tasks = tasks.slice(1);  // This creates a new array excluding the first task

// Add two new high-priority tasks to the beginning of the list
tasks = ["High-priority Task 1", "High-priority Task 2", ...tasks];

// Replace the last task in the list with a new task
tasks[tasks.length - 1] = "New Last Task";

// Log the updated task list to the console
console.log(tasks);
