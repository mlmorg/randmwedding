import React, {Component, PropTypes} from 'react';

const Link = (props) => {
  const {name, navigateTo, router, params, options} = props;
  
  const href = router.buildUrl(name, params);

  return <a {...{href, onClick}}>{props.children}</a>;

  function onClick(evt) {
    evt.preventDefault();
    navigateTo(name, params, options);
  }
}

Link.propTypes = {
  name: PropTypes.string.IsRequired,
  navigateTo: PropTypes.func.isRequired,
  router: PropTypes.object.isRequired,
  params: PropTypes.object,
  options: PropTypes.object
};

Link.defaultProps = {
  params: {},
  options: {}
};

export default Link;
