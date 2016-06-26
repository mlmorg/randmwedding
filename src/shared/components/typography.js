/* @jsx createElement */
import createElement from 'react-stylematic';

export function H1({style, children, ...props}) {
  return <h1 style={{...style, ...styles.h1}} {...props}>{children}</h1>;
}
export function H2({style, children, ...props}) {
  return <h2 style={{...style, ...styles.h2}} {...props}>{children}</h2>;
}
export function H3({style, children, ...props}) {
  return <h3 style={{...style, ...styles.h3}} {...props}>{children}</h3>;
}
export function H4({style, children, ...props}) {
  return <h4 style={{...style, ...styles.h4}} {...props}>{children}</h4>;
}
export function H5({style, children, ...props}) {
  return <h5 style={{...style, ...styles.h5}} {...props}>{children}</h5>;
}
export function H6({style, children, ...props}) {
  return <h6 style={{...style, ...styles.h6}} {...props}>{children}</h6>;
}

const shared = {
  yonder: {
    fontFamily: '"Yonder", sans-serif',
    fontWeight: 'normal',
  },
  grotesque: {
    fontFamily: '"Brandon Grotesque"',
    fontWeight: 'normal'
  }
};

const styles = {
  h1: {
    ...shared.yonder,
    fontSize: '75px',
    lineHeight: '0.8',
    margin: '0px',

    '@media(max-width: 750px)': {
      fontSize: '45px'
    }
  },
  h2: {
    ...shared.yonder,
    fontSize: '45px',
    lineHeight: '0.8',
    textTransform: 'lowercase',
    margin: '0px 0px 16px 0px',

    '@media(max-width: 750px)': {
      fontSize: '27px',
      marginBottom: '10px'
    }
  },
  h3: {
    ...shared.yonder,
    fontSize: '75px',
    lineHeight: '0.8',
    textTransform: 'lowercase',
    margin: '0px 0px 30px 0px'
  },
  h4: {
    ...shared.grotesque,
    fontSize: '14px',
    fontWeight: 'bold',
    lineHeight: '1',
    textTransform: 'uppercase',
    letterSpacing: '3px',
    margin: '15px 0px 20px 0'
  },
  h5: {
    ...shared.grotesque,
    fontSize: '14px',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    margin: '0px 0px 14px 0px',

    '@media(max-width: 750px)': {
      fontSize: '12px'
    }
  },
  h6: {
    ...shared.grotesque,
    fontSize: '13px',
    fontWeight: 'bold',
    margin: '0px 0px 5px 0px'
  }
};
