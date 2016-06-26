import React from 'react';

export default function Logo({secondary, ...props}) {
  const type = secondary ? '-white' : '';
  return <img src={`/assets/static/logo${type}.svg`} {...props}/>
};
