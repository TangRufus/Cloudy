// @TODO: Switch to lodash
import _ from 'underscore';

function hasError(errors) {
  return _.contains(errors, true);
}

function isFilled(answers) {
  return !_.any(answers, _.isEmpty);
}

export default function loginFormValidation(state) {
  const fields = state.form.fields;
  const answers = [fields.email, fields.apiKey];
  const errors = [fields.emailHasError, fields.apiKeyHasError];

  const isValid = !hasError(errors) && isFilled(answers);
  return state.setIn(['form', 'isValid'], isValid);
}
