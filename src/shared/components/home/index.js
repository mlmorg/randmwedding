import React from 'react';

import Hero from './hero';
import YourInfo from './your-info';
import Nav from '../nav';

export default function Home() {
  return (
    <div>
      <Hero/>
      <Nav/>
      <YourInfo/>
    </div>
  );
};
