import React from 'react';

import Details from './details';
import Footer from '../footer';
import Hero from './hero';
import NavContainer from '../../containers/nav';
import OurStory from './our-story';
import Schedule from './schedule';
import TravelInfo from './travel-info';
import YourInfoContainer from '../../containers/home/your-info';

export default function Home() {
  return (
    <div>
      <Hero/>
      <NavContainer/>
      <YourInfoContainer/>
      <OurStory/>
      <Schedule/>
      <TravelInfo/>
      <Details/>
      <Footer/>
    </div>
  );
};
