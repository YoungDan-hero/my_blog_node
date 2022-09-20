import { Injectable } from '@nestjs/common';
/* 
  告诉nest当前的service需要注入其他的服务使用
  当构造器中注入了其他的服务
  必须使用Injectable才能让nest去provider中找到对应的service处理
*/
@Injectable()
export class DatabaseService {
  connect() {
    return 'x';
  }
}
