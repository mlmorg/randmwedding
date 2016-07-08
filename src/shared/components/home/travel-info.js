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
          Address: <a target="_blank" href="https://www.google.com/maps/place/4600+Mountain+Home+Ranch+Rd,+Calistoga,+CA+94515/@38.5689432,-122.64238,17z/data=!3m1!4b1!4m5!3m4!1s0x80844170be1f1fe9:0x6507900aa20abd50!8m2!3d38.568939!4d-122.640186">4600 Mountain Home Ranch Rd, Calistoga, CA 94515</a> (free parking onsite - but it is a bumpy road!!)
        </p>
        <p>
          Memorial Day Weekend is a <i>very</i> popular time for travel, so please
          book your flights and car rentals now!
        </p>
        <p>
          You have 3 major airport options: 1 hour 45 Minutes drive each from <a target="_blank" href="https://www.google.com/maps/dir/SFO,+San+Francisco,+CA/4600+Mountain+Home+Ranch+Rd,+Calistoga,+CA+94515/@38.0972799,-123.0486721,9z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x808f778c55555555:0xa4f25c571acded3f!2m2!1d-122.3789554!2d37.6213129!1m5!1m1!1s0x80844170be1f1fe9:0x6507900aa20abd50!2m2!1d-122.640186!2d38.568939">San Francisco International Airport (SFO)</a>, <a target="_blank" href="https://www.google.com/maps/dir/Oakland+International+Airport,+1+Airport+Drive,+Oakland,+CA+94621/4600+Mountain+Home+Ranch+Rd,+Calistoga,+CA+94515/@38.1461643,-122.9648881,9z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x808f845402c0a641:0xb0630c0f03017460!2m2!1d-122.2197428!2d37.7125689!1m5!1m1!1s0x80844170be1f1fe9:0x6507900aa20abd50!2m2!1d-122.640186!2d38.568939">Oakland Airport (OAK)</a> and <a target="_blank" href="https://www.google.com/maps/dir/Sacramento+Metropolitan+Airport,+Airport+Boulevard,+Sacramento,+CA/4600+Mountain+Home+Ranch+Rd,+Calistoga,+CA+94515/@38.4505363,-122.6755153,9z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x809b2b73ce6a70ad:0xa460901228ef4232!2m2!1d-121.5900648!2d38.6950854!1m5!1m1!1s0x80844170be1f1fe9:0x6507900aa20abd50!2m2!1d-122.640186!2d38.568939">Sacramento Airport (SMF)</a>. There are also flights from <a href="http://sonomacountyairport.org/">Sonoma County Airport</a> - a 30 minute drive to Calistoga - from LA, San Diego, Portland, Seattle and Orange County.
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
