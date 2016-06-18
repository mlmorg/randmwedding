import Helmet from 'react-helmet';
import inlineStyle from 'inline-style';
import normalizeStyles from 'radium-normalize';
import React from 'react';

const css = Object.keys(normalizeStyles).map((selector) => {
  let styles = inlineStyle(normalizeStyles[selector]);
  return `${selector.replace(/\s/g, '')}{${styles}}`;
}).join();

const NormalizeCss = () => (
  <Helmet style={[{cssText: css}]}/>
);

export default NormalizeCss;
