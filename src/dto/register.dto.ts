import { IsNotEmpty, Validate } from 'class-validator';
import { IsConfirmed } from '../rules/is_confirm.rule';
import { IsRepeatAccount } from '../rules/Is_repeataccount_rule';
export class Register {
  @IsNotEmpty({ message: '账号不能为空' })
  @Validate(IsRepeatAccount, { message: '账号已被使用' })
  account: string;
  @IsNotEmpty({ message: '密码不能为空' })
  password: string;
  @Validate(IsConfirmed, { message: '两次密码输入不一致' })
  confirm_password: string;
}
