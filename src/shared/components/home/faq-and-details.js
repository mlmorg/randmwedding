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

      <H4>Gifts</H4>
      <p>
        Your presence is your present. We'd prefer no gifts, but if you insist <a target="_blank" href="https://www.zola.com/registry/randmwedding">here are some options</a>, including donating to our favorite nonprofits.
      </p>
    </TextAlign>
  );
}

function CenterColumn() {
  return (
    <TextAlign center>
      <H4>Travel</H4>
      <p>
        Shuttles will be provided to and from Calistoga
      </p>
      <p>
        If you plan to drive, <a target="_blank" href="https://www.google.com/maps/place/4600+Mountain+Home+Ranch+Rd,+Calistoga,+CA+94515/@38.5689432,-122.64238,17z/data=!3m1!4b1!4m5!3m4!1s0x80844170be1f1fe9:0x6507900aa20abd50!8m2!3d38.568939!4d-122.640186">here is a map to Triple S Ranch</a>. There is free parking on-site but please be aware that cell phone reception is poor (so plan in advance) and it is a dark, bumpy road at night.
      </p>
      <p>
        For flights, you have 3 major airport options: 1 hour 45 Minutes drive each from <a target="_blank" href="https://www.google.com/maps/dir/SFO,+San+Francisco,+CA/4600+Mountain+Home+Ranch+Rd,+Calistoga,+CA+94515/@38.0972799,-123.0486721,9z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x808f778c55555555:0xa4f25c571acded3f!2m2!1d-122.3789554!2d37.6213129!1m5!1m1!1s0x80844170be1f1fe9:0x6507900aa20abd50!2m2!1d-122.640186!2d38.568939">San Francisco International Airport (SFO)</a>, <a target="_blank" href="https://www.google.com/maps/dir/Oakland+International+Airport,+1+Airport+Drive,+Oakland,+CA+94621/4600+Mountain+Home+Ranch+Rd,+Calistoga,+CA+94515/@38.1461643,-122.9648881,9z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x808f845402c0a641:0xb0630c0f03017460!2m2!1d-122.2197428!2d37.7125689!1m5!1m1!1s0x80844170be1f1fe9:0x6507900aa20abd50!2m2!1d-122.640186!2d38.568939">Oakland Airport (OAK)</a> and <a target="_blank" href="https://www.google.com/maps/dir/Sacramento+Metropolitan+Airport,+Airport+Boulevard,+Sacramento,+CA/4600+Mountain+Home+Ranch+Rd,+Calistoga,+CA+94515/@38.4505363,-122.6755153,9z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x809b2b73ce6a70ad:0xa460901228ef4232!2m2!1d-121.5900648!2d38.6950854!1m5!1m1!1s0x80844170be1f1fe9:0x6507900aa20abd50!2m2!1d-122.640186!2d38.568939">Sacramento Airport (SMF)</a>. There are also flights from <a href="http://sonomacountyairport.org/">Sonoma County Airport</a> - a 30 minute drive to Calistoga - from LA, San Diego, Portland, Seattle and Orange County.
      </p>
      <p>
        Memorial Day Weekend is a very popular time for travel, so please book your flights and car rentals now!
      </p>
    </TextAlign>
  );
}

function RightColumn() {
  return (
    <TextAlign center>
      <H4>Music</H4>
      <p>
        We're excited to have <a target="_blank" href="http://www.dart-dj.com/">Dart DJ</a> spinning tunes for the wedding. We'll also have a silent disco. And yes, there will be glow sticks for all.
      </p>

      <H4>Food</H4>
      <p>
        Food for all of the wedding events will be provided by <a target="_blank" href="http://www.amieedmarisevents.com/">Amiee D'Maris Events</a>, which also operates <a target="_blank" href="http://www.amieedmarisevents.com/food-love">ADE Farms</a> at Triple S Ranch. Friday evening's food will include handmade pizzas from the wood-fired oven onsite, Saturday will feature a range of fresh vegetables and fruits, and Sunday will feature a Texas-style breakfast taco brunch!
      </p>

      <H4>Activities</H4>
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
