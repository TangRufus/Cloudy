import validate from 'validate.js';
import _ from 'lodash';

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
      const validEmail = !_.isUndefined(validate({ from: value }, emailConstraints));
      nextState = state.setIn(['form', 'fields', 'emailHasError'], validEmail);
      break;

    case ('apiKey'):
      const validApiKey = !_.isUndefined(validate({ apiKey: value }, apiKeyConstraints));
      nextState = state.setIn(['form', 'fields', 'apiKeyHasError'], validApiKey);
      break;

    default:
      break;
  }
  return nextState;
}
