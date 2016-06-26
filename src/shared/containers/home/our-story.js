import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import React from 'react';

import {changeRouteActive} from '../../actions';
import RouteActive from '../route-active';
import OurStory from '../../components/home/our-story';

class OurStoryContainer extends RouteActive {
  render() {
    return <OurStory/>;
  }
}

function mapStateToProps(state) {
  return {navHeight: state.nav.height};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    isActive: changeRouteActive.bind(null, 'our-story')
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OurStoryContainer);
