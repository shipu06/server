import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.setGlobalPrefix('/api');
  // SwaggerSetup(app, { environment: 'development' });
  // const envService = app.get(EnvService);
  await app.listen(4000);
}
bootstrap();
