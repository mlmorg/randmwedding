import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {findDOMNode} from 'react-dom';

import debounce from 'debounce';
import React from 'react';
import window from 'global/window';

import {changeNavState} from '../actions';

import Nav from '../components/nav';

class NavContainer extends React.Component {
  constructor() {
    super();
    this.routes = [
      'your-info',
      'our-story',
      'schedule',
      'travel-info',
      'faq-and-details'
    ];
    this.onScrollFn = debounce(this.onScrollChange.bind(this), 10);
    this.onResizeFn = debounce(this.onViewChange.bind(this), 10);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScrollFn);
    window.addEventListener('resize', this.onResizeFn);

    this.node = findDOMNode(this);
    this.nodes = this.routes.map((id) => document.getElementById(id));

    this.onViewChange();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScrollFn);
    window.removeEventListener('resize', this.onResizeFn);
  }

  onViewChange() {
    this.setRouteStarts();
    this.changeNavState();
  }

  onScrollChange() {
    this.changeNavState();
  }

  changeNavState() {
    const activeRoute = this.getActiveRoute();
    const affix = this.shouldBeFixed();
    const height = this.node.firstElementChild.offsetHeight;

    if (
      activeRoute === this.props.activeRoute &&
      affix === this.props.affix &&
      height === this.props.height
    ) {
      return;
    }

    this.props.changeNavState(activeRoute, affix, height);
  }

  setRouteStarts() {
    this.starts = this.nodes.map((node) => {
      return node.offsetTop;
    });
  }

  getActiveRoute() {
    const scrollTop = window.pageYOffset + this.node.firstElementChild.offsetHeight;
    let idx;
    this.starts.some((start, i) => {
      let nextStart = this.starts[i + 1];
      if (scrollTop >= start && (!nextStart || scrollTop < nextStart)) {
        idx = i;
      }
    });
    return this.routes[idx];
  }

  shouldBeFixed() {
    const scrollTop = window.pageYOffset;
    const position = this.node.offsetTop;
    return scrollTop >= position;
  }

  render() {
    return <Nav {...this.props}/>
  }
}

function mapStateToProps(state) {
  return state.nav;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    changeNavState
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavContainer);
