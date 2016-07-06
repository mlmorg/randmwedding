import React from 'react';

import Details from './faq-and-details';
import Footer from '../footer';
import Hero from './hero';
import NavContainer from '../../containers/nav';
import OurStory from './our-story';
import Schedule from './schedule';
import TravelInfo from './travel-info';
import YourInfo from '../../containers/your-info';

export default function Home() {
  return (
    <div>
      <NavContainer/>
      <Hero/>
      <YourInfo/>
      <OurStory/>
      <Schedule/>
      <TravelInfo/>
      <Details/>
      <Footer/>
    </div>
  );
};
