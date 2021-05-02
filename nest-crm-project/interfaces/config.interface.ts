export type ENV = 'dev' | 'production' | 'docker';

export interface AppConfig {
  env: ENV;
  showLogs: boolean;
  port: number;
}

export interface DatabaseConfig {
  host: string;
  port: number;
}
