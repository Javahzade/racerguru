import axios, {
  AxiosInstance,
  AxiosPromise,
  InternalAxiosRequestConfig,
  AxiosRequestConfig,
} from 'axios';
import {Endpoints} from 'utils/endpoints';

const setTokenInterceptors = (instance: AxiosInstance): void => {
  instance.interceptors.request.use(
    (config: InternalAxiosRequestConfig<AxiosRequestConfig>) => {
      return config;
    },
    error => {
      return Promise.reject(error);
    },
  );
};

export class Api {
  static instance: Api;

  axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      timeout: 30000,
      baseURL: Endpoints.BaseURL,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    setTokenInterceptors(this.axiosInstance);
  }

  static getInstance(): Api {
    if (!Api.instance) {
      Api.instance = new Api();
    }
    return Api.instance;
  }

  static getAxios(): AxiosInstance {
    return Api.getInstance().axiosInstance;
  }

  static request<T = unknown>(config: AxiosRequestConfig): AxiosPromise<T> {
    return Api.getAxios().request(config);
  }
}
