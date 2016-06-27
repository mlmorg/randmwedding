import React from 'react';
import assetUrl from '../../lib/asset-url';

export default function Logo({secondary, ...props}) {
  const type = secondary ? '-white' : '';
  return <img src={assetUrl(`logo${type}.svg`)} {...props}/>
};
