// Book Factory Function
function Book(title, author) {
    return {
      title: title,
      author: author,
      details: function() {
        console.log(`Title: ${this.title}, Author: ${this.author}`);
      }
    };
  }
  
  // Library Factory Function
  function createLibrary() {
    const books = [];  // Internal array to store books
  
    return {
      // Add a book to the library
      addBook: function(book) {
        books.push(book);
      },
  
      // Remove a book by title
      removeBook: function(title) {
        const index = books.findIndex(book => book.title === title);
        if (index !== -1) {
          books.splice(index, 1);
          console.log(`Book titled "${title}" has been removed.`);
        } else {
          console.log(`Book titled "${title}" not found.`);
        }
      },
  
      // List all books in the library
      listBooks: function() {
        if (books.length === 0) {
          console.log("No books in the library.");
        } else {
          books.forEach(book => book.details());
        }
      }
    };
  }
  
  // Test the implementation
  const library = createLibrary();
  
  const book1 = Book("To Kill a Mockingbird", "Harper Lee");
  const book2 = Book("1984", "George Orwell");
  
  library.addBook(book1);
  library.addBook(book2);
  
  console.log("All Books in Library:");
  library.listBooks();
  // Output:
  // Title: To Kill a Mockingbird, Author: Harper Lee
  // Title: 1984, Author: George Orwell
  
  library.removeBook("1984");
  console.log("\nBooks after removal:");
  library.listBooks();
  // Output:
  // Title: To Kill a Mockingbird, Author: Harper Lee
  