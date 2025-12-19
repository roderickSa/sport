import 'dotenv/config';
import { AppConfig } from './app-config';

const conf: AppConfig = {
  server: {
    port: process.env.PORT ?? '8080',
    timeout: Number(process.env.SERVER_TIMEOUT ?? 60000),
  },
  endpoints: {
    apiFootball: {
      url: 'https://apiv3.apifootball.com',
      timeout: 20000,
      apiKey: process.env.API_FOOTBALL_KEY,
    },
  },
}

export default conf;
