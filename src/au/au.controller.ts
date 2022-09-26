import { Register } from './../dto/register.dto';
import { Body, Controller, Post } from '@nestjs/common';
import { AuService } from './au.service';

@Controller('api')
export class AuController {
  constructor(private readonly au: AuService) {}
  @Post('au/register')
  handleRegister(@Body() data: Register): Record<string, any> {
    return this.au.register(data);
  }
}
