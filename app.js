import { bookCollection } from './BookCollection.js';

// Create an array of book summaries using map
const bookSummaries = bookCollection.map(book => book.getSummary());

// Log the array of book summaries to the console
console.log(bookSummaries);
