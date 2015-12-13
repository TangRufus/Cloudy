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
    case loginTypes.FORM_FIELD_CHANGE:
      const { field, value } = action;
      return handleFormFieldChange(state, field, value);

    case loginTypes.FORM_REQUEST:
      return state.set('isFetching', true);

    case loginTypes.FORM_SUCCESS:
      return state.set('isFetching', false);

    case loginTypes.FORM_FAILURE:
      return state.set('isFetching', false)
                  .setIn(['form', 'error'], action.error);

    default:
      return state;
  }
}
