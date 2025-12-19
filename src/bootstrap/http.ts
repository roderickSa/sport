import express, { Application } from 'express';
import cors from 'cors';
import http from 'node:http';
import getServer from '../utils/server';
import { StadiumRouter } from '../modules/stadium/infrastructure/routes/stadium';

export function bootstrapHttpServer(
  stadiumRouter: StadiumRouter,
) {
  const app: Application = express();

  app.use(cors());
  app.use('/api/stadium', stadiumRouter.router);

  const server = getServer({
    api: app,
    apiPath: '',
  });

  return {
    server: http.createServer(server),
  };
}
