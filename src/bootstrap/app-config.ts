import { AppConfig } from '../config/app-config';
import { getConfig } from '../config';
import { getEnvironment } from '../utils/env';

export class BootstrapAppConfig {
  private static appConfig: AppConfig;

  static get(): AppConfig {
    if (!this.appConfig) {
      const env = getEnvironment();
      const config = getConfig(env);
      this.appConfig = config;
    }
    return this.appConfig;
  }

  static register(appConfig: AppConfig) {
    this.appConfig = appConfig;
  }
}
