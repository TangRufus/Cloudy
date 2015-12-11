import { Record } from 'immutable';
import loginTypes from '../../constants/loginTypes';

const Form = new Record({
  disabled: false,
  error: null,
  isValid: false,
  fields: new Record({
    email: '',
    emailHasError: false,
    apiKey: '',
    apiKeyHasError: false
  })()
});

const InitialState = new Record({
  form: new Form,
  isFetching: false,
  status: loginTypes.FILLING_FORM
});

export default InitialState;
