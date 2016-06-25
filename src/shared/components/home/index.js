import React from 'react';

import Hero from './hero';
import Nav from '../nav';
import OurStory from './our-story';
import YourInfo from './your-info';

export default function Home() {
  return (
    <div>
      <Hero/>
      <Nav/>
      <YourInfo/>
      <OurStory/>
    </div>
  );
};
