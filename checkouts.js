class Checkout {

  constructor (media, user) {
    this._media = media;
    this._user = user;
    this._loanDate = new Date();
    this._returnDate = undefined;
  }

  get media () {
    return this._media;
  }

  get user () {
    return this._user;
  }

  get loanDate () {
    return this._loanDate;
  }

  get dueDate () {
    let dueDateCalculated = this._loanDate;
    dueDateCalculated.setDate(dueDateCalculated.getDate() + 14);
    return dueDateCalculated;
  }

  get returnDate () {
    return this._returnDate;
  }

  mediaHasBeenReturned () {
    this._returnDate = new Date();
  }
}