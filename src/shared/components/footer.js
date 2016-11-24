/* @jsx createElement */
import createElement from 'react-stylematic';
import assetUrl from '../../lib/asset-url';

import {TextAlign} from '../../lib/react-layout';
import {H5} from './typography';
import Logo from './logo';

export default function Footer() {
  return (
    <div style={styles.wrapper}>
      <TextAlign center>
        <Logo style={styles.logo}/>
        <div style={styles.subtitleWrapper}>
          <H5 style={styles.subtitle}>See you in May!</H5>
          <hr style={styles.hr}/>
        </div>
      </TextAlign>
    </div>
  );
}

const styles = {
  wrapper: {
    padding: '15px 0',
    marginTop: '-80px'
  },
  logo: {
    width: '150px',
    height: '150px'
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
    border: 'none',
    borderBottom: '1px solid #ddd',
    zIndex: '100'
  }
};
