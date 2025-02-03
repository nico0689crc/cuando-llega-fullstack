import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { useContainer } from 'class-validator';
import { envs } from './core/config/envs';

async function bootstrap() {
  const logger = new Logger('CuandoLLegaAPI');

  const app = await NestFactory.create(AppModule);

  app.enableCors();

  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  logger.log(`Cuando LLega API running on port ${envs.backendContainerPort}`);

  await app.listen(envs.backendContainerPort);
}
bootstrap();
