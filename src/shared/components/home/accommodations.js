/* @jsx createElement */
import createElement from 'react-stylematic';
import assetUrl from '../../../lib/asset-url';

import {Layout, LayoutItem, TextAlign, Padded} from '../../../lib/react-layout';
import {H3, H4} from '../typography';

export default function Accommodations() {
  return (
    <Padded style={styles.wrapper}>
      <div id="section-accommodations" style={styles.content}>
        <Content/>
      </div>
    </Padded>
  );
}

function Content() {
  return (
    <div>
      <TextAlign center>
        <img src={assetUrl('tomato.png')} style={styles.image}/>
      </TextAlign>

      <Layout center>
        <LayoutItem max="600px">
          <TextAlign center>
            <H3><span style={styles.wordbreak}>Accommodations</span></H3>
            <p>There are many accommodations in Calistoga, but they will book up fast! Options are below, even more are available online. We will provide a shuttle to and from downtown Calistoga. There is plentiful parking on the ranch, but please do not drink and drive!</p>
          </TextAlign>
        </LayoutItem>
      </Layout>

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
  );
}

function LeftColumn() {
  return (
    <TextAlign center>
      <H4>Airbnb or VRBO</H4>
      <p>Want to rent a house or save money by staying in a local room? Check out a range of accommodations in the area on <a target="_blank" href="https://www.airbnb.com/">Airbnb</a> or <a target="_blank" href="https://www.vrbo.com/">VRBO</a>.</p>

      <H4>Comfort Inn Calistoga</H4>
      <p>
        $290-350/night<br/>
        1865 Lincoln Avenue<br/>
        Calistoga, CA 94515<br/>
        <a target="_blank" href="http://www.comfortinncalistoga.com/">Website</a>
      </p>

      <H4>Mountain Home Ranch</H4>
      <p>
        $75-160/night (car recommended)<br/>
        3400 Mountain Home Ranch Rd<br/>
        Calistoga, CA 94515<br/>
        <a href="_blank" href="http://www.mountainhomeranch.com/">Website</a>
      </p>
    </TextAlign>
  );
}

function CenterColumn() {
  return (
    <TextAlign center>
      <H4>Best Western Calistoga</H4>
      <p>
        $240-300/night<br/>
        1830 Lincoln Avenue<br/>
        Calistoga, CA 94515<br/>
        <a target="_blank" href="http://www.stevensonmanor.com/contact-us.aspx">Website</a>
      </p>

      <H4>Cottage Grove</H4>
      <p>
        $425/night<br/>
        1711 Lincoln Ave<br/>
        Calistoga, CA 94515<br/>
        <a target="_blank" href="http://www.cottagegrove.com/">Website</a>
      </p>

      <H4>Mount View Hotel</H4>
      <p>
        $269-459/night<br/>
        1457 Lincoln Ave<br/>
        Calistoga, CA 94515<br/>
        <a target="_blank" href="http://mountviewhotel.com/">Website</a>
      </p>

      <H4>Solage Calistoga</H4>
      <p>
        $500-600/night<br/>
        755 Silverado Trail<br/>
        Calistoga, California 94515<br/>
        <a href="_blank" href="https://solage.aubergeresorts.com/">Website</a>
      </p>
    </TextAlign>
  );
}

function RightColumn() {
  return (
    <TextAlign center>
      <H4>Calistoga Wine Way Inn</H4>
      <p>
        $100-500/night<br/>
        1019 Foothill Blvd<br/>
        Calistoga, CA 94515<br/>
        <a href="_blank" href="https://www.lodginginnapavalley.com/calistoga-lodging.html">Website</a>
      </p>

      <H4>Dr. Wilkinson's Hot Springs Resort</H4>
      <p>
        $185-280/night<br/>
        1507 Lincoln Ave<br/>
        Calistoga, CA 94515<br/>
        <a target="_blank" href="http://www.drwilkinson.com/">Website</a>
      </p>

      <H4>Sunburst Calistoga</H4>
      <p>
        $185-389/night<br/>
        1880 Lincoln Ave<br/>
        Calistoga, CA 94515<br/>
        <a target="_blank" href="http://www.thesunburstcalistoga.com/">Website</a>
      </p>
    </TextAlign>
  );
}

const styles = {
  wordbreak: {
    wordBreak: 'break-all'
  },
  wrapper: {
    backgroundColor: '#C74F41',
    color: '#fff'
  },
  content: {
    marginTop: '-150px'
  },
  image: {
    width: '175px',
    height: '150px'
  }
};
