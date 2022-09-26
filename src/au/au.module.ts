import { Module } from '@nestjs/common';
import { AuService } from './au.service';
import { PrismaClient } from '@prisma/client';
@Module({
  providers: [AuService, PrismaClient],
  exports: [AuService],
})
export class AuModule {}
