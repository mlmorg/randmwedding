/* @jsx createElement */
import createElement from 'react-stylematic';

export default function Nav({activeRoute, affix, height, seenAccommodations}) {
  const newAccommodations = seenAccommodations ? null : <span style={styles.pill}>New!</span>;

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
          <Link href="#accommodations" {...{active: activeRoute === 'accommodations'}}>Accommodations{newAccommodations}</Link>
          <Link href="#faq-and-details" {...{active: activeRoute === 'faq-and-details'}}>FAQ &amp; Details</Link>
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
    display: 'inline',
  },
  link: {
    position: 'relative',
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

    '@media(max-width: 750px)': {
      padding: '10px 15px',
      fontSize: '11px'
    }
  },
  linkActive: {
    backgroundColor: '#A4C89A',
    color: '#fff',

    ':hover': {
      color: '#fff'
    }
  },
  pill: {
    display: 'block',
    position: 'absolute',
    top: '10px',
    right: '15px',
    padding: '4px 2px 2px 3px',
    backgroundColor: '#C74F41',
    color: '#fff',
    fontSize: '9px',
    borderRadius: '2px',
    lineHeight: '1',

    '@media(max-width: 750px)': {
      top: '0',
      right: '0'
    }
  }
};
