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
    this.onHashChangeFn = this.scrollToRoute.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScrollFn);
    window.addEventListener('resize', this.onResizeFn);
    window.addEventListener('hashchange', this.onHashChangeFn);

    this.node = findDOMNode(this);
    this.nodes = this.routes.map((id) => document.getElementById(`section-${id}`));

    this.onViewChange();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScrollFn);
    window.removeEventListener('resize', this.onResizeFn);
    window.removeEventListener('hashchange', this.onHashChangeFn);
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
    const height = this.getNavHeight();

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
    const scrollTop = window.pageYOffset + this.getNavHeight();
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

  scrollToRoute() {
    const route = window.location.hash.substr(1);
    const routeIndex = this.routes.indexOf(route);
    if (routeIndex >= 0) {
      const routeStart = this.starts[routeIndex];
      const navHeight = this.getNavHeight();
      scrollTo(document.body, routeStart - navHeight, 500);
    }
  }

  getNavHeight() {
    return this.node.firstElementChild.offsetHeight;
  }

  render() {
    return <Nav {...this.props}/>
  }
}

function scrollTo(element, to, duration) {
  const start = element.scrollTop;
  const change = to - start;
  let currentTime = 0;
  let increment = 20;

  function animateScroll(){
    currentTime += increment;
    const val = easeInOutQuad(currentTime, start, change, duration);
    element.scrollTop = val;
    if(currentTime < duration) {
      setTimeout(animateScroll, increment);
    }
  }

  animateScroll();
}

function easeInOutQuad(currentTime, start, change, duration) {
  currentTime /= duration/2;
  if (currentTime < 1) return change/2*currentTime*currentTime + start;
  currentTime--;
  return -change/2 * (currentTime*(currentTime-2) - 1) + start;
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
