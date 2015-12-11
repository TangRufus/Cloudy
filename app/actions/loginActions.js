import loginTypes from '../constants/loginTypes';

export function onFormFieldChange(field, value) {
  return {
    type: loginTypes.ON_FORM_FIELD_CHANGE,
    payload: { field: field, value: value }
  };
}

function formRequest() {
  return {
    type: loginTypes.FORM_REQUEST
  };
}

function tryLogin(email, apiKey) {
  return fetch('https://ssswww.google.com/search?q=secret+sauce');
}

function success() {console.log('success'); }

function handleFormSubmit() {
  return dispatch => {
    dispatch(formRequest())
    return tryLogin().then(
      data => success()
     );
  };
}

export function onFormSubmit() {
  return {
    type: loginTypes.FORM_REQUEST
  };
}
