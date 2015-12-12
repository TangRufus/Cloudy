import _ from 'lodash'
import loginTypes from '../constants/loginTypes';

export function onFormFieldChange(field, value) {
  return {
    type: loginTypes.ON_FORM_FIELD_CHANGE,
    payload: { field: field, value: value }
  };
}

function requestLogin() {
  return {
    type: loginTypes.REQUEST_LOGIN
  };
}

function loginSuccess(domainList) {
  return {
    type: loginTypes.LOGIN_SUCCESS
  };
}

function loginFailure(error) {
  return {
    type: loginTypes.LOGIN_FAILURE
  };
}

function handleLoginResponse(response) {
  if (response.status !== 200) {
    const DEFAULT_ERROR_MSG = 'Wrong email address and API key combination. Please try again.';
    const errorMsg = response.statusText || DEFAULT_ERROR_MSG;
    return Promise.reject(new Error(errorMsg));
  }

  return response.json();
}

function handleApiResponse(responseJson) {
  if (responseJson.success) {
    return responseJson.result;
  }

  return Promise.reject(new Error(responseJson.messages));
}

function getZoneName(zone) {
  return zone.name;
}

function handleLoginSuccess(dispatch, result) {
  const zoneList = _.map(result, getZoneName);
  dispatch(loginSuccess(zoneList));
}

function handleLoginFailure(dispatch, error) {
  const errorMsg = error.message;
  dispatch(loginFailure(errorMsg));
}

export function onFormSubmit() {
  return (dispatch, getState) => {
    dispatch(requestLogin());

    const state = getState();
    const { email, apiKey } = state.login.form.fields;

    const config = {
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Key': apiKey,
        'X-Auth-Email': email
      }
    };

    // @TODO: Handle timeout
    return fetch('https://api.cloudflare.com/client/v4/zones', config)
        .then(response => handleLoginResponse(response))
        .then(responseJson => handleApiResponse(responseJson))
        .then(result => handleLoginSuccess(dispatch, result))
        .catch(error => handleLoginFailure(dispatch, error));
  };
}
