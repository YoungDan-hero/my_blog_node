import { PrismaClient } from '@prisma/client';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('api')
export class BookmarkController {
  prisma: PrismaClient;
  constructor() {
    this.prisma = new PrismaClient();
  }

  @Get('bookmark')
  async getBookmark(): Promise<any> {
    const bookmark = await this.prisma.bookmark.findMany();
    return bookmark;
  }

  @Post('bookmark')
  async addBookmark(@Body() data: any): Promise<any> {
    await this.prisma.bookmark.create({
      data: {
        img_src: data.img_src,
        label: data.label,
        link: data.link,
        userId: 1,
      },
    });

    return { status: 200, msg: '创建成功' };
  }
}
