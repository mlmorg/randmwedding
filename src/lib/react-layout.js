import React from 'react';

export function Relative({children}) {
  return (
    <div style={{
      position: 'relative'
    }}>
      {children}
    </div>
  );
}

export function Absolute({children}) {
  return (
    <div style={{
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: '0px',
      left: '0px'
    }}>
      {children}
    </div>
  );
}

export function IntrinsicHeight({percentage, children}) {
  const styles = {
    outer: {
      position: 'relative',
      paddingBottom: percentage,
      height: '0px'
    },
    inner: {
      position: 'absolute',
      top: '0px',
      left: '0px',
      width: '100%',
      height: '100%'
    }
  };
  return (
    <div style={{
      position: 'relative',
      paddingBottom: percentage,
      height: '0px'
    }}>
      <Absolute>
        {children}
      </Absolute>
    </div>
  );
}

export function Layout({center, children}) {
  return (
    <div style={{
      listStyle: 'none',
      margin: '0px',
      padding: '0px',
      marginLeft: '-60px',
      textAlign: center && 'center'
    }}>
      {children}
    </div>
  );
}

export function LayoutItem({size, max, children}) {
  return (
    <div style={{
      display: 'inline-block',
      paddingLeft: '60px',
      verticalAlign: 'top',
      width: size ? (size / 12 * 100) + '%' : '100%',
      maxWidth: max || 'auto',
      boxSizing: 'border-box',
      textAlign: 'left'
    }}>
      {children}
    </div>
  );
}

export function TextAlign({left, center, right, style, children}) {
  return (
    <div style={{
      ...style,
      textAlign: left ? 'left' : (center ? 'center' : 'right')
    }}>
      {children}
    </div>
  );
}

export function Padded({sides, ends, style, children}) {
  const padSides = sides || !ends;
  const padEnds = ends || !sides;
  const sidesPx = '30px';
  const endsPx = '75px';

  return <div style={{
    ...style,
    paddingTop: padEnds && endsPx,
    paddingBottom: padEnds && endsPx,
    paddingLeft: padSides && sidesPx,
    paddingRight: padSides && sidesPx
  }}>{children}</div>
}
