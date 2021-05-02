import { JwtModuleAsyncOptions } from '@nestjs/jwt';
import { TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
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
  useFactory: ({ jwt }: AppConfigService) => ({ ...jwt }),
  inject: [AppConfigService],
};

export const typeOrmModuleAsyncOptions = (dirname: string): TypeOrmModuleAsyncOptions => ({
  imports: [ProvidersModule],
  useFactory: ({ database }: AppConfigService) => ({
    ...database,
    type: 'mysql',
    entities: [`${dirname}/**/*.entity{.ts,.js}`],
    autoLoadEntities: true,
    synchronize: true,
    logging: true,
    logger: 'file',
  }),
  inject: [AppConfigService],
});
