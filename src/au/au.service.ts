import { PrismaClient } from '@prisma/client';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuService {
  constructor(private readonly Prisma: PrismaClient) {}

  async register(data: { account: string; password: string }) {
    await this.Prisma.user.create({
      data: {
        account: data.account,
        password: data.password,
      },
    });

    return { code: 0, msg: '注册成功' };
  }
}
