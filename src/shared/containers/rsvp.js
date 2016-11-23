import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import React from 'react';

import {saveForm, showForm} from '../actions';

import RSVP from '../components/home/rsvp';

function mapStateToProps(state) {
  return state.form;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    saveForm,
    showForm
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RSVP);
