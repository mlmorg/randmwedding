import document from 'global/document';
import initBrowser from '../../lib/frmwrk/browser';
import {render} from 'react-dom';

initBrowser((initialState) => render(
  <h1>Hello World</h1>,
  document.getElementById('app-content')
));
