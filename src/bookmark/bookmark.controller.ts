import { BookmarkService } from './bookmark.service';
import { AddBookmark } from '../dto/addbookmark.dto';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('api')
export class BookmarkController {
  constructor(private readonly bookmark: BookmarkService) {}
  @Get('bookmark')
  async getBookmark(): Promise<
    Array<{ img_src: string; label: string; link: string }>
  > {
    return this.bookmark.getBookmarkList();
  }

  @Post('bookmark')
  async addBookmark(@Body() data: AddBookmark): Promise<any> {
    return this.bookmark.addBookmark(data);
  }
}
