import {install} from 'source-map-support';
import initServer from '../lib/frmwrk/server';
import App from '../shared/containers/app';
import API from './api';

install();
initServer(App, API).start();
