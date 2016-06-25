/* @jsx createElement */
import React from 'react';
import createElement from 'react-stylematic';

import Logo from '../logo';
import {Absolute, IntrinsicHeight} from '../../../lib/react-layout';

export default function Hero() {
  return (
    <IntrinsicHeight percentage="52.7%">
      <div style={styles.heading}>
        <Logo secondary width="90"/>
        <div style={styles.title}>
          <h1>Rac<span style={styles.upper}>h</span>el & Matt</h1>
          <div style={styles.titleLineLeft}/>
          <div style={styles.titleLineCenter}/>
          <div style={styles.titleLineRight}/>
        </div>
        <div style={styles.subtitle}>
          <h2>
            Saturday, May 27, 2017<br />
            Under The Walnut tree
          </h2>
        </div>
        <h5>Calistoga, CA</h5>
      </div>
      <div style={styles.overlay}/>
      <video width="100%" preload="auto" loop autoPlay muted>
        <source src="/assets/static/tree.mp4" type="video/mp4"></source>
      </video>
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
    borderBottom: '1px solid #999'
  }
};

const styles = {
  heading: {
    position: 'absolute',
    width: '100%',
    top: '18%',
    textAlign: 'center',
    color: 'white',
    zIndex: '20'
  },
  title: {
    ...shared.titles,
    margin: '0 auto 14px auto'
  },
  titleLineLeft: {
    ...shared.titleLine,
    width: '16px',
    left: '0px'
  },
  titleLineCenter: {
    ...shared.titleLine,
    width: '163px',
    left: '40px'
  },
  titleLineRight: {
    ...shared.titleLine,
    width: '115px',
    right: '0px'
  },
  subtitle: {
    ...shared.titles,
    margin: '0px auto 30px auto',
    borderBottom: '1px solid #999'
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
    zIndex: '10'
  }
};
