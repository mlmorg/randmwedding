/* @jsx createElement */
import createElement from 'react-stylematic';

export default function Nav({activeRoute, affix, height}) {
  return (
    <div style={{height: height + 'px'}}>
      <div style={{
        ...styles.wrapper,
        ...(affix && styles.wrapperFixed)
      }}>
        <ul style={styles.list}>
          <Link href="#your-info" {...{active: activeRoute === 'your-info'}}>Your Info</Link>
          <Link href="#our-story" {...{active: activeRoute === 'our-story'}}>Our Story</Link>
          <Link href="#schedule" {...{active: activeRoute === 'schedule'}}>Schedule</Link>
          <Link href="#travel-info" {...{active: activeRoute === 'travel-info'}}>Travel Info</Link>
          <Link href="#faq-and-details" {...{active: activeRoute === 'details'}}>FAQ &amp; Details</Link>
        </ul>
      </div>
    </div>
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
    width: '100%',
    backgroundColor: '#fff',
    zIndex: '900'
  },
  wrapperFixed: {
    position: 'fixed',
    top: '0px'
  },
  list: {
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
