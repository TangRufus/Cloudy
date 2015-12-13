import axios from 'axios';
import _ from 'lodash';


axios.interceptors.response.use(
  (response) => { return response.data.result; }
);

export default class AxiosCloudflare {
  constructor(email, apiKey, config = {}) {
    const defaultConfig = {
      baseURL: 'https://api.cloudflare.com/client/v4/',
      headers: {
        'X-Auth-Key': apiKey,
        'X-Auth-Email': email
      },
      timeout: 5000
    };
    this.config = _.merge({}, defaultConfig, config);
  }

  zones(config = {}) {
    const zonesConfig = _.merge({}, this.config, config);
    return axios.get('/zones', zonesConfig);
  }
}
