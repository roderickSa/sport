import * as bunyan from 'bunyan';
import { LoggerOptions } from 'bunyan';

type BunyanLogger = ReturnType<typeof bunyan.createLogger>;

class LoggerBuilder {
  private readonly options: LoggerOptions;

  constructor(name: string = 'app-logger') {
    this.options = {
      name,
      level: (process.env.LOG_LEVEL as bunyan.LogLevel) || 'info',
      serializers: bunyan.stdSerializers,
    };
  }

  public build(): BunyanLogger {
    return bunyan.createLogger(this.options);
  }
}

export const bunyanLogger = new LoggerBuilder('mi-servicio').build();
