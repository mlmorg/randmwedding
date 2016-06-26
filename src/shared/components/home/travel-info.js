/* @jsx createElement */
import createElement from 'react-stylematic';

import {Layout, LayoutItem, TextAlign, Padded} from '../../../lib/react-layout';

export default function TravelInfo() {
  return (
    <Padded style={styles.wrapper}>
      <div id="travel-info" style={styles.content}>
        <Layout center>
          <LayoutItem max="600px">
            <Content/>
          </LayoutItem>
        </Layout>
      </div>
    </Padded>
  );
}

function Content() {
  return (
    <TextAlign center>
      <img src="/assets/static/tomato.png" style={styles.image}/>
      <h3>Travel Info</h3>

      <div style={styles.section}>
        <h4>Accommodations</h4>
        <p>
          More details about hotel and lodging options coming soon!
        </p>
      </div>

      <div style={styles.section}>
        <h4>Directions</h4>
        <p>
          Shuttles will be provided to and from Calistoga
        </p>
        <p>
          Cell phone reception is not good near the ranch, so please plan in
          advance if you are driving!
        </p>
        <p>
          Address: 4600 Mountain Home Ranch Rd, Calistoga, CA 94515
          (free parking onsite - but it is a bumpy road!!)
        </p>
        <p>
          Memorial Day Weekend is a <i>very</i> popular time for travel, so please
          book your flights and car rentals now!
        </p>
        <p>
          You have 3 airport options: 1 hour 45 Minutes drive each from San
          Francisco International Airport (SFO), Oakland Airport (OAK) and
          Sacramento Airport (SMF)
        </p>
      </div>
    </TextAlign>
  );
}

const styles = {
  wrapper: {
    backgroundColor: '#C74F41',
    color: '#fff'
  },
  content: {
    marginTop: '-150px'
  },
  section: {
    paddingTop: '30px'
  },
  image: {
    height: '150px'
  }
};
