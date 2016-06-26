import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import React from 'react';

import {changeRouteActive} from '../../actions';
import RouteActive from '../route-active';
import YourInfo from '../../components/home/your-info';

class YourInfoContainer extends RouteActive {
  render() {
    return <YourInfo/>;
  }
}

function mapStateToProps(state) {
  return {navHeight: state.nav.height};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    isActive: changeRouteActive.bind(null, 'your-info')
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(YourInfoContainer);
