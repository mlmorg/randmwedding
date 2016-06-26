export default function nav(state = {
  height: 'auto',
  fixed: false
}, action) {
  let newState = state;

  if (action.type === 'CHANGE_ROUTE_ACTIVE') {
    newState = {
      ...state,
      active: action.route
    };
  }

  if (action.type === 'CHANGE_NAV_STYLE') {
    newState = {
      ...state,
      fixed: action.fixed,
      height: action.height
    };
  }

  return newState;
}
