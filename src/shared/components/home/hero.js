import React from 'react';

import {H1, H2, H5} from '../typography';
import Logo from '../logo';
import {Relative} from '../../../lib/react-layout';

export default function Hero() {
  return (
    <div style={styles.wrapper}>
      <div style={styles.heading}>
        <Logo secondary width="90"/>
        <div style={styles.title}>
          <H1>Rac<span style={styles.upper}>h</span>el & Matt</H1>
          <div style={styles.titleLineLeft}/>
          <div style={styles.titleLineCenter}/>
          <div style={styles.titleLineRight}/>
        </div>
        <div style={styles.subtitle}>
          <H2>
            Saturday, May 27, 2017<br />
            Under The Walnut tree
          </H2>
        </div>
        <H5>Calistoga, CA</H5>
      </div>
      <div style={styles.overlay}/>
      <video width="100%" preload="auto" loop autoPlay muted>
        <source src="/assets/static/tree.mp4" type="video/mp4"></source>
      </video>
    </div>
  );
};

const shared = {
  titleWidth: {
    width: '343px'
  },
  titleLine: {
    position: 'absolute',
    bottom: '-11px',
    borderBottom: '1px solid #999'
  }
};

const styles = {
  wrapper: {
    position: 'relative'
  },
  heading: {
    position: 'absolute',
    width: '100%',
    top: '18%',
    textAlign: 'center',
    color: 'white',
    zIndex: '20'
  },
  title: {
    ...shared.titleWidth,
    position: 'relative',
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
    ...shared.titleWidth,
    position: 'relative',
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
