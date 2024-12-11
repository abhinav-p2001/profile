const library = {
    books: [{ title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 }],
  
    // Improved addBook method to validate book information
    addBook(book) {
      // Check if book object has all required properties
      if (!book.title || !book.author || !book.year) {
        console.log("Book information is incomplete. Title, author, and year are required.");
        return;
      }
      // Ensure the book has a valid year
      if (isNaN(book.year) || book.year < 1000 || book.year > new Date().getFullYear()) {
        console.log("Invalid year provided.");
        return;
      }
      // Add the valid book to the collection
      this.books.push(book);
      console.log("Book added:", book.title);
    },
  
    // Find a book by title
    findBookByTitle(title) {
      return this.books.find(book => book.title === title);
    },
  
    // Remove a book by title
    removeBook(title) {
      const index = this.books.findIndex(book => book.title === title);
      if (index !== -1) {
        this.books.splice(index, 1);
        console.log(`Book "${title}" removed.`);
      } else {
        console.log("Book not found.");
      }
    }
  };
  
  // Testing the addBook method with missing information
  library.addBook({ author: "George Orwell", year: 1949 });  // Should log an error for missing title
  
  // Adding a valid book
  library.addBook({ title: "1984", author: "George Orwell", year: 1949 });  // Should be added successfully
  
  // Checking the total number of books
  console.log("Total number of books:", library.books.length);  // Should return 2
  