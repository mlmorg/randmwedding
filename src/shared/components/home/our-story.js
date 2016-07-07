/* @jsx createElement */
import createElement from 'react-stylematic';
import assetUrl from '../../../lib/asset-url';

import {Layout, LayoutItem, TextAlign, Padded} from '../../../lib/react-layout';
import {H3} from '../typography';

export default function OurStory() {
  return (
    <Padded style={styles.wrapper}>
      <div id="section-our-story" style={styles.content}>
        <Layout center>
          <LayoutItem max="600px">
            <img src={assetUrl('rachel-matt.jpg')} style={styles.image}/>
          </LayoutItem>
        </Layout>
        <Layout center>
          <LayoutItem max="750px">
            <TextAlign center>
              <H3>Our Story</H3>
              <p>
                We met in January 2008 while studying abroad in Prague, in a bar called
                "Double Trouble." Though we didn't know it at the time, in hindsight
                it was definitely love at first sight. After that, our friendship and
                romance blossomed across continents and cities from Prague to New York
                to Seattle to Baltimore to Austin to Los Angeles, finally landing together
                in San Francisco. In February 2016, we woke up one morning and decided
                to get married. Our dog, Tanner, also approved of this arrangement.
                And now, we're inviting you all to join us on the journey!
              </p>
            </TextAlign>
          </LayoutItem>
        </Layout>
      </div>
    </Padded>
  );
}

const styles = {
  wrapper: {
    backgroundColor: '#96c9a5',
    color: '#fff',
    marginTop: '75px'
  },
  content: {
    marginTop: -(75 + 75) + 'px'
  },
  image: {
    width: '100%',
    marginBottom: '15px'
  }
};
