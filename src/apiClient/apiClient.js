import Axios from 'axios';
// import config from '../CritCore/Config/config';
import {
  isLoggedIn,
  getAuthorizationToken,
  removeAutohrizationToken,
} from '../services/localStorageServices';

// const BASE_URL = `${config.SERVER_HOST}:${config.SERVER_PORT}`;
const BASE_URL = `https://criticaldmg-api.herokuapp.com/`;
let client;

/**
 * returns an axios instance set up (config, interceptors and athorizatio header)
 */
export const getClient = () => {
  if (!client) {
    client = Axios.create({
      baseURL: BASE_URL,
      withCredentials: false,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    client.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        const { data } = error.response;
        if (
          data?.code === 401 &&
          data?.data?.name === 'TokenExpiredError'
        ) {
          removeAutohrizationToken();
        } else {
          return Promise.reject(error);
        }
      }
    );
  }

  const hasTokenSet = client.defaults.headers.Authorization;
  if (!hasTokenSet && isLoggedIn()) {
    client.defaults.headers.Authorization = getAuthorizationToken();
  }

  return client;
};
