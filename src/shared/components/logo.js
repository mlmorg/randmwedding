import React from 'react';

export default function Logo({secondary, width}) {
  const type = secondary ? '-white' : '';
  return <img src={`/assets/static/logo${type}.svg`} width={width}/>
};
