import keyMirror from 'keyMirror';

const loginTypes = keyMirror({
  FILLING_FORM: null,
  ON_FORM_FIELD_CHANGE: null,

  REQUEST_LOGIN: null,
  LOGIN_SUCCESS: null,
  LOGIN_FAILURE: null
});

export default loginTypes;
