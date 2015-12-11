import loginTypes from '../constants/loginTypes';

export function onFormFieldChange(field, value) {
  return {
    type: loginTypes.ON_FORM_FIELD_CHANGE,
    payload: { field: field, value: value }
  };
}

export function onFormSubmit() {
  return {
    type: loginTypes.FORM_REQUEST
  };
}
