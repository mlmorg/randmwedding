/* @jsx createElement */
import createElement from 'react-stylematic';

import {Padded, Layout, LayoutItem, TextAlign} from '../../../lib/react-layout';

export default function Details() {
  return (
    <Padded style={styles.wrapper}>
      <div style={styles.content}>
        <TextAlign center>
          <img src="/assets/static/tomato.png" style={styles.image}/>
          <h3>FAQ & Details</h3>
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
      <h4>Attire</h4>
      <p>
        Semi-formal / dressy casual /cocktail attire. The wedding is on a ranch.
        Ties and heels are optional, but if you want to be fancy, go for it.
        Expect to be outside and walking around on gravel, stone, grass and wood.
      </p>

      <h4>Weather</h4>
      <p>
        The average high in Calistoga in May is 78, and low is around 46. In
        other words, warm in the afternoon, chilly in the evening. We'll be
        outside when it's warm and inside when it's chilly - but be prepared for
        a temperature change!
      </p>
    </TextAlign>
  );
}

function CenterColumn() {
  return (
    <TextAlign center>
      <h4>Music</h4>
      <p>
        We're excited to have Dart DJ spinning tunes for the wedding. We'll
        also have a silent disco. And yes, there will be glow sticks for all.
      </p>

      <h4>Food</h4>
      <p>
        Check back closer to the wedding for details. Fruits, vegetables, beer
        and wine will be prominent.
      </p>
    </TextAlign>
  );
}

function RightColumn() {
  return (
    <TextAlign center>
      <h4>Gifts</h4>
      <p>
        Your presence is your present. We'd prefer no gifts, but if you insist
        here are some options, including donating to our favorite nonprofits.
      </p>

      <h4>Things To Do</h4>
      <ul style={styles.list}>
        <li>
          Visit the petrified forest, or go for a hike
        </li>
        <li>
          Taste wine at an over-the- top game of thrones-ish castle,
          after riding in a gondola, or at one of the oldest vineyards in the valley
        </li>
        <li>
          More winery options for the wine snobs out there
        </li>
        <li>
          Swim in a geyser-fed mineral pool or take a mud bath
        </li>
        <li>
          See California's Old Faithful Geyser
        </li>
        <li>
          Go to a music festival
        </li>
      </ul>
    </TextAlign>
  );
}

const styles = {
  wrapper: {
    backgroundColor: '#fef7ee'
  },
  content: {
    marginTop: '-150px'
  },
  image: {
    height: '150px'
  },
  list: {
    listStylePosition: 'inside',
    padding: '0px'
  }
};