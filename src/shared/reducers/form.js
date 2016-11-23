const initialState = {
  isSaving: false,
  hasFailure: false,
  didSucceed: false
};

export default function form(state = initialState, action) {
  if (action.type === 'SAVE_FORM_START') {
    return {...state, isSaving: true, hasFailure: false, didSucceed: false};
  }

  if (action.type === 'SAVE_FORM_FAILURE') {
    return {...state, isSaving: false, hasFailure: action.message, didSucceed: false};
  }

  if (action.type === 'SAVE_FORM_SUCCESS') {
    return {...state, isSaving: false, hasFailure: false, didSucceed: true};
  }
  return state;
}
