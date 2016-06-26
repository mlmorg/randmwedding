import React from 'react';

import DetailsContainer from '../../containers/home/details';
import Footer from '../footer';
import HeroContainer from '../../containers/home/hero';
import NavContainer from '../../containers/nav';
import OurStoryContainer from '../../containers/home/our-story';
import ScheduleContainer from '../../containers/home/schedule';
import TravelInfoContainer from '../../containers/home/travel-info';
import YourInfoContainer from '../../containers/home/your-info';

export default function Home() {
  return (
    <div>
      <HeroContainer/>
      <NavContainer/>
      <YourInfoContainer/>
      <OurStoryContainer/>
      <ScheduleContainer/>
      <TravelInfoContainer/>
      <DetailsContainer/>
      <Footer/>
    </div>
  );
};
