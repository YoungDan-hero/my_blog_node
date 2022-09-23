import { ValidateFilterFilter } from './validate-filter.filter';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import Validate from './validate';

async function bootstrap() {
  (BigInt.prototype as any).toJSON = function () {
    return this.toString();
  };
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new Validate());
  app.useGlobalFilters(new ValidateFilterFilter());
  await app.listen(3000);
}
bootstrap();
