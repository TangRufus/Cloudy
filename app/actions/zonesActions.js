// import _ from 'lodash';
// import AxiosCloudflare from '../util/axiosCloudflare';
import zonesTypes from '../constants/zonesTypes';

export function fetchZonesSuccess(data) {
  return {
    type: zonesTypes.FETCH_ZONES_SUCCESS,
    data
  };
}
