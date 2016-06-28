import {connect} from 'react-redux';

import Home from '../components/home';

function mapStateToProps(state) {
  return {isMobile: state.server.isMobile};
}

export default connect(mapStateToProps)(Home);
