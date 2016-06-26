import React from 'react';

import Details from './details';
import Footer from '../footer';
import Hero from './hero';
import NavContainer from '../../containers/nav';
import OurStory from './our-story';
import Schedule from './schedule';
import TravelInfo from './travel-info';
import YourInfo from './your-info';

export default function Home() {
  return (
    <div>
      <Hero/>
      <NavContainer/>
      <YourInfo/>
      <OurStory/>
      <Schedule/>
      <TravelInfo/>
      <Details/>
      <Footer/>
    </div>
  );
};
