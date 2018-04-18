class User {

  constructor (name, birthday, role) {
    this._name = name;
    this._birthday = birthday;
    this._role = role;
  }

  get name () {
    return this._name;
  }

  get birthday () {
    return this._birthday;
  }



}

class Librarian extends User {

  constructor (name, birthday) {
    super (name, birthday, 'ADMIN');
  }

}

class Student extends User {

  constructor (name, birthday) {
    super (name, birthday, 'STUDENT');
  }

}

class Visitor extends User {

  constructor (name) {
    super (name, '', 'VISITOR');
  }

}

export {
  Librarian,
  Student,
  Visitor
};