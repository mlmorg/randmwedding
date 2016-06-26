import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import React from 'react';

import {changeRouteActive} from '../../actions';
import RouteActive from '../route-active';
import Schedule from '../../components/home/schedule';

class ScheduleContainer extends RouteActive {
  render() {
    return <Schedule/>;
  }
}

function mapStateToProps(state) {
  return {navHeight: state.nav.height};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    isActive: changeRouteActive.bind(null, 'schedule')
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScheduleContainer);
