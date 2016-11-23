import Gsheets from 'googleapis/apis/sheets/v4';
import GoogleAuth from 'google-auth-library';

const CREDS = {
  client_email: process.env.GOOGLE_CLIENT_EMAIL,
  private_key: process.env.GOOGLE_PRIVATE_KEY
};
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];
const SPREADSHEET = '1LGd9S0eOtyVRYJnJnViTq60vZMiOesLmkiXyRTyQAek';

export default class Sheets {
  constructor() {
    this.expiry = 0;
    this.auth = new GoogleAuth();
    this.jwt = new this.auth.JWT(CREDS.client_email, null, CREDS.private_key, SCOPES, null);
    this.sheets = new Gsheets();
    this.sheets.google = {_options: {}};
    this.options = {
      auth: this.jwt,
      spreadsheetId: SPREADSHEET,
      range: 'rsvp!A1:J'
    };
  }

  renew(cb) {
    if (this.expiry > +new Date()) {
      console.log('reused token');
      return cb(null);
    }

    this.jwt.authorize((err, token) => {
      if (err) {
        return cb(err);
      }

      this.expiry = token.expiry_date;
      console.log('expiry', this.expiry);
      cb(null);
    });
  }

  getValues(cb) {
    this.renew((err) => {
      if (err) {
        return cb(err);
      }

      this.sheets.spreadsheets.values.get(this.options, cb);
    });
  }

  addRow(data, cb) {
    this.getValues((err, res) => {
      if (err) {
        return cb(err);
      }

      const nextRow = res.values.length + 1;
      const options = {
        ...this.options,
        range: `rsvp!A${nextRow}:J${nextRow}`,
        valueInputOption: 'RAW',
        resource: {
          range: `rsvp!A${nextRow}:J${nextRow}`,
          majorDimension: 'ROWS',
          values: [data]
        }
      };

      this.sheets.spreadsheets.values.update(options, cb);
    });
  }
}
