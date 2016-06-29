/* @jsx createElement */
import createElement from 'react-stylematic';
import assetUrl from '../../../lib/asset-url';

import {Padded, Layout, LayoutItem, TextAlign} from '../../../lib/react-layout';
import {H3, H4, H6} from '../typography';

export default function Schedule() {
  return (
    <Padded style={styles.wrapper}>
      <div id="section-schedule" style={styles.content}>
        <TextAlign center>
          <img src={assetUrl('fig.png')} style={styles.image}/>
          <H3>Schedule</H3>
        </TextAlign>
        <Layout>
          <LayoutItem size="4">
            <Friday/>
          </LayoutItem>
          <LayoutItem size="4">
            <Saturday/>
          </LayoutItem>
          <LayoutItem size="4">
            <Sunday/>
          </LayoutItem>
        </Layout>
      </div>
    </Padded>
  );
}

function Friday() {
  return (
    <TextAlign center>
      <H4>Friday, May 26</H4>

      <H6>7:00pm</H6>
      <p>
        Welcome Party (all are welcome, pool will be open)
      </p>
    </TextAlign>
  );
}

function Saturday() {
  return (
    <TextAlign center>
      <H4>Saturday, May 27</H4>

      <H6>9:00am</H6>
      <p>Morning Yoga by the pool</p>

      <H6>4:30pm</H6>
      <p>Ceremony under the Walnut Tree</p>

      <H6>5:15pm</H6>
      <p>Cocktail Reception on the Patio</p>

      <H6>6:15pm</H6>
      <p>Dinner at the Redwood slab tables</p>

      <H6>7:15pm</H6>
      <p>Dancing in the Barn</p>

      <H6>10:00pm</H6>
      <p>Silent Disco!</p>

      <H6>12:00am</H6>
      <p>Good Night</p>
    </TextAlign>
  );
}

function Sunday() {
  return (
    <TextAlign center>
      <H4>Sunday, May 28</H4>

      <H6>10:00am</H6>
      <p>Brunch, Mimosas, Micheladas & Pool Party (all are welcome, pool will be open)</p>

      <H6>1:00pm</H6>
      <p>Love you, but you gotta go!</p>
    </TextAlign>
  );
}

const styles = {
  wrapper: {
    backgroundColor: '#fff'
  },
  content: {
    marginTop: '-150px'
  },
  image: {
    height: '150px'
  }
};
