import _ from 'lodash';
import axios from 'axios';
import loginTypes from '../constants/loginTypes';
import AlertableError from '../util/alertableError';

export function onFormFieldChange(field, value) {
  return {
    type: loginTypes.FORM_FIELD_CHANGE,
    field: field,
    value: value
  };
}

function formRequest() {
  return {
    type: loginTypes.FORM_REQUEST
  };
}

function formSuccess(zones) {
  console.log('zones:', zones);
  return {
    type: loginTypes.FORM_SUCCESS,
    zones: zones
  };
}

function formFailure(error) {
  return {
    type: loginTypes.FORM_FAILURE,
    error: error
  };
}

function handleLoginResponse(response) {
  return response.data.result;
}

function getZone(zone) {
  return zone.name;
}

function handleformSuccess(dispatch, result) {
  const zones = _.map(result, getZone);
  dispatch(formSuccess(zones));
}

function handleformFailure(dispatch, error) {
  const DEFAULT_ERROR_MSG = 'Wrong email address and API key combination. Please try again.';
  const errorMsg = error.statusText || DEFAULT_ERROR_MSG;
  const alertableError = new AlertableError(errorMsg);
  dispatch(formFailure(alertableError));
}

export function onFormSubmit() {
  return (dispatch, getState) => {
    dispatch(formRequest());

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
    return axios.get('https://api.cloudflare.com/client/v4/zones', config)
        .then(response => handleLoginResponse(response))
        .then(result => handleformSuccess(dispatch, result))
        .catch(error => handleformFailure(dispatch, error));
  };
}
