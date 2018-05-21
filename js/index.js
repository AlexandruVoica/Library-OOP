// Short-term project:
// Create a class system that emulates a library that holds multiple types of media

import { Book, BookCopy, Movie, Article, Thesis } from './media.js';
// Book (title, authorsArray, pages, category)
// BookCopy (bookObjectReference)
// Movie (title, director, length)
// Article (title, authors, size, publisher, keywords)
// Thesis (title, author, size, coordinator, department, keywords)

import { Librarian, Student, Visitor } from './users.js';
// Librarian (name, birthday)
// Student (name, birthday, department)
// Professor (name, birthday, department)
// Visitor (name)

import Rating from './ratings.js';
// Rating (user, grade, comment)

import Checkout from './checkouts.js';
// Checkout (media, user)
  // a Checkout also has the following properties: loanDate, dueDate, returnDate
  // loanDate is set to the date the Checkout instance is created
  // dueDate is calculated as loanDate + 2 weeks
  // in order to signal that the media has been returned, call checkoutInstance.mediaHasBeenReturned() and the returnDate will be created

let mediaArray = [];
let usersArray = [];
let ratingsArray = [];
let checkoutsArray = [];


