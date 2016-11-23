import Sheets from './sheets';

export default class API {
  constructor() {
    this.sheets = new Sheets();
  }

  init(cb) {
    cb(null);
  }

  saveForm(req, body, cb) {
    if (
      !body.numAdults ||
      !body.name ||
      !body.friday ||
      !body.saturday ||
      !body.sunday
    ) {
      let err = new Error('You must enter in the # of adults, your names, and what parts of the wedding you will attend');
      err.statusCode = 400;
      return cb(err);
    }

    const data = [
      body.numAdults,
      body.numChildren,
      body.name,
      body.friday,
      body.saturday,
      body.sunday,
      body.diet,
      body.wordsRachel,
      body.wordsMatt,
      body.wordsAdvice
    ];
    this.sheets.addRow(data, (err) => {
      if (err) {
        return cb(err);
      }
      cb(null, {success: 'Information saved!'});
    });
  }
}
