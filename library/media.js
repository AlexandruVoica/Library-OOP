import convertAmountToString from './library.js';

class Media {

  constructor (title, author, type) {
    this._title = title;
    // author or director or editor
    this._author = author;

    // size is a general term for the dimension of the media
    // in the case of hours,
    // in the case of characters (articles), the size should be a multiple of 100 (rounded down)
    _isCheckedOut = false;
    _ratings = [];
  }

  get title () {
    return this._title;
  }

  get author () {
    return this._author;
  }

  get type () {
    return this._type;
  }

  // get size() {
  //   switch (this._unitsOfSize) {
  //     case 'hours': return convertHoursToString(this._size); break;
  //     case 'minutes': return `${this._size} minutes`; break;
  //     case 'characters': return `${this._size - (this._size % 100)} characters`; break;
  //     case 'pages': return `${this._size} pages`; break;
  //   }
  // }

  get status () {
    return this._isCheckedOut;
  }

  get ratings () {
    return ratings;
  }

}


class Book extends Media {

  constructor (title, author, pages, category) {
    super(title, author, 'Book');
    this._pages = pages;
    this._category = category;
  }

  get pages () {
    return `${this._pages} pages`
  }

}


class Movie extends Media {

  constructor (title, director, length) {
    super(title,director, 'Movie');
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

  constructor () {

  }

}