class rating {

  constructor (user, grade, comment) {
    this._user = user;
    // grades are given as an integer value from 0 to 5
    this._grade = grade;
    this._comment = comment;
  }

  get user () {
    return this._user;
  }

  get grade () {
    return this._grade;
  }

  get comment () {
    return this._comment;
  }

}