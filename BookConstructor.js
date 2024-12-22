// Book Constructor Function
function BookConstructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

// Adding getSummary method to BookConstructor prototype
BookConstructor.prototype.getSummary = function() {
    return `${this.title} by ${this.author}, published in ${this.year}`;
};

// Export the BookConstructor function
export default BookConstructor;
