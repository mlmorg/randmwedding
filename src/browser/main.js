import document from 'global/document';
import initBrowser from '../../lib/frmwrk/browser';
import {render} from 'react-dom';

import Root from '../shared/components/root';

initBrowser((initialState) => render(
  <Root state={initialState}/>,
  document.getElementById('app-content')
));
