function createBook(title, author) {
    return {
      title: title,
      author: author,
      printInfo: function() {
        console.log("Book: " + this.title + ", Author: " + this.author);
      }
    };
  }
  
  // Test the function
  const book = createBook("The Great Gatsby", "F. Scott Fitzgerald");
  book.printInfo();
  // Output: Book: The Great Gatsby, Author: F. Scott Fitzgerald
  