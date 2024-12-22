// Member Constructor Function
function Member(name) {
    this.name = name;
    this.borrowedBooks = []; // Default to an empty array
}

// Method to borrow a book
Member.prototype.borrowBook = function(book) {
    if (this.borrowedBooks.length >= 3) {
        console.log(`${this.name} cannot borrow more than 3 books at a time.`);
        return;
    }
    if (book.isAvailable) {
        book.isAvailable = false;
        this.borrowedBooks.push(book.title);
        console.log(`${this.name} borrowed "${book.title}".`);
    } else {
        console.log(`"${book.title}" is already borrowed.`);
    }
};

// Export the Member constructor
export default Member;
