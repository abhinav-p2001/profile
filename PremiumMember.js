import Member from './Member.js';

// PremiumMember Constructor Function
function PremiumMember(name) {
    Member.call(this, name); // Inherit properties from Member
    this.specialCollectionAccess = true; // Additional property
}

// Inherit methods from Member prototype
PremiumMember.prototype = Object.create(Member.prototype);
PremiumMember.prototype.constructor = PremiumMember;

// Overriding borrowBook method
PremiumMember.prototype.borrowBook = function(book) {
    if (this.borrowedBooks.length >= 5) {
        console.log(`${this.name} cannot borrow more than 5 books at a time.`);
        return;
    }
    // Reuse Member's borrowBook method
    Member.prototype.borrowBook.call(this, book);
};

// Export the PremiumMember constructor
export default PremiumMember;
