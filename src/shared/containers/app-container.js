import React from 'react';
import {connect} from 'react-redux';

const App = ({bedrock, children, dispath}) => (
  <div>
    <h1>Hello World!</h1>
  </div>
);

export default connect(state => state)(App);
