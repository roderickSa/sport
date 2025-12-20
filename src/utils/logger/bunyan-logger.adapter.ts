import * as bunyan from 'bunyan';
import { BaseLogger } from './base-logger.interface';
import { BaseLogDto } from './base-log.dto';
import { ErrorLogDto } from './error-log.dto';

type BunyanLogger = ReturnType<typeof bunyan.createLogger>;

export class BunyanLoggerAdapter implements BaseLogger {
  constructor(private readonly logger: BunyanLogger) {}

  debug(dto: BaseLogDto): void {
    this.logger.debug(this.toLogObject(dto));
  }

  info(dto: BaseLogDto): void {
    this.logger.info(this.toLogObject(dto));
  }

  warn(dto: BaseLogDto): void {
    this.logger.warn(this.toLogObject(dto));
  }

  error(dto: ErrorLogDto): void {
    this.logger.error({
      ...this.toLogObject(dto),
      err: dto.err,
    });
  }

  private toLogObject(dto: BaseLogDto) {
    return {
      event: dto.event,
      msg: dto.msg,
      data: dto.data,
      req: dto.req,
      res: dto.res,
    };
  }
}
