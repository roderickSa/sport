import { AppConfig } from './app-config';
//eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  server: {
    port: process.env.PORT,
    timeout: process.env.SERVER_TIMEOUT ?? 60000,
  },
  logger: {
    console: false,
    name: 'nodejs-template-back',
    logstash: {
      appName: '@project_name@',
      host: 'logstash.justo.it',
      port: 5000,
      level: 'info',
    },
    httpClientConfig: { useLogger: true },
    requestLogger: {
      excludeRequestUri: ['/health'],
    },
  },
  endpoints: {
    externalResources: {
      url: 'https://mock-api.mx',
      timeout: 500,
    },
  }
} as AppConfig;
