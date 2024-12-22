// LibraryCollection Constructor Function
function LibraryCollection(title, author, isAvailable = true) {
    this.title = title;
    this.author = author;
    this.isAvailable = isAvailable;
}

// Export the LibraryCollection constructor
export default LibraryCollection;
