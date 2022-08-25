import { NestFactory } from '@nestjs/core';
import {ConfigService} from "@nestjs/config";
import {Logger, ValidationPipe} from "@nestjs/common";

import { AppModule } from './app.module';
import {SERVER_PORT} from "./config";
import generateTypeormConfigFile from "./script/generate-typeorm-config";


async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const config = app.get(ConfigService);
  const logger = new Logger('Bootstrap');
  const port = parseInt(config.get<string>(SERVER_PORT), 10) || 3000;

  // crea el archivo ormconfig.json
  generateTypeormConfigFile(config)

  app.useGlobalPipes(new ValidationPipe({
    transform: true,
  }))

  app.setGlobalPrefix('api/')

  await app.listen(port);
  logger.log(`Server is running at ${await app.getUrl()}`);
}
bootstrap();
