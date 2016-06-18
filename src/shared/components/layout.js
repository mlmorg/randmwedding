import React from 'react';
import Helmet from 'react-helmet';

const Layout = ({children}) => (
  <div>
    <Helmet
      title="RandM Wedding"
    />
    {children}
    <script src="/assets/main.js"/>
  </div>
);

export default Layout;
