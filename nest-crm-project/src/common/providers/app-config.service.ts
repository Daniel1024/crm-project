import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModuleOptions } from '@nestjs/jwt';

import { AppConfig, DatabaseConfig } from '@common/interfaces';

@Injectable()
export class AppConfigService {
  app: AppConfig;
  database: DatabaseConfig;
  jwt: JwtModuleOptions;

  constructor(readonly config: ConfigService) {
    this.app = config.get<AppConfig>('app');
    this.database = config.get<DatabaseConfig>('database');
    this.jwt = config.get<JwtModuleOptions>('jwt');
  }
}
