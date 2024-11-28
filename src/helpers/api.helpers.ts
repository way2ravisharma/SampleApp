import axios, {AxiosPromise} from 'axios';
import {timeOut} from '../constants/app.constants';
import {baseURL} from '../constants/url.constants';

const axiosCreate = {
  baseURL,
  timeout: timeOut,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': true,
  },
};

export const client = axios.create(axiosCreate);

export const getRequest = (url = '', options = {}): AxiosPromise => {
  const controller = new AbortController();
  const response = client({method: 'GET', url, ...options});
  controller.abort();
  return response;
};

export const postRequest = (
  url = '',
  data = {},
  options = {},
): AxiosPromise => {
  const controller = new AbortController();
  const response = client({method: 'POST', url, ...options, data});
  controller.abort();
  return response;
};

export const putRequest = (url = '', data = {}, options = {}): AxiosPromise => {
  const controller = new AbortController();
  const response = client({method: 'PUT', url, ...options, data});
  controller.abort();
  return response;
};

export const deleteRequest = (url = '', options = {}): AxiosPromise => {
  const controller = new AbortController();
  const response = client({method: 'DELETE', url, ...options});
  controller.abort();
  return response;
};
