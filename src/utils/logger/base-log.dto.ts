export interface BaseLogDto {
  event: string;
  msg: string;
  data?: unknown;
  req?: unknown;
  res?: unknown;
}
