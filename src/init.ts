import http from 'node:http';
import 'dotenv/config';
import { getEnvironment } from './utils/env';
import { logger } from './utils/logger';
import { BootstrapAppConfig } from './bootstrap/app-config';

function normalizePort(portArg: string): boolean | number {
  const parsed = parseInt(portArg, 10);
  return parsed > 0 ? parsed : false;
}

function onError(error: unknown) {
  logger.error('#UNHANDLED ERROR:', error);
}

export async function init(server: http.Server) {
  try {
    const config = BootstrapAppConfig.get();
    const env = getEnvironment();
    const port = normalizePort(config.server.port);

    server.on('error', onError);
    server.on('listening', () => {
      logger.info({ env, port }, 'Server running');
    });

    server.setTimeout(config.server.timeout);

    process.on('uncaughtException', onError);
    process.on('unhandledRejection', onError);

    server.listen(port);
  } catch (error) {
    logger.error(error);
    process.exit(1);
  }
}
