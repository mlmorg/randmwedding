import React from 'react';
import Helmet from 'react-helmet';

import Nav from './nav';

const Layout = ({children}) => (
  <div>
    <Helmet
      title="RandM Wedding"
    />
    <Nav/>
    {children}
    <script src="/assets/main.js"/>
  </div>
);

export default Layout;
