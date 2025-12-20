import { BunyanLoggerAdapter } from './logger/bunyan-logger.adapter';
import { bunyanLogger } from './logger/bunyan.logger';

export const logger = new BunyanLoggerAdapter(bunyanLogger);
