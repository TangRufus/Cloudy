import axios from 'axios';

export default class AxiosCloudflare {

  constructor(email, apiKey) {
    this.config = {
      baseURL: 'https://api.cloudflare.com/client/v4/',
      headers: {
        'X-Auth-Key': apiKey,
        'X-Auth-Email': email
      },
      timeout: 5000
    };
  }

  zones() {
    return axios.get('/zones', this.config);
  }
}