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

export function showForm() {
  sendEvent('form', 'show');
  return {
    type: 'SHOW_FORM'
  };
}

export function saveForm(payload) {
  return function (dispatch) {
    dispatch(saveFormStart(payload));
    xhr({
      url: '/api/saveForm',
      method: 'POST',
      json: payload
    }, function (err, res, body) {
      // set hash
      window.location.hash = 'saving';
      window.location.hash = 'rsvp';

      if (err) {
        body = {error: 'Failed making request'};
      }

      if (body.error) {
        return dispatch(saveFormFailure(body.error));
      }

      dispatch(saveFormSuccess());
    });
  }
}

export function saveFormStart(payload) {
  sendEvent('form', 'submit');
  return {
    type: 'SAVE_FORM_START',
    payload
  };
}

export function saveFormSuccess() {
  sendEvent('form', 'success');
  return {
    type: 'SAVE_FORM_SUCCESS'
  };
}

export function saveFormFailure(message) {
  sendEvent('form', 'failure', message);
  return {
    type: 'SAVE_FORM_FAILURE',
    message
  };
}

function sendEvent(category, action, label) {
  if (window.ga) {
    window.ga('send', 'event', category, action, label);
  }
}
