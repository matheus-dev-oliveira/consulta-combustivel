import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {

  const APP_PORT = process.env.APP_PORT || 3000;

  const app = await NestFactory.create(AppModule, {
    logger: ['debug', 'error', 'fatal']
  });

  const config = new DocumentBuilder()
    .setTitle('Consulta Combustível')
    .setDescription('Description')
    .setVersion('v0.1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(APP_PORT);
}

bootstrap();
