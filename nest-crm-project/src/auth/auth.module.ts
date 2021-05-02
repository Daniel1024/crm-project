import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ConfigService } from '@nestjs/config';

import { ApiConfigService } from '@common/providers';
import { JwtConfig } from '@common/interfaces';
import { UsersModule } from '@users/users.module';
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';
import { AuthController } from './auth.controller';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        secret: config.get<JwtConfig>('jwt').secret,
        signOptions: { expiresIn: '60m' },
      }),
    }),
    UsersModule,
  ],
  providers: [
    ApiConfigService,
    AuthService,
    LocalStrategy,
    JwtStrategy,
  ],
  controllers: [AuthController],
})
export class AuthModule { }
