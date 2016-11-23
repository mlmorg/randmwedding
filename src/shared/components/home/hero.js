/* @jsx createElement */
import React from 'react';
import createElement from 'react-stylematic';
import assetUrl from '../../../lib/asset-url';

import Logo from '../logo';
import {H1, H2, H5} from '../typography';
import {Absolute, IntrinsicHeight} from '../../../lib/react-layout';
import VideoContainer from '../../containers/video';

export default function Hero() {
  return (
    <IntrinsicHeight percentage="52.7%">
      <div style={styles.heading}>
        <Logo secondary style={styles.logo}/>
        <div style={styles.title}>
          <H1 style={styles.titleText}>Rac<span style={styles.upper}>h</span>el & Matt</H1>
          <div style={styles.titleLineLeft}/>
          <div style={styles.titleLineCenter}/>
          <div style={styles.titleLineRight}/>
        </div>
        <div style={styles.subtitle}>
          <H2>
            Saturday May 27<sup style={styles.superscript}>th</sup> 2017<br />
            Under The Walnut tree
          </H2>
        </div>
        <H5>Calistoga, CA</H5>
      </div>
      <div style={styles.overlay}/>
      <VideoContainer/>
    </IntrinsicHeight>
  );
};

const shared = {
  titles: {
    position: 'relative',
    width: '343px'
  },
  titleLine: {
    position: 'absolute',
    bottom: '-11px',
    borderBottom: '1px solid #999',

    '@media(max-width: 750px)': {
      bottom: '-6px'
    }
  }
};

const styles = {
  heading: {
    position: 'absolute',
    width: '100%',
    top: '18%',
    textAlign: 'center',
    color: 'white',
    zIndex: '20',

    '@media(max-width: 750px)': {
      top: '10%'
    }
  },
  logo: {
    width: '90px',
    height: '50px',

    '@media(max-width: 750px)': {
      width: '30px',
      height: '17px'
    }
  },
  titleText: {
    margin: '0px'
  },
  title: {
    ...shared.titles,
    margin: '0 auto 14px auto',

    '@media(max-width: 750px)': {
      width: '207px',
      marginBottom: '10px'
    }
  },
  titleLineLeft: {
    ...shared.titleLine,
    width: '16px',
    left: '0px',

    '@media(max-width: 750px)': {
      width: '8px'
    }
  },
  titleLineCenter: {
    ...shared.titleLine,
    width: '163px',
    left: '40px',

    '@media(max-width: 750px)': {
      width: '98px',
      left: '25px'
    }
  },
  titleLineRight: {
    ...shared.titleLine,
    width: '115px',
    right: '0px',

    '@media(max-width: 750px)': {
      width: '70px'
    }
  },
  subtitle: {
    ...shared.titles,
    margin: '0px auto 30px auto',
    borderBottom: '1px solid #999',

    '@media(max-width: 750px)': {
      width: '207px',
      marginBottom: '15px'
    }
  },
  superscript: {
    top: '-9px',
    fontSize: '60%',

    '@media(max-width: 750px)': {
      top: '-5px'
    }
  },
  upper: {
    textTransform: 'uppercase'
  },
  overlay: {
    position: 'absolute',
    width: '400px',
    height: '300px',
    top: '15%',
    left: '50%',
    marginLeft: '-200px',
    borderRadius: '50%',
    background: 'rgba(0,0,0,0.3)',
    WebkitFilter: 'blur(10px)',
    zIndex: '10',

    '@media(max-width: 750px)': {
      width: '300px',
      marginLeft: '-150px',
      height: '175px',
      top: '10%'
    }
  }
};
