import loginTypes from '../../constants/loginTypes';
import fieldValidation from './fieldValidation';
import formValidation from './formValidation';
import InitialState from './initialState';

const initialState = new InitialState;

function handleFormFieldChange(state, field, value) {
  const nextState = state.setIn(['form', 'fields', field], value)
                         .setIn(['form', 'error'], null);
  return formValidation(fieldValidation(nextState, field, value));
}

export default function loginReducer(state = initialState, action) {
  if (!(state instanceof InitialState)) return initialState.mergeDeep(state);

  switch (action.type) {
    case loginTypes.ON_FORM_FIELD_CHANGE:
      const { field, value } = action.payload;
      return handleFormFieldChange(state, field, value);

    case loginTypes.REQUEST_LOGIN:
      return state.set('isFetching', true);

    case loginTypes.LOGIN_SUCCESS:
      return state.set('isFetching', false);

      //
      // case LOGIN_FAILURE:
      //   return state.setIn(['form', 'isFetching'], false)
      //     .setIn(['form', 'error'], action.payload);
    //
    //   case SET_STATE:
    //   var form = JSON.parse(action.payload).account.form;
    //
    //   var next = state.setIn(['form','state'], form.state)
    //   .setIn(['form','disabled'], form.disabled)
    //   .setIn(['form','error'], form.error)
    //   .setIn(['form','isValid'], form.isValid)
    //   .setIn(['form','isFetching'], form.isFetching)
    //   .setIn(['form','fields','email'], form.fields.email)
    //   .setIn(['form','fields','emailHasError'], form.fields.emailHasError)
    //   .setIn(['form','fields','apiKey'], form.fields.apiKey)
    //   .setIn(['form','fields','apiKeyHasError'], form.fields.apiKeyHasError)
    //
    //   return next;
    //
    // }

    default:
      return state;
  }
}
