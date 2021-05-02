import { registerAs } from '@nestjs/config';

import { AppConfig, ENV } from '@common/interfaces';

export const appConfig = registerAs('app', (): AppConfig => ({
  env: process.env.NODE_ENV as ENV  || 'development',
  showLogs: process.env.APP_LOGS === 'true',
  port: Number(process.env.APP_PORT || 3333)
}));
