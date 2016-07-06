import google from 'googleapis';
import GoogleAuth from 'google-auth-library';

const creds = {
  client_email: process.env.GOOGLE_CLIENT_EMAIL,
  private_key: process.env.GOOGLE_PRIVATE_KEY
};
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];

export default class API {
  constructor() {
    this.auth = new GoogleAuth();
    this.jwt = new this.auth.JWT(creds.client_email, null, creds.private_key, SCOPES, null);
    this.sheets = google.sheets('v4');
  }

  init(cb) {
    this.jwt.authorize(cb);
  }

  saveAddress(req, body, cb) {
    if (!body.name || !body.street || !body.city) {
      let err = new Error('All fields must be filled')
      err.statusCode = 400;
      return cb(err);
    }

    this.sheets.spreadsheets.values.get({
      auth: this.jwt,
      spreadsheetId: '1LGd9S0eOtyVRYJnJnViTq60vZMiOesLmkiXyRTyQAek',
      range: 'addresses!A1:C'
    }, (getErr, getRes) => {
      if (getErr) {
        return cb(getErr);
      }

      const num = getRes.values.length + 1;
      this.sheets.spreadsheets.values.update({
        auth: this.jwt,
        spreadsheetId: '1LGd9S0eOtyVRYJnJnViTq60vZMiOesLmkiXyRTyQAek',
        range: `addresses!A${num}:C${num}`,
        valueInputOption: 'RAW',
        resource: {
          range: `addresses!A${num}:C${num}`,
          majorDimension: 'ROWS',
          values: [[
            body.name,
            body.street,
            body.city
          ]]
        }
      }, (updateErr, updateRes) => {
        if (updateErr) {
          return cb(updateErr);
        }
        cb(null, {success: 'Address saved!'});
      })
    });
  }
}
