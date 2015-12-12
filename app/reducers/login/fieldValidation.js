import validate from 'validate.js';
// @TODO: Switch to lodash
import _ from 'underscore';

const emailConstraints = {
  from: {
    email: true
  }
};

const apiKeyConstraints = {
  apiKey: {
    length: {
      minimum: 15
    }
  }
};

export default function fieldValidation(state, field, value) {
  let nextState;

  switch (field) {
    case ('email'):
      const validEmail = _.isUndefined(validate({
        from: value
      },
        emailConstraints));
      if (validEmail) {
        nextState = state.setIn(['form', 'fields', 'emailHasError'], false);
      } else {
        nextState = state.setIn(['form', 'fields', 'emailHasError'], true);
      }
      break;

    case ('apiKey'):
      const validApiKey = _.isUndefined(validate({
        apiKey: value
      },
        apiKeyConstraints));
      if (validApiKey) {
        nextState = state.setIn(['form', 'fields', 'apiKeyHasError'], false);
      } else {
        nextState = state.setIn(['form', 'fields', 'apiKeyHasError'], true);
      }
      break;

    default:
      break;
  }
  return nextState;
}
