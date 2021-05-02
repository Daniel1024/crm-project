import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { json, urlencoded } from 'express';
import * as helmet from 'helmet';

import { AppConfig } from '@common/interfaces';
import { tableLogRoutes } from '@common/helpers';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const appConfig = configService.get<AppConfig>('app');

  // app.useGlobalFilters(new AllExceptionsFilter(config));
  // app.useGlobalInterceptors(new TransformInterceptor());

  app.use(helmet());
  app.enableCors();
  app.use(json());
  app.use(urlencoded({ extended: false }));

  await app.listen(appConfig.port);

  if (appConfig.showLogs) {
    tableLogRoutes(app.getHttpServer(), appConfig);
  }
}

bootstrap();
