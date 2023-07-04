import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ApiLog } from './middlewares/apiLog.middleware';
import {
  DocumentBuilder,
  SwaggerCustomOptions,
  SwaggerModule,
} from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  /* logs the api request */
  const appConfig = app.get(ConfigService);

  /* swagger config */
  const swaggerConfig = new DocumentBuilder()
    .setTitle('Permission example')
    .setDescription("The is permission api to test for the user's permissions")
    .setVersion('1.0')
    .addTag('permission')
    .addBearerAuth()
    .build();

  /* validation pipe as global */
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );

  /* setting global prefix */
  app.setGlobalPrefix = appConfig.get('app.globalPrefix');
  if (appConfig.get('app.app_env') === 'development') {
    app.use(ApiLog);
  }

  /* swagger document */
  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);

  /* adding some custom swagger options */
  const customOptions: SwaggerCustomOptions = {
    explorer: false,
    customSiteTitle: 'Permission API',
    swaggerOptions: {
      persistAuthorization: true,
    },
  };

  /* port number for app to listen */
  const port = +(appConfig.get('app.port') ?? 3000);

  /* swagger setup */
  SwaggerModule.setup('api-docs', app, swaggerDocument, customOptions);

  /* starting the server */
  await app.listen(port, () => {
    console.log(`listening to server at port ${port}`);
  });
}
bootstrap();
