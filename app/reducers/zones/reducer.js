// import { Map } from 'immutable';
import { normalize, Schema, arrayOf } from 'normalizr';
import zonesTypes from '../../constants/zonesTypes';

// const InitialState = new Map();
// const initialState = new InitialState;


const zone = new Schema('zones');

export default function zonesReducer(state = null, action) {
  // if (!(state instanceof InitialState)) return initialState.mergeDeep(state);

  switch (action.type) {
    case zonesTypes.FETCH_ZONES_SUCCESS:
      console.log('in fetch');
      const nor = normalize(action.data, { result: arrayOf(zone) });
      console.log('nor', nor);

      return state;

    default:
      return state;
  }
}
