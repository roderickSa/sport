import bunyan, { LoggerOptions } from 'bunyan';

class LoggerBuilder {
  private readonly options: LoggerOptions;

  constructor(name: string = 'app-logger') {
    this.options = {
      name,
      level: (process.env.LOG_LEVEL as bunyan.LogLevel) || 'info',
      serializers: bunyan.stdSerializers,
    };
  }

  public build(): bunyan {
    return bunyan.createLogger(this.options);
  }
}

const loggerBuilder = new LoggerBuilder('mi-servicio');//TODO: cambiar nombre
export const logger = loggerBuilder.build();

export { LoggerBuilder };
