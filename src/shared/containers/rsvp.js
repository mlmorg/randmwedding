import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import React from 'react';

import {saveAddress} from '../actions';

import RSVP from '../components/home/rsvp';

function mapStateToProps(state) {
  return state.address;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    saveAddress
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RSVP);
