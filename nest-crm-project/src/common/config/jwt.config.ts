import { registerAs } from '@nestjs/config';
import { JwtConfig } from '@common/interfaces';

export const jwtConfig = registerAs('jwt', (): JwtConfig => ({
  secret: process.env.JWT_SECRET || 'top_secret_key'
}));
