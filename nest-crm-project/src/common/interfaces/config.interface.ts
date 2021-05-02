export type ENV = 'development' | 'production' | 'docker';

export interface AppConfig {
  env: ENV;
  showLogs: boolean;
  port: number;
}

export interface DatabaseConfig {
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
}
