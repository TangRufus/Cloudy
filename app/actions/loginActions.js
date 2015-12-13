import _ from 'lodash';
import loginTypes from '../constants/loginTypes';
import AlertableError from '../util/alertableError';
import AxiosCloudflare from '../util/axiosCloudflare';

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

function getZone(zone) {
  return zone.name;
}

function handleformSuccess(dispatch, result) {
  const zones = _.map(result, getZone);
  dispatch(formSuccess(zones));
}

function handleformFailure(dispatch, error) {
  const DEFAULT_ERROR_MSG = 'Wrong email address and API key combination. Please try again.';
  const errorMsg = _.isString(error.data) ? error.data : (error.statusText || DEFAULT_ERROR_MSG);
  const alertableError = new AlertableError(errorMsg);
  dispatch(formFailure(alertableError));
}

export function onFormSubmit() {
  return (dispatch, getState) => {
    dispatch(formRequest());

    const state = getState();
    const { email, apiKey } = state.login.form.fields;
    const axiosCloudflare = new AxiosCloudflare(email, apiKey);

    return axiosCloudflare.zones()
                          .then(result => handleformSuccess(dispatch, result))
                          .catch(error => handleformFailure(dispatch, error));
  };
}
