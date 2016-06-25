import normalizeStyles from 'radium-normalize';
import React from 'react';
import Styles from './react-styles';

export default function NormalizeCss() {
  return (
    <Styles rules={normalizeStyles}/>
  );
}
