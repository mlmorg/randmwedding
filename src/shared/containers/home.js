import {connect} from 'react-redux';

import Home from '../components/home';

function mapStateToProps(state) {
  return {paddingTop: state.nav.height};
}

export default connect(mapStateToProps)(Home);
