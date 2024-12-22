import LibraryCollection from './LibraryCollection.js';
import Member from './Member.js';
import PremiumMember from './PremiumMember.js';

// Creating book objects
const book1 = new LibraryCollection('To Kill a Mockingbird', 'Harper Lee');
const book2 = new LibraryCollection('1984', 'George Orwell');
const book3 = new LibraryCollection('The Great Gatsby', 'F. Scott Fitzgerald');
const book4 = new LibraryCollection('Pride and Prejudice', 'Jane Austen');
const book5 = new LibraryCollection('Moby Dick', 'Herman Melville');

// Creating a regular member and a premium member
const regularMember = new Member('Alice');
const premiumMember = new PremiumMember('Bob');

// Demonstrating borrowing books
regularMember.borrowBook(book1); // Borrow successful
regularMember.borrowBook(book2);
regularMember.borrowBook(book3);
regularMember.borrowBook(book4); // Exceeds limit

console.log(`${regularMember.name}'s borrowed books:`, regularMember.borrowedBooks);

// Demonstrating borrowing with premium member
premiumMember.borrowBook(book1); // Already borrowed
premiumMember.borrowBook(book4);
premiumMember.borrowBook(book5);

console.log(`${premiumMember.name}'s borrowed books:`, premiumMember.borrowedBooks);

// Using bind to create a bound borrowBook function for premiumMember
const boundBorrowBook = premiumMember.borrowBook.bind(premiumMember, book3);
boundBorrowBook(); // Successful borrow

console.log(`${premiumMember.name}'s borrowed books after bound function:`, premiumMember.borrowedBooks);
