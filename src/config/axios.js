import axios from 'axios';
import Toast from 'react-native-toast-message';

import Store from '../redux/store';
import {logoutUserAction} from '../redux/slices/auth';
import {getItem, removeItem} from '../helpers/asyncStore';

const rootUrl = 'https://reqres.in/api/';

const handleSuccessResponse = response => response;

const handleErrorRequest = error => console.error(error);

const handleErrorResponse = async error => {
  if (error.response?.status === 401) {
    Toast.show({
      type: 'error',
      position: 'top',
      text2: 'Your session has expired. Please log in again.',
    });
    await removeItem('userAuth');
    Store.dispatch(logoutUserAction());
  } else {
    Toast.show({
      type: 'error',
      position: 'top',
      text2: error.message,
    });
  }
  return Promise.reject(error);
};

const registerResponseIntercept = () =>
  axios.interceptors.response.use(handleSuccessResponse, handleErrorResponse);

const registerRequestIntercept = () => {
  axios.interceptors.request.use(async request => {
    const config = await configureAxiosHeaders(request);
    config.baseURL = rootUrl;
    return config;
  }, handleErrorRequest);
};

export const configureAxiosHeaders = async request => {
  const authValue = await getItem('userAuth');
  const userAuthData = authValue && JSON.parse(authValue);
  if (userAuthData) {
    request.headers['x-auth-token'] = userAuthData.authToken;
    request.headers.Accept = 'application/json';
  }
  return request;
};

export const configureAxios = () => {
  registerRequestIntercept();
  registerResponseIntercept();
};
