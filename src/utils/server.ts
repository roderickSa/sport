import express, { Application } from 'express';
import cookieParser from 'cookie-parser';
import * as bodyParser from 'body-parser';
import { listEndpoints } from './list-endpoints';

interface ServerParams {
  api: Application;
  apiPath?: string;
}

/**
 * Configura y retorna la instancia del servidor Express.
 */
export default function getServer(params: ServerParams): Application {
  const { api, apiPath = '/api' } = params;
  const server = express();

  // Seguridad y Headers
  server.disable('x-powered-by');

  // Middlewares de parseo
  server.use(cookieParser());
  server.use(bodyParser.json({ limit: '15mb' }));
  server.use(bodyParser.urlencoded({ extended: true }));

  // Montaje de la API principal
  server.use(apiPath, api);

  // Utilidad para listar endpoints en consola
  listEndpoints(api, apiPath);

  return server;
}
