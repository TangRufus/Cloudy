import _ from 'lodash';
import loginTypes from '../constants/loginTypes';
import AlertableError from '../util/alertableError';
import AxiosCloudflare from '../util/axiosCloudflare';
import { Actions } from 'react-native-router-flux';
import * as zonesActions from './zonesActions';

export function onFormFieldChange(field, value) {
  return {
    type: loginTypes.FORM_FIELD_CHANGE,
    field,
    value
  };
}

function formRequest() {
  return {
    type: loginTypes.FORM_REQUEST
  };
}

function formSuccess() {
  return {
    type: loginTypes.FORM_SUCCESS
  };
}

function formFailure(error) {
  return {
    type: loginTypes.FORM_FAILURE,
    error
  };
}

function handleformSuccess(dispatch, data) {
  dispatch(zonesActions.fetchZonesSuccess(data));
  dispatch(formSuccess());
  Actions.blank();
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
                          .then(data => handleformSuccess(dispatch, data))
                          .catch(error => handleformFailure(dispatch, error));
  };
}
