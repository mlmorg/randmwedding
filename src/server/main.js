import {install} from 'source-map-support';
import initServer from '../lib/frmwrk/server';
import App from '../shared/containers/app';

install();
initServer(App).start();
