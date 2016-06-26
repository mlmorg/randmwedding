import React from 'react';
import {findDOMNode} from 'react-dom';
import debounce from 'debounce';

export default class RouteActive extends React.Component {
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

    const navHeight = isNaN(this.props.navHeight) ? 0 : this.props.navHeight;
    const scrollTop = window.pageYOffset + navHeight;
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
}
