import React from 'react';

import Link from '../components/link';

const Navigate = (props, context) => {
  const {router} = context;
  const {name, params, options, navigateTo, children} = props;

  const href = router.buildUrl(name, params);
  const isActive = router.isActive(name, params);
  const onClick = () => navigateTo(name, params, options);

  return <a {...{href, onClick, isActive}}>{children}</Link>
}
