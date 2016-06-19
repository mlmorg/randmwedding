import Helmet from 'react-helmet';
import React from 'react';

import NormalizeCss from '../../lib/react-normalize-css';

const Layout = ({children}) => (
  <div>
    <Helmet
      title="RandM Wedding"
      style={[
        {cssText: `
          body {
            margin:0;
          }
          @font-face {
            font-family: 'Yonder',
            font-style: 'normal',
            font-weight: 'normal',
            src: url(/assets/static/yonder.woff) format('woff');
          }
          @font-face {
            font-family: 'Brandon Grotesque';
            font-style: normal;
            font-weight: lighter;
            src: url(/assets/static/brandongrotesque-light-webfont.woff) format('woff');
          }
          @font-face {
            font-family: 'Brandon Grotesque';
            font-style: normal;
            font-weight: normal;
            src: url(/assets/static/brandongrotesque-regular-webfont.woff) format('woff');
          }
          @font-face {
            font-family: 'Brandon Grotesque';
            font-style: normal;
            font-weight: bold;
            src: url(/assets/static/brandongrotesque-black-webfont.woff) format('woff');
          }
        `}
      ]}
    />
    <NormalizeCss/>
    {children}
    <script src="/assets/app/main.js"/>
  </div>
);

export default Layout;
