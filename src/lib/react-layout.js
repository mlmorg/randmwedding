import React from 'react';

export function Relative({children}) {
  return (
    <div style={{
      position: 'relative'
    }}>
      {children}
    </div>
  );
};

export function Absolute({children}) {
  return (
    <div style={{
      position: 'absolute',
      width: '100%',
      height: '100%'
    }}>
      {children}
    </div>
  );
};
