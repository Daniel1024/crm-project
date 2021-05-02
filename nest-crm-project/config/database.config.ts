import { registerAs } from '@nestjs/config';
import { DatabaseConfig } from '@interfaces';

export const databaseConfig = registerAs('database', (): DatabaseConfig => ({
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT || 3306)
}));
