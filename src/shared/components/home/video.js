import React from 'react';
import assetUrl from '../../../lib/asset-url';

export default function Video({isMobile}) {
  if (isMobile) {
    return (
      <img src={assetUrl('tree.jpg')} width="100%"/>
    );
  } else {
    return (
      <video poster={assetUrl('tree.jpg')} width="100%" preload="auto" loop autoPlay muted>
        <source src={assetUrl('tree.mp4')} type="video/mp4"></source>
      </video>
    );
  }
}
