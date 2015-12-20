import merge from 'lodash/object/merge';
import { normalize, arrayOf } from 'normalizr';
import zonesTypes from '../../constants/zonesTypes';
import { zoneSchema } from '../../constants/schemas';

const initialState = {};

export default function zonesReducer(state = initialState, action) {
  switch (action.type) {
    case zonesTypes.FETCH_ZONES_SUCCESS:
      const normalizedZones = normalize(action.data, { result: arrayOf(zoneSchema) });
      return merge({}, state, normalizedZones.entities.zones);

    default:
      return state;
  }
}
