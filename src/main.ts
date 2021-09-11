import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);

  const appPort = configService.get('APP_PORT');

  const reactOrigin = configService.get('REACT_ORIGIN');

  app.setGlobalPrefix('/api');

  app.enableCors({
    origin: reactOrigin,
    credentials: true,
  });

  await app.listen(appPort);
}
bootstrap();
