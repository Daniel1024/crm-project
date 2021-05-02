import { registerAs } from '@nestjs/config';
import { JwtConfig } from '@interfaces/config.interface';

export const jwtConfig = registerAs('jwt', (): JwtConfig => ({
  secret: process.env.JWT_SECRET || 'top_secret_key'
}));
