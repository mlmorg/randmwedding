/* @jsx createElement */
import createElement from 'react-stylematic';
import assetUrl from '../../../lib/asset-url';

import {Layout, LayoutItem, TextAlign, Padded} from '../../../lib/react-layout';
import {H3, H4} from '../typography';

export default function TravelInfo() {
  return (
    <Padded style={styles.wrapper}>
      <div id="section-travel-info" style={styles.content}>
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
      <img src={assetUrl('tomato.png')} style={styles.image}/>
      <H3>Travel Info</H3>

      <div style={styles.section}>
        <H4>Accommodations</H4>
        <p>
          More details about hotel and lodging options coming soon!
        </p>
      </div>

      <div style={styles.section}>
        <H4>Directions</H4>
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
    width: '175px',
    height: '150px'
  }
};
