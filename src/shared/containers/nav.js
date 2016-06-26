import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {findDOMNode} from 'react-dom';

import debounce from 'debounce';
import React from 'react';

import {changeNavStyle} from '../actions';

import Nav from '../components/nav';

class NavContainer extends React.Component {
  constructor() {
    super();
    this.debounceFn = debounce(this.onViewChange.bind(this), 10);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.debounceFn);
    window.addEventListener('resize', this.debounceFn);
    this.onViewChange();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.debounceFn);
    window.removeEventListener('resize', this.debounceFn);
  }

  onViewChange() {
    const node = findDOMNode(this);

    const scrollTop = window.pageYOffset;
    const position =
      (node.getBoundingClientRect().top + window.pageYOffset) -
      document.documentElement.clientTop;

    const isFixed = scrollTop >= position;
    const height = node.firstElementChild.offsetHeight;

    this.props.changeNavStyle(isFixed, height);
  }

  render() {
    return <Nav {...this.props}/>
  }
}

function mapStateToProps(state) {
  return state.nav;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({changeNavStyle}, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavContainer);
