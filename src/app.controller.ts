import { ConfigService } from './config/config.service';
import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  constructor(private readonly config: ConfigService) {}

  @Get()
  handleGet(): Record<string, any> {
    return this.config.get('app.name');
  }
}
