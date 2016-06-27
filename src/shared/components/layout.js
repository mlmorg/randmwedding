import Helmet from 'react-helmet';
import React from 'react';
import assetUrl from '../../lib/asset-url';

import NormalizeCss from '../../lib/react-normalize-css';
import GlobalStyles from './global-styles';

const Layout = ({children}) => (
  <div>
    <Helmet
      title="RandM Wedding"
      meta={[
        {name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'}
      ]}
      link={[
        {rel: 'icon', type: 'image/png', href: assetUrl('favicon.png')}
      ]}
    />
    <NormalizeCss/>
    <GlobalStyles/>
    {children}
    <script src={assetUrl('main.js')} async/>
  </div>
);

export default Layout;
