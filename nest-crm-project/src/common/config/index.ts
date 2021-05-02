import { JwtModuleAsyncOptions } from '@nestjs/jwt';
import { ConfigModuleOptions } from '@nestjs/config/dist/interfaces';

import { AppConfigService, ProvidersModule } from '@common/providers';
import { databaseConfig } from './database.config';
import { jwtConfig } from './jwt.config';
import { appConfig } from './app.config';

export const configModuleOptions: ConfigModuleOptions = {
  isGlobal: true,
  load: [
    appConfig,
    databaseConfig,
    jwtConfig,
  ],
};

export const jwtModuleAsyncOptions: JwtModuleAsyncOptions = {
  imports: [ProvidersModule],
  useFactory: (config: AppConfigService) => config.jwt,
  inject: [AppConfigService]
}
