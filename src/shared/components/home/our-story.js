/* @jsx createElement */
import createElement from 'react-stylematic';

import {Layout, LayoutItem, TextAlign} from '../../../lib/react-layout';

export default function OurStory() {
  return (
    <div style={styles.wrapper}>
      <Layout center>
        <LayoutItem size="7">
          <img src="/assets/static/rachel-matt.jpg" style={styles.image}/>
        </LayoutItem>
      </Layout>
      <Layout center>
        <LayoutItem size="8">
          <TextAlign center>
            <h3>Our Story</h3>
          </TextAlign>
          <p>
            We met in January 2008 while studying abroad in Prague, in a bar called
            "Double Trouble." Though we didn't know it at the time, in hindsight
            it was definitely love at first sight. After that, our friendship and
            romance blossomed across continents and cities from Prague to New York
            to Seattle to Baltimore to Austin to Los Angeles, finally landing together
            in San Francisco. In February 2015, we woke up one morning and decided
            to get married. Our dog, Tanner, also approved of this arrangement.
            And now, we're inviting you all to join us on the journey!
          </p>
        </LayoutItem>
      </Layout>
    </div>
  );
}

const styles = {
  wrapper: {
    backgroundColor: '#96c9a5',
    color: '#fff',
    marginTop: '130px',
    paddingBottom: '30px'
  },
  image: {
    width: '100%',
    marginTop: '-100px',
    marginBottom: '30px'
  }
};
