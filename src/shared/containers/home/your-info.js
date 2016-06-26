import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import React from 'react';
import {findDOMNode} from 'react-dom';
import debounce from 'debounce';

import {changeRouteActive} from '../../actions';
import YourInfo from '../../components/home/your-info';

class YourInfoContainer extends React.Component {
  constructor() {
    super();
    this.debouncedFn = debounce(this.onViewChange.bind(this), 10);
  }

  componentDidMount() {
    window.addEventListener('resize', this.debouncedFn);
    window.addEventListener('scroll', this.debouncedFn);
    this.onViewChange();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.debouncedFn);
    window.removeEventListener('scroll', this.debouncedFn);
  }

  onViewChange() {
    const node = findDOMNode(this);

    const scrollTop = window.pageYOffset;
    const positionTop =
      (node.getBoundingClientRect().top + window.pageYOffset) -
      document.documentElement.clientTop;
    const positionBottom = positionTop + node.offsetHeight;

    if (
      scrollTop >= positionTop &&
      scrollTop <= positionBottom
    ) {
      this.props.isActive();
    }
  }

  render() {
    return <YourInfo/>;
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    isActive: changeRouteActive.bind(null, 'your-info')
  }, dispatch);
}

export default connect(
  null,
  mapDispatchToProps
)(YourInfoContainer);
