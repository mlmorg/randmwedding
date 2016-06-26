/* @jsx createElement */
import createElement from 'react-stylematic';

import {Padded, Layout, LayoutItem, TextAlign} from '../../../lib/react-layout';

export default function Schedule() {
  return (
    <Padded style={styles.wrapper}>
      <div style={styles.content}>
        <TextAlign center>
          <img src="/assets/static/orange.png" style={styles.image}/>
          <h3>Schedule</h3>
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
      <h4>Friday, May 26</h4>

      <h6>7:00pm</h6>
      <p>
        Welcome Party (all are welcome, pool will be open)
      </p>
    </TextAlign>
  );
}

function Saturday() {
  return (
    <TextAlign center>
      <h4>Saturday, May 27</h4>

      <h6>9:00am</h6>
      <p>Morning Yoga by the pool</p>

      <h6>4:30pm</h6>
      <p>Ceremony under the Walnut Tree</p>

      <h6>5:15pm</h6>
      <p>Cocktail Reception on the Patio</p>

      <h6>6:15pm</h6>
      <p>Dinner at the Redwood slab tables</p>

      <h6>7:15pm</h6>
      <p>Dancing in the Barn</p>

      <h6>10:00pm</h6>
      <p>Silent Disco!</p>

      <h6>12:00am</h6>
      <p>Good Night</p>
    </TextAlign>
  );
}

function Sunday() {
  return (
    <TextAlign center>
      <h4>Sunday, May 28</h4>

      <h6>10:00am</h6>
      <p>Brunch, Mimosas, Micheladas & Pool Party (all are welcome, pool will be open)</p>

      <h6>1:00pm</h6>
      <p>Love you, but you gotta go!</p>
    </TextAlign>
  );
}

const styles = {
  wrapper: {
    backgroundColor: '#fffef2'
  },
  content: {
    marginTop: '-150px'
  },
  image: {
    height: '150px'
  }
};
