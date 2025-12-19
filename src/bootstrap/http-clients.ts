import axios, { AxiosInstance } from 'axios';
import { AppConfig } from '../config/app-config';

export function createApiFootballHttpClient(config: AppConfig): AxiosInstance {
  const endpoint = config.endpoints.apiFootball;

  const client = axios.create({
    baseURL: endpoint.url,
    timeout: endpoint.timeout,
  });

  client.interceptors.request.use((axiosConfig) => {
    const params = (axiosConfig.params as Record<string, unknown>) || {};
    params['APIkey'] = endpoint.apiKey;
    axiosConfig.params = params;
    return axiosConfig;
  });

  return client;
}
