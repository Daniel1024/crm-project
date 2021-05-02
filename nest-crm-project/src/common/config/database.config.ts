import { registerAs } from '@nestjs/config';

import { DatabaseConfig } from '@common/interfaces';

export const databaseConfig = registerAs('database', (): DatabaseConfig => ({
  host: process.env.DATABASE_HOST || 'localhost',
  port: Number(process.env.DATABASE_PORT || 3306),
  username: process.env.DATABASE_USERNAME || 'felipe',
  password: process.env.DATABASE_PASSWORD || 'secret',
  database: process.env.DATABASE_NAME || 'crm',
}));
