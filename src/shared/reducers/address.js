const initialState = {
  isSaving: false,
  hasFailure: false,
  didSucceed: false
};

export default function address(state = initialState, action) {
  if (action.type === 'SAVE_ADDRESS_START') {
    return {...state, isSaving: true, hasFailure: false, didSucceed: false};
  }

  if (action.type === 'SAVE_ADDRESS_FAILURE') {
    return {...state, isSaving: false, hasFailure: action.message, didSucceed: false};
  }

  if (action.type === 'SAVE_ADDRESS_SUCCESS') {
    return {...state, isSaving: false, hasFailure: false, didSucceed: true};
  }
  return state;
}
