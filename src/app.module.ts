import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from './config/config.module';
import { AppController } from './app.controller';
import path from 'path';

const modulePath = path.resolve(__dirname, './configure');

@Module({
  imports: [DatabaseModule, ConfigModule.register({ path: modulePath })],
  controllers: [AppController],
  providers: [], //服务必须要放在提供者里面，不放在这里面的话，当控制器进行使用到这个服务的时候，不能进行自动依赖注入(找不到这个模块)，会报错
})
export class AppModule {}
