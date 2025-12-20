import { BaseLogDto } from './base-log.dto';

export interface ErrorLogDto extends BaseLogDto {
  err: unknown;
}
