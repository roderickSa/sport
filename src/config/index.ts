import { AppConfig } from './app-config';

export function getConfig(env: string): AppConfig {
  return require(`./${env.toLowerCase()}`).default as AppConfig;
}
