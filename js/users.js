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

  constructor (name, birthday, department) {
    super (name, birthday, 'STUDENT');
    this._department = department;
  }

  get department () {
    return this._department;
  }

}

class Professor extends User {

  constructor (name, birthday, department) {
    super (name, birthday, 'PROFESSOR');
    this._department = department;
  }

  get department () {
    return this._department;
  }

}

class Visitor extends User {

  constructor (name, dateOfVisit) {
    super (name, '', 'VISITOR');
    this._dateOfVisit = dateOfVisit;
  }

  get dateOfvisit () {
    return this._dateOfVisit;
  }

}

export {
  Librarian,
  Student,
  Professor,
  Visitor
};