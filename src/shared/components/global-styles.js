import React from 'react';
import Styles from '../../lib/react-styles';

export default function GlobalStyles() {
  return (
    <Styles rules={{
      fonts: [
        {
          fontFamily: '"Yonder"',
          fontStyle: 'normal',
          fontWeight: 'normal',
          src: 'url("/assets/static/yonder.woff2") format("woff2")',
          src: 'url("/assets/static/yonder.woff") format("woff")'
        },
        {
          fontFamily: '"Brandon Grotesque"',
          fontStyle: 'normal',
          fontWeight: 'normal',
          src: 'url("/assets/static/brandongrotesque-regular-webfont.woff2") format("woff2")',
          src: 'url("/assets/static/brandongrotesque-regular-webfont.woff") format("woff")'
        },
        {
          fontFamily: '"Brandon Grotesque"',
          fontStyle: 'normal',
          fontWeight: 'bold',
          src: 'url("/assets/static/brandongrotesque-black-webfont.woff2") format("woff2")',
          src: 'url("/assets/static/brandongrotesque-black-webfont.woff") format("woff")'
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
