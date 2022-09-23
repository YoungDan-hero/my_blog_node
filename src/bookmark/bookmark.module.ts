import { PrismaClient } from '@prisma/client';
import { Module } from '@nestjs/common';
import { BookmarkService } from './bookmark.service';
import { BookmarkController } from './bookmark.controller';

@Module({
  providers: [BookmarkService, PrismaClient],
  controllers: [BookmarkController],
  exports: [BookmarkService],
})
export class BookmarkModule {}
