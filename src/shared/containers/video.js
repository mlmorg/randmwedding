import {connect} from 'react-redux';
import React from 'react';

import Video from '../components/home/video';

function mapStateToProps(state) {
  return {isMobile: state.server.isMobile};
}

export default connect(
  mapStateToProps,
  null
)(Video);
