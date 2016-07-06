import React from 'react';
import Styles from '../../lib/react-styles';
import assetUrl from '../../lib/asset-url';

export default function GlobalStyles() {
  return (
    <Styles rules={{
      fonts: [
        {
          fontFamily: '"Yonder"',
          fontStyle: 'normal',
          fontWeight: 'normal',
          src: `url("${assetUrl('yonder.woff2')}") format("woff2")`,
          src: `url("${assetUrl('yonder.woff')}") format("woff")`
        },
        {
          fontFamily: '"Brandon Grotesque"',
          fontStyle: 'normal',
          fontWeight: 'normal',
          src: `url("${assetUrl('brandongrotesque-regular-webfont.woff2')}") format("woff2")`,
          src: `url("${assetUrl('brandongrotesque-regular-webfont.woff')}") format("woff")`
        },
        {
          fontFamily: '"Brandon Grotesque"',
          fontStyle: 'normal',
          fontWeight: 'bold',
          src: `url("${assetUrl('brandongrotesque-black-webfont.woff2')}") format("woff2")`,
          src: `url("${assetUrl('brandongrotesque-black-webfont.woff')}") format("woff")`
        }
      ],

      '*': {
        boxSizing: 'border-box'
      },
      body: {
        fontFamily: 'Brandon Grotesque',
        fontWeight: 'normal',
        margin: '0px',
        WebkitFontSmoothing: 'antialiased',
        color: '#555',
        fontSize: '18px',
        lineHeight: '1.7'
      },
      p: {
        marginTop: '0px',
        marginBottom: '30px'
      },
      a: {
        color: 'inherit'
      },

      '::-webkit-input-placeholder': {
        color: '#777'
      },
      '::-moz-placeholder': {
        color: '#777'
      },
      ':-ms-input-placeholder': {
        color: '#777'
      }
    }}/>
  );
}
