import xhr from 'xhr';

export function changeNavState(activeRoute, affix, height) {
  return {
    type: 'CHANGE_NAV_STATE',
    activeRoute,
    affix,
    height
  };
}

export function saveAddress(payload) {
  return function (dispatch) {
    dispatch(saveAddressStart(payload));
    xhr({
      url: '/api/saveAddress',
      method: 'POST',
      json: payload
    }, function (err, res, body) {
      // set hash
      window.location.hash = 'your-info';

      if (err) {
        body = {error: 'Failed making request'};
      }

      if (body.error) {
        return dispatch(saveAddressFailure(body.error));
      }

      dispatch(saveAddressSuccess());
    });
  }
}

export function saveAddressStart(payload) {
  return {
    type: 'SAVE_ADDRESS_START',
    payload
  };
}

export function saveAddressSuccess() {
  return {
    type: 'SAVE_ADDRESS_SUCCESS'
  };
}

export function saveAddressFailure(message) {
  return {
    type: 'SAVE_ADDRESS_FAILURE',
    message
  };
}
