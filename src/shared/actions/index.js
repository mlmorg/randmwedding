import xhr from 'xhr';
import window from 'global/window';

export function changeNavState(activeRoute, affix, height) {
  if (activeRoute) {
    sendEvent('nav', 'change', activeRoute);
  }
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
  sendEvent('address', 'submit');
  return {
    type: 'SAVE_ADDRESS_START',
    payload
  };
}

export function saveAddressSuccess() {
  sendEvent('address', 'success');
  return {
    type: 'SAVE_ADDRESS_SUCCESS'
  };
}

export function saveAddressFailure(message) {
  sendEvent('address', 'failure', message);
  return {
    type: 'SAVE_ADDRESS_FAILURE',
    message
  };
}

function sendEvent(category, action, label) {
  if (window.ga) {
    window.ga('send', 'event', category, action, label);
  }
}
