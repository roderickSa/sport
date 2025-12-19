import express, { Application } from 'express';
import cors from 'cors';
import http from 'node:http';
import getServer from '../utils/server';
import { StadiumRouter } from '../modules/stadium/infrastructure/routes/stadium';
import { ApiFootballRouter } from '../modules/stadium/infrastructure/routes/api-football';

export function bootstrapHttpServer(
  stadiumRouter: StadiumRouter,
  apiFootballRouter: ApiFootballRouter,
) {
  const app: Application = express();

  app.use(cors());
  app.use('/api/stadium', stadiumRouter.router);
  app.use('/api/api-football', apiFootballRouter.router);

  const server = getServer({
    api: app,
    apiPath: '',
  });

  return {
    server: http.createServer(server),
  };
}
