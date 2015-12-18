import { Record } from 'immutable';
import menuTypes from '../../constants/menuTypes';

const InitialState = new Record({
  isOpen: false
});
const initialState = new InitialState;


export default function menuReducer(state = initialState, action) {
  if (!(state instanceof InitialState)) return initialState.mergeDeep(state);

  switch (action.type) {
    case menuTypes.OPEN:
      return state.set('isOpen', true);

    case menuTypes.CLOSE:
      return state.set('isOpen', false);

    case menuTypes.ON_CHANGE:
      if (action.isOpen === state.isOpen) {
        return state;
      }
      return state.set('isOpen', action.isOpen);

    case menuTypes.TOGGLE:
      return state.set('isOpen', !state.isOpen);

    default:
      return state;
  }
}
