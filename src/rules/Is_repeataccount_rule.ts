import { PrismaClient } from '@prisma/client';
import {
  ValidatorConstraintInterface,
  ValidatorConstraint,
} from 'class-validator';

const Prisma = new PrismaClient();

@ValidatorConstraint()
export class IsRepeatAccount implements ValidatorConstraintInterface {
  async validate(value: string) {
    let flag = true;
    const res = await Prisma.user.findFirst({
      where: {
        account: value,
      },
    });

    if (res) {
      flag = false;
    }

    return flag;
  }
}
