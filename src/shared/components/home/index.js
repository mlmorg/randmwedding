import React from 'react';

import Details from './faq-and-details';
import Footer from '../footer';
import Hero from './hero';
import NavContainer from '../../containers/nav';
import OurStory from './our-story';
import Schedule from './schedule';
import Accommodations from './accommodations';
import RSVP from '../../containers/rsvp';

export default function Home() {
  return (
    <div>
      <NavContainer/>
      <Hero/>
      <RSVP/>
      <OurStory/>
      <Schedule/>
      <Accommodations/>
      <Details/>
      <Footer/>
    </div>
  );
};
