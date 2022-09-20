import { DatabaseService } from './database.service';
import { Controller, Get } from '@nestjs/common';

@Controller()
export class DatabaseController {
  constructor(private readonly databaseService: DatabaseService) {}

  @Get('connect')
  handleConnect(): string {
    return this.databaseService.connect();
  }
}
