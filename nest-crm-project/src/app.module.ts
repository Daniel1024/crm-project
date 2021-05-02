import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { config } from '@config/index';
import { AuthModule } from '@src/auth/auth.module';
import { ApiConfigService } from '@src/providers/api-config/api-config.service';
import { UsersModule } from '@src/users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: config,
    }),
    AuthModule,
    UsersModule
  ],
  controllers: [],
  providers: [ApiConfigService],
})
export class AppModule { }
