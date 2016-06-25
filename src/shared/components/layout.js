import Helmet from 'react-helmet';
import React from 'react';

import NormalizeCss from '../../lib/react-normalize-css';
import GlobalStyles from './global-styles';

const Layout = ({children}) => (
  <div>
    <Helmet title="RandM Wedding"/>
    <NormalizeCss/>
    <GlobalStyles/>
    {children}
    <script src="/assets/app/main.js"/>
  </div>
);

export default Layout;
