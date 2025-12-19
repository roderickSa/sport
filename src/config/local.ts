import 'dotenv/config';
import { AppConfig } from './app-config';
//eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  server: {
    port: process.env.PORT ?? '8080',
    timeout: process.env.SERVER_TIMEOUT ?? 60000,
  },
  logger: {
    console: true,
    httpClientConfig: { useLogger: true },
    level: 'trace',
    name: 'nodejs-template-backend',
  },
  endpoints: {
    externalResources: {
      url: 'https://mock-api.mx',
      timeout: 500,
    },
  },
} as AppConfig;
