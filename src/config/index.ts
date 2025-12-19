import { AppConfig } from './app-config';

export function getConfig(env: string): AppConfig {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const config = require(`./${env.toLowerCase()}`) as { default: AppConfig };
  
  return config.default;
}
