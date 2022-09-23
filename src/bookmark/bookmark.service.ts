import { PrismaClient } from '@prisma/client';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BookmarkService {
  constructor(private readonly Prisma: PrismaClient) {}
  async getBookmarkList(): Promise<
    Array<{ img_src: string; label: string; link: string }>
  > {
    return await this.Prisma.bookmark.findMany();
  }

  async addBookmark(data): Promise<any> {
    await this.Prisma.bookmark.create({
      data: {
        img_src: data.img_src,
        label: data.label,
        link: data.link,
        userId: 1,
      },
    });

    return { code: 0, msg: '添加成功' };
  }
}
