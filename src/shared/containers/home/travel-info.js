import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import React from 'react';

import {changeRouteActive} from '../../actions';
import RouteActive from '../route-active';
import TravelInfo from '../../components/home/travel-info';

class TravelInfoContainer extends RouteActive {
  render() {
    return <TravelInfo/>;
  }
}

function mapStateToProps(state) {
  return {navHeight: state.nav.height};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    isActive: changeRouteActive.bind(null, 'travel-info')
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TravelInfoContainer);
