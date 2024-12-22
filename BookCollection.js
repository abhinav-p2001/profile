import BookConstructor from './BookConstructor.js';

// Create an array of BookConstructor instances
const bookCollection = [
    new BookConstructor('To Kill a Mockingbird', 'Harper Lee', 1960),
    new BookConstructor('1984', 'George Orwell', 1949),
    new BookConstructor('The Great Gatsby', 'F. Scott Fitzgerald', 1925),
    new BookConstructor('Pride and Prejudice', 'Jane Austen', 1813)
];

// Export the bookCollection array
export { bookCollection };
