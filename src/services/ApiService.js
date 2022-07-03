import axios from 'axios';
import { getItem } from '@app/utilities/localStorageControl';

const API_ENDPOINT = import.meta.env.VITE_APP_API_ENDPOINT;

export const HttpClient = axios.create({
  baseURL: API_ENDPOINT,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${getItem('user')?.accessToken}`,
  },
});

class ApiService {
  static post(path, data = {}, optionalHeader = {}) {
    return HttpClient({
      method: 'POST',
      url: path,
      data,
      headers: optionalHeader,
    });
  }

  static delete(path, optionalHeader = {}) {
    return HttpClient({
      method: 'DELETE',
      url: path,
      headers: optionalHeader,
    });
  }

  static put(path, data = {}, optionalHeader = {}) {
    return HttpClient({
      method: 'PUT',
      url: path,
      data,
      headers: optionalHeader,
    });
  }

  static get(path, optionalHeader = {}) {
    return HttpClient({
      method: 'GET',
      url: path,
      headers: optionalHeader,
    });
  }
}

HttpClient.interceptors.request.use((config) => {
  const requestConfig = config;
  const { headers } = config;
  requestConfig.headers = {
    ...headers,
  };

  return requestConfig;
});

HttpClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const { response } = error;
    const originalRequest = error.config;
    if (response) {
      if (response.status === 500) {
        console.log(response);
      } else {
        return originalRequest;
      }
    }
    return Promise.reject(error);
  }
);

export default ApiService;
