import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import React from 'react';

import {changeRouteActive} from '../../actions';
import RouteActive from '../route-active';
import Details from '../../components/home/details';

class DetailsContainer extends RouteActive {
  render() {
    return <Details/>;
  }
}

function mapStateToProps(state) {
  return {navHeight: state.nav.height};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    isActive: changeRouteActive.bind(null, 'details')
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailsContainer);
