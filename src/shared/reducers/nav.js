const initialState = {
  activeRoute: null,
  affix: false,
  height: 'auto'
};

export default function nav(state = initialState, action) {
  const {type, ...newState} = action;

  if (action.type === 'CHANGE_NAV_STATE') {
    return newState;
  }

  return state;
}
