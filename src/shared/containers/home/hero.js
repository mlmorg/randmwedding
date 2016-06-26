import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import React from 'react';

import {changeRouteActive} from '../../actions';
import RouteActive from '../route-active';
import Hero from '../../components/home/hero';

class HeroContainer extends RouteActive {
  render() {
    return <Hero/>;
  }
}

function mapStateToProps(state) {
  return {navHeight: state.nav.height};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    isActive: changeRouteActive.bind(null, 'hero')
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeroContainer);
