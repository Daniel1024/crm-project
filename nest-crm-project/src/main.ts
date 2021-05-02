import { NestFactory } from '@nestjs/core';
import { json, urlencoded } from 'express';
import * as helmet from 'helmet';

import { AppConfigService } from '@common/providers';
import { setDefaultUser, tableLogRoutes } from '@common/helpers';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const appConfig = app.get(AppConfigService).app;

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
  await setDefaultUser();
}

bootstrap();
