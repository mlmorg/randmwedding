import Helmet from 'react-helmet';
import React from 'react';

import NormalizeCss from '../../lib/react-normalize-css';

const Layout = ({children}) => (
  <div>
    <Helmet
      title="RandM Wedding"
    />
    <NormalizeCss/>
    {children}
    <script src="/assets/main.js"/>
  </div>
);

export default Layout;
