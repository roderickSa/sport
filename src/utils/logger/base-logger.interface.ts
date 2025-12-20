import { BaseLogDto } from './base-log.dto';
import { ErrorLogDto } from './error-log.dto';

export interface BaseLogger {
  debug(dto: BaseLogDto): void;
  info(dto: BaseLogDto): void;
  warn(dto: BaseLogDto): void;
  error(dto: ErrorLogDto): void;
}
