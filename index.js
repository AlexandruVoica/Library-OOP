// Short-term project:
// Create a class system that emulates a library that holds multiple types of media

import { Book, BookCopy, Movie, Article, Thesis } from './media';

// Book (title, authorsArray, pages, category)
// BookCopy (bookObjectReference)
// Movie (title, director, length)
// Article (title, authors, size, publisher, keywords)
// Thesis (title, author, size, coordinator, department, keywords)

import { Librarian, Student, Visitor } from './users';

// Librarian (name, birthday)
// Student (name, birthday, department)
// Professor (name, birthday, department)
// Visitor (name)

let mediaArray = [];
let usersArray = [];


