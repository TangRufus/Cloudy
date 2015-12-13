import keyMirror from 'keyMirror';

const loginTypes = keyMirror({
  FILLING_FORM: null,
  FORM_FIELD_CHANGE: null,

  FORM_REQUEST: null,
  FORM_SUCCESS: null,
  FORM_FAILURE: null
});

export default loginTypes;
