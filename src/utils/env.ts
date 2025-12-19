export enum Env {
  LOCAL = 'local',
  PRODUCTION = 'production',
}

export class EnvUtil {
  private static instance: EnvUtil;
  private readonly appName: string;
  private readonly environment: Env;

  private constructor() {
    this.appName = process.env.npm_package_name || 'unknown';
    this.environment = this.resolveEnvironment();
  }

  public static getInstance(): EnvUtil {
    if (!EnvUtil.instance) {
      EnvUtil.instance = new EnvUtil();
    }
    return EnvUtil.instance;
  }

  private resolveEnvironment(): Env {
    const nodeEnv = process.env.NODE_ENV?.toUpperCase();
    
    if (nodeEnv && nodeEnv in Env) {
      return Env[nodeEnv as keyof typeof Env];
    }
    
    return Env.LOCAL;
  }

  public getEnvironment(): Env {
    return this.environment;
  }

  public getAppName(): string {
    return this.appName;
  }

  public isProduction(): boolean {
    return this.environment === Env.PRODUCTION;
  }

  public isLocal(): boolean {
    return this.environment === Env.LOCAL;
  }

  public getInfo() {
    return {
      appName: this.appName,
      environment: this.environment,
      nodeEnv: process.env.NODE_ENV || 'development',
      isProduction: this.isProduction(),
      isLocal: this.isLocal(),
    };
  }
}

export const getEnvironment = () => EnvUtil.getInstance().getEnvironment();
export const getAppName = () => EnvUtil.getInstance().getAppName();
export const isProduction = () => EnvUtil.getInstance().isProduction();
export const isLocal = () => EnvUtil.getInstance().isLocal();
export const getEnvInfo = () => EnvUtil.getInstance().getInfo();
