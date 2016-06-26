import React from 'react';
import Styles from '../../lib/react-styles';

const shared = {
  yonder: {
    fontFamily: '"Yonder", sans-serif',
    fontWeight: 'normal',
  },
  grotesque: {
    fontFamily: '"Brandon Grotesque"',
    fontWeight: 'normal'
  }
};

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
        ...shared.grotesque,
        margin: '0px',
        WebkitFontSmoothing: 'antialiased',
        color: '#555',
        fontSize: '18px',
        lineHeight: '1.7'
      },

      h1: {
        ...shared.yonder,
        fontSize: '75px',
        lineHeight: '0.8',
        margin: '0px'
      },
      h2: {
        ...shared.yonder,
        fontSize: '45px',
        lineHeight: '0.8',
        textTransform: 'lowercase',
        margin: '0px 0px 16px 0px'
      },
      h3: {
        ...shared.yonder,
        fontSize: '80px',
        lineHeight: '0.8',
        textTransform: 'lowercase',
        margin: '0px 0px 30px 0px'
      },
      h4: {
        ...shared.grotesque,
        fontSize: '14px',
        fontWeight: 'bold',
        lineHeight: '1',
        textTransform: 'uppercase',
        letterSpacing: '3px',
        margin: '15px 0px 20px 0'
      },
      h5: {
        ...shared.grotesque,
        fontSize: '14px',
        textTransform: 'uppercase',
        letterSpacing: '2px',
        margin: '0px 0px 14px 0px'
      },
      h6: {
        ...shared.grotesque,
        fontSize: '13px',
        fontWeight: 'bold',
        margin: '0px 0px 5px 0px'
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
