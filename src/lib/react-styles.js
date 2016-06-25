import Helmet from 'react-helmet';
import inlineStyle from 'inline-style';
import React from 'react';

export default function Styles({rules}) {
  const css = Object.keys(rules).reduce((styles, selector) => {
    return styles += selector === 'fonts' ?
      rules[selector].reduce(reduceFonts, '') :
      buildStyle(selector, rules[selector]);
  }, '');

  return <Helmet style={[{cssText: css}]}/>
}

function reduceFonts(styles, declaration) {
  return styles += buildStyle('@font-face', declaration);
}

function buildStyle(selector, declaration) {
  declaration = inlineStyle(declaration);
  selector = selector.replace(/\s/g, '');
  return `${selector}{${declaration}}`;
}
