/* @jsx createElement */
import React from 'react';
import createElement from 'react-stylematic';

export default function Nav() {
  return (
    <ul style={styles.wrapper}>
      <Link href="#" active>Your Info</Link>
      <Link href="#">Our Story</Link>
      <Link href="#">Travel Info</Link>
      <Link href="#">Schedule</Link>
      <Link href="#">FAQ &amp; Details</Link>
    </ul>
  );
}

function Link({href, active, children}) {
  return (
    <li style={styles.item}>
      <a href={href} style={{
        ...styles.link,
        ...(active && styles.linkActive)
      }}>{children}</a>
    </li>
  );
}

const styles = {
  wrapper: {
    listStyle: 'none',
    textAlign: 'center',
    margin: '0px',
    padding: '0px'
  },
  item: {
    display: 'inline'
  },
  link: {
    display: 'inline-block',
    padding: '25px',
    textTransform: 'uppercase',
    textDecoration: 'none',
    fontFamily: '"Brandon Grotesque"',
    fontSize: '13px',
    fontWeight: 'bold',
    letterSpacing: '2px',
    color: '#777',

    ':hover': {
      color: '#A4C89A'
    },
  },
  linkActive: {
    backgroundColor: '#A4C89A',
    color: '#fff',

    ':hover': {
      color: '#fff'
    }
  }
};
