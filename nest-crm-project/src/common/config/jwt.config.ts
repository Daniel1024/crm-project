import { registerAs } from '@nestjs/config';
import { JwtModuleOptions } from '@nestjs/jwt';

export const jwtConfig = registerAs('jwt', (): JwtModuleOptions => ({
  secret: process.env.JWT_SECRET_KEY || 'rzxlszyykpbgqcflzxsqcysyhljt',
  signOptions: {
    expiresIn: process.env.JWT_EXPIRES_IN || '3600s',
  },
}));
