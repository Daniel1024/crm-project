import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { configModuleOptions, typeOrmModuleAsyncOptions } from '@common/config';
import { AuthModule } from '@auth/auth.module';
import { UsersModule } from '@users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from '@user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot(configModuleOptions),
    TypeOrmModule.forRootAsync(typeOrmModuleAsyncOptions(__dirname)),
    AuthModule,
    UsersModule,
    UserModule
  ]
})
export class AppModule { }
