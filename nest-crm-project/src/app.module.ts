import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { config } from '@common/config';
import { AuthModule } from '@auth/auth.module';
import { UsersModule } from '@users/users.module';
import { ApiConfigService } from '@common/providers';

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
