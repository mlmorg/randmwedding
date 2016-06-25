/* @jsx createElement */
import {Component} from 'react';
import createElement from 'react-stylematic';
import debounce from 'debounce';

export default class Nav extends Component {
  constructor() {
    super();
    this.state = {
      fixed: false,
      height: 'auto'
    };
    this.debouncedSetFixed = debounce(this.setFixed.bind(this), 1);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.debouncedSetFixed);
    this.setState({
      height: this.nav.offsetHeight,
      fixed: this.shouldBeFixed()
    });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.debouncedSetFixed);
  }

  shouldBeFixed() {
    const scrollTop = window.pageYOffset;
    const position =
      (this.nav.getBoundingClientRect().top + window.pageYOffset) -
      document.documentElement.clientTop;
    return scrollTop >= position;
  }

  setFixed() {
    this.setState({
      fixed: this.shouldBeFixed()
    });
  }

  render() {
    const {fixed, height} = this.state;

    return (
      <div ref={(ref) => this.nav = ref} style={{height: height}}>
        <div style={{
          ...styles.wrapper,
          ...(fixed && styles.wrapperFixed)
        }}>
          <ul style={styles.list}>
            <Link href="#" active>Your Info</Link>
            <Link href="#">Our Story</Link>
            <Link href="#">Travel Info</Link>
            <Link href="#">Schedule</Link>
            <Link href="#">FAQ &amp; Details</Link>
          </ul>
        </div>
      </div>
    );
  }
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
