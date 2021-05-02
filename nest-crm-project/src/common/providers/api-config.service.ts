import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { AppConfig, DatabaseConfig, JwtConfig } from '@common/interfaces';

@Injectable()
export class ApiConfigService {
  app: AppConfig;
  database: DatabaseConfig;
  jwt: JwtConfig;

  constructor(readonly config: ConfigService) {
    this.app = config.get<AppConfig>('app');
    this.database = config.get<DatabaseConfig>('database');
    this.jwt = config.get<JwtConfig>('jwt');
  }
}
