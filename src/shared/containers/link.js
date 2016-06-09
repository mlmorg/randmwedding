import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actions} from 'redux-router5';

const Link = (props, context) => {
  const {router} = context;
  const {name, params, options, navigateTo, children} = props;

  const href = router.buildUrl(name, params);
  const className = router.isActive(name, params) ? 'active' : '';
  const onClick = (evt) => {
    evt.preventDefault();
    navigateTo(name, params, options);
  };

  return <a {...{href, onClick, className}}>{children}</a>;
};

Link.propTypes = {
  name: PropTypes.string.isRequired,
  params: PropTypes.object,
  options: PropTypes.object
};

Link.defaultProps = {
  params: {},
  options: {}
};

Link.contextTypes = {
  router: PropTypes.object.isRequired
};

export default connect(
  null,
  (dispatch) => bindActionCreators({navigateTo: actions.navigateTo}, dispatch)
)(Link);
