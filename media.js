import convertAmountToString from './library.js';

class Media {

	constructor (title, authors, type) {
		this._title = title;
		// author or director or editor
		this._authors = authors;
		this._type = type;
		// size is a general term for the dimension of the media
		// in the case of hours,
		// in the case of characters (articles), the size should be a multiple of 100 (rounded down)
		let _isCheckedOut = false;
		let _ratings = [];
	}

	get title () {
		return this._title;
	}

	get authors () {
		// for additional info, check Article.keywords
		let temporaryArray = this._authors.slice();
		return this.temporaryArray;
	}

	get type () {
		return this._type;
	}

	get status () {
		return this._isCheckedOut;
	}

	get ratings () {
		return this._ratings;
	}

}


class Book extends Media {

	constructor (title, authors, pages, category) {
		super(title, authors, 'Book');
		this._pages = pages;
		this._category = category;
	}

	get pages () {
		return `${this._pages} pages`;
	}

}

// If there are multiple copies of the same title, each copy will be stored as a separate object
class BookCopy {

	constructor (bookObjectReference) {
		this._reference = bookObjectReference;
	}

}

class Movie extends Media {

	constructor (title, director, length) {
		// a movie should have only one director
		super(title, director, 'Movie');
		// the length should be introduced as a decimal number of hours
		this._length = length;
	}

	get length () {
		// if it is a short film, the length should be less than 1 hour
		// in this case the length should be displayed like this 28m 30s
		if (this._length < 1) {
			return convertAmountToString(this._length, 'm', 's');
		} else {
			// if it is a feature film, the length should be more than 1h 20m
			return convertAmountToString(this._length, 'h', 'm');
		}
	}

}

class Article extends Media {

	constructor (title, authors, size, publisher, keywords) {
		super(title, authors, 'Article');
		this._size = size;
		// the publisher can be outside of the university
		// if the publisher is the university, then this field will reference the department or faculty
		this._publisher = publisher;
		this._keywords = keywords;
	}

	get size () {
		// the size of articles should be specified in 'characters'
		// preferably, the size should be displayed as a multiple of 100 (ie. 3600, 5500...)
		return `${this._size - (this._size % 100)} characters`;
	}

	get publisher () {
		return this._publisher;
	}

	get keywords() {
		// this getter has the objective of just listing the keywords
		// just returning the _keywords array would return the reference to it
		// to prevent returning the reference, a deep copy (the array is supposed to contain string literals) will be provided
		// TODO: check if garbage control works accordingly in this scenario
		let temporaryArray = this._keywords.slice();
		return temporaryArray;
	}

}

class Thesis extends Media {

	constructor (title, author, size, coordinator, department, keywords) {
		// each individual thesis should have only one author
		super(title, author, 'Thesis');
		this._size = size;
		this._coordinator = coordinator;
		this._department = department;
		this._keywords = keywords;
	}

	get pages () {
		return `${this._pages} pages`;
	}

	get coordinator () {
		return this._coordinator;
	}

	get department () {
		return this._department;
	}

	get keywords() {
		// for additional info, check Article.keywords
		let temporaryArray = this._keywords.slice();
		return temporaryArray;
	}

}

export {
	Media,
	Book,
	BookCopy,
	Movie,
	Article,
	Thesis
};