import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import React from 'react';

import {saveForm} from '../actions';

import RSVP from '../components/home/rsvp';

function mapStateToProps(state) {
  return state.form;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    saveForm
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RSVP);
