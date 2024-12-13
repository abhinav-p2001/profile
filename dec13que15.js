class DigitalLibrary {
    constructor() {
        this.books = [];
    }

    // Add a book to the library
    addBook(book) {
        this.books.push(book);
        console.log(`Book "${book}" added successfully.`);
        this.displayBooks();
    }

    // Remove a book by its name
    removeBook(book) {
        const index = this.books.indexOf(book);
        if (index !== -1) {
            this.books.splice(index, 1);
            console.log(`Book "${book}" removed successfully.`);
        } else {
            console.log(`Book "${book}" not found.`);
        }
        this.displayBooks();
    }

    // Search for a book by its name
    searchBook(book) {
        const found = this.books.includes(book);
        console.log(`Is the book "${book}" in the library?`, found);
    }

    // Find the first and last occurrence of a book
    findOccurrences(book) {
        const firstIndex = this.books.indexOf(book);
        const lastIndex = this.books.lastIndexOf(book);
        console.log(`First occurrence of "${book}":`, firstIndex);
        console.log(`Last occurrence of "${book}":`, lastIndex);
    }

    // Extract a subset of books
    extractSublist(start, end) {
        const sublist = this.books.slice(start, end);
        console.log("Extracted sublist of books:", sublist);
    }

    // Sort books alphabetically
    sortBooks() {
        this.books.sort((a, b) => a.localeCompare(b));
        console.log("Books sorted alphabetically:");
        this.displayBooks();
    }

    // Replace a book at a specified index
    replaceBook(index, newBook) {
        if (index >= 0 && index < this.books.length) {
            const replacedBook = this.books.splice(index, 1, newBook)[0];
            console.log(`Book "${replacedBook}" replaced with "${newBook}".`);
        } else {
            console.log("Invalid index.");
        }
        this.displayBooks();
    }

    // Display all books
    displayBooks() {
        console.log("Current list of books:", this.books);
    }

    // Join book titles into a string
    joinBooks() {
        const bookString = this.books.join(", ");
        console.log("All book titles as a single string:", bookString);
    }
}

// Example Usage
function main() {
    const library = new DigitalLibrary();

    library.addBook("Harry Potter");
    library.addBook("The Hobbit");
    library.addBook("1984");
    library.addBook("The Catcher in the Rye");
    library.addBook("Harry Potter");

    library.removeBook("1984");
    library.searchBook("The Hobbit");
    library.findOccurrences("Harry Potter");

    library.extractSublist(1, 3);
    library.sortBooks();

    library.replaceBook(2, "The Great Gatsby");
    library.joinBooks();
}

main();
