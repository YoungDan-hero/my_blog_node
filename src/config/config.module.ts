import { DynamicModule, Module } from '@nestjs/common';
import { ConfigService } from './config.service';

@Module({
  providers: [ConfigService],
  exports: [ConfigService],
})
export class ConfigModule {
  static register(options: { path: string }): DynamicModule {
    return {
      module: ConfigModule,
      // methods 1
      // providers: [
      //   {
      //     provide: ConfigService,
      //     useFactory() {
      //       return new ConfigService(options);
      //     },
      //   },
      // ],

      // methods 2
      providers: [
        {
          provide: 'CONFIG_OPTIONS',
          useValue: options,
        },
      ],
    };
  }
}
