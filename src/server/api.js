import Sheets from './sheets';

export default class API {
  constructor() {
    this.sheets = new Sheets();
  }

  init(cb) {
    cb(null);
  }

  saveAddress(req, body, cb) {
    if (!body.name || !body.street || !body.city) {
      let err = new Error('All fields must be filled')
      err.statusCode = 400;
      return cb(err);
    }

    const data = [
      body.name,
      body.street,
      body.city
    ];
    this.sheets.addRow(data, (err) => {
      if (err) {
        return cb(err);
      }
      cb(null, {success: 'Address saved!'});
    });
  }
}
