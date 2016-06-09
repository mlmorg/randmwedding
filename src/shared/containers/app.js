import React, {createElement} from 'react';
import {connect} from 'react-redux';
import {routeNodeSelector} from 'redux-router5';

import Home from '../components/home';
import Layout from '../components/layout';
import NotFound from '../components/not-found';
import Other from '../components/other';

const components = {
  'home': Home,
  'other': Other,
  'not-found': NotFound
};

const AppContainer = ({route, state}) => {
  const segment = route && route.name.split('.')[0] || 'not-found';

  return (
    <Layout>
      {createElement(components[segment])}
    </Layout>
  );
};

export default connect(routeNodeSelector(''))(AppContainer);
