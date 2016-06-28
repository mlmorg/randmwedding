import React from 'react';

import Details from './faq-and-details';
import Footer from '../footer';
import Hero from './hero';
import NavContainer from '../../containers/nav';
import OurStory from './our-story';
import Schedule from './schedule';
import TravelInfo from './travel-info';
import YourInfo from './your-info';

export default function Home({isMobile}) {
  const firstComponent = isMobile ? <NavContainer/> : <Hero/>;
  const secondComponent = isMobile ? <Hero/> : <NavContainer/>;
  return (
    <div>
      {firstComponent}
      {secondComponent}
      <YourInfo/>
      <OurStory/>
      <Schedule/>
      <TravelInfo/>
      <Details/>
      <Footer/>
    </div>
  );
};
