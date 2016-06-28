import React from 'react';
import window from 'global/window';

import Details from './faq-and-details';
import Footer from '../footer';
import Hero from './hero';
import NavContainer from '../../containers/nav';
import OurStory from './our-story';
import Schedule from './schedule';
import TravelInfo from './travel-info';
import YourInfo from './your-info';

export default function Home({paddingTop}) {
  let styles = {};
  if (window && window.innerWidth < 750) {
    styles = {paddingTop};
  }
  return (
    <div style={styles}>
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
