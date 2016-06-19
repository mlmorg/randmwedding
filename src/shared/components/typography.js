import React from 'react';

export function H1({children}) {
  return <h1 style={styles.h1}>{children}</h1>;
};

export function H2({children}) {
  return <h2 style={styles.h2}>{children}</h2>;
};

export function H5({children}) {
  return <h5 style={styles.h5}>{children}</h5>;
};

const shared = {
  default: {
    WebkitFontSmoothing: 'antialiased'
  },
  yonder: {
    fontFamily: 'Yonder, sans-serif',
    fontWeight: 'normal',
  },
  grotesque: {
    fontFamily: 'Brandon Grotesque',
    fontWeight: 'normal'
  }
};

const styles = {
  h1: {
    ...shared.default, ...shared.yonder,
    fontSize: '75px',
    lineHeight: '0.8',
    margin: '0px'
  },
  h2: {
    ...shared.default, ...shared.yonder,
    fontSize: '45px',
    lineHeight: '0.8',
    textTransform: 'lowercase',
    margin: '0px 0px 16px 0px'
  },
  h5: {
    ...shared.default, ...shared.grotesque,
    fontSize: '14px',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    margin: '0px 0px 14px 0px'
  }
};
