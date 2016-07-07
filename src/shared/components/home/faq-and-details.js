/* @jsx createElement */
import createElement from 'react-stylematic';

import {Padded, Layout, LayoutItem, TextAlign} from '../../../lib/react-layout';
import {H3, H4} from '../typography';
import assetUrl from '../../../lib/asset-url';

export default function Details() {
  return (
    <Padded style={styles.wrapper}>
      <div id="section-faq-and-details" style={styles.content}>
        <TextAlign center>
          <img src={assetUrl('orange.png')} style={styles.image}/>
          <H3>FAQ & Details</H3>
        </TextAlign>
        <Layout>
          <LayoutItem size="4">
            <LeftColumn/>
          </LayoutItem>
          <LayoutItem size="4">
            <CenterColumn/>
          </LayoutItem>
          <LayoutItem size="4">
            <RightColumn/>
          </LayoutItem>
        </Layout>
      </div>
    </Padded>
  );
}

function LeftColumn() {
  return (
    <TextAlign center>
      <H4>Attire</H4>
      <p>
        Semi-formal / dressy casual /cocktail attire. The wedding is on a ranch. Ties and heels are optional, but if you want to be fancy, go for it. Expect to be outside and walking around on gravel, stone, grass and wood.
      </p>

      <H4>Weather</H4>
      <p>
        The average high in Calistoga in May is 78, and low is around 46. In other words, warm in the afternoon, chilly in the evening. We'll be outside when it's warm and inside when it's chilly - but be prepared for a temperature change! <a target="_blank" href="https://weather.com/weather/today/l/USCA0156:1:US">View current weather</a>.
      </p>
    </TextAlign>
  );
}

function CenterColumn() {
  return (
    <TextAlign center>
      <H4>Music</H4>
      <p>
        We're excited to have <a target="_blank" href="http://www.dart-dj.com/">Dart DJ</a> spinning tunes for the wedding. We'll also have a silent disco. And yes, there will be glow sticks for all.
      </p>

      <H4>Food</H4>
      <p>
        Check back closer to the wedding for details. Fruits, vegetables, beer and wine will be prominent.
      </p>
    </TextAlign>
  );
}

function RightColumn() {
  return (
    <TextAlign center>
      <H4>Gifts</H4>
      <p>
        Your presence is your present. We'd prefer no gifts, but if you insist <a target="_blank" href="https://www.zola.com/registry/randmwedding">here are some options</a>, including donating to our favorite nonprofits.
      </p>

      <H4>Things To Do</H4>
      <ul style={styles.list}>
        <li>
          Visit the <a target="_blank" href="http://www.petrifiedforest.org/">petrified forest</a>, or <a target="_blank" href="http://www.parks.ca.gov/?page_id=477">go for a hike</a>
        </li>
        <li>
          Taste wine at an <a target="_blank" href="http://www.castellodiamorosa.com/">over-the-top game of thrones-ish castle</a>, after <a target="_blank" href="http://www.sterlingvineyards.com/">riding in a gondola</a>, or at <a target="_blank" href="http://www.schramsberg.com/">one of the oldest vineyards in the valley</a>
        </li>
        <li>
          Or <a target="_blank" href="http://www.napavalley.com/2015/06/23/the-15-best-wineries-in-calistoga/">find another winery</a> for all you wine snobs out there
        </li>
        <li>
          Swim in a <a target="_blank" href="https://www.indianspringscalistoga.com/">geyser-fed mineral pool</a> or <a target="_blank" href="http://www.drwilkinson.com/manandmud.html">take a mud bath</a>
        </li>
        <li>
          See <a target="_blank" href="http://www.oldfaithfulgeyser.com/">California's Old Faithful Geyser</a>
        </li>
        <li>
          Go to a <a target="_blank" href="http://www.bottlerocknapavalley.com/">music festival</a>
        </li>
      </ul>
    </TextAlign>
  );
}

const styles = {
  wrapper: {
    backgroundColor: '#f3f4ee'
  },
  content: {
    marginTop: '-150px'
  },
  image: {
    width: '253px',
    height: '150px'
  },
  list: {
    textAlign: 'left'
  }
};
