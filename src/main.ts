import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice({
    transport: Transport.TCP,
    options: { host:'0.0.0.0', port: process.env.PORT },
  });
  await app.startAllMicroservices();
  console.log('Store Service is runing on ' + process.env.PORT);
}
bootstrap();

