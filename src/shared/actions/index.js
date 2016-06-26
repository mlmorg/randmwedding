export function changeRouteActive(route) {
  return {
    type: 'CHANGE_ROUTE_ACTIVE',
    route
  };
}

export function changeNavStyle(fixed, height) {
  return {
    type: 'CHANGE_NAV_STYLE',
    fixed,
    height
  };
}
