/* @jsx createElement */
import createElement from 'react-stylematic';

import {TextAlign} from '../../lib/react-layout';

export default function Footer() {
  return (
    <div style={styles.wrapper}>
      <TextAlign center>
        <img src="/assets/static/logo.png" style={styles.image}/>
        <div style={styles.subtitleWrapper}>
          <h5 style={styles.subtitle}>See you in May!</h5>
          <hr style={styles.hr}/>
        </div>
      </TextAlign>
    </div>
  );
}

const styles = {
  wrapper: {
    padding: '15px 0',
    marginTop: '-60px'
  },
  image: {
    width: '150px'
  },
  subtitleWrapper: {
    position: 'relative',
    padding: '15px 0'
  },
  subtitle: {
    position: 'relative',
    width: '175px',
    margin: '0 auto',
    backgroundColor: '#fff',
    zIndex: '200'
  },
  hr: {
    position: 'absolute',
    top: '16px',
    width: '100%',
    border: '0',
    borderBottom: '1px solid #ddd',
    zIndex: '100'
  }
};
