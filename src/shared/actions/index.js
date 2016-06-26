export function changeNavState(activeRoute, affix, height) {
  return {
    type: 'CHANGE_NAV_STATE',
    activeRoute,
    affix,
    height
  };
}
