import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = 5000;
  await app.listen(port,() => {
    console.log(`Port is Listening from ${port}`)
  });
}
bootstrap()
    .then()
    .catch(err => console.log(err))
