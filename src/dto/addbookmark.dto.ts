import { IsNotEmpty } from 'class-validator';

export class AddBookmark {
  @IsNotEmpty({ message: '图片链接不能为空' })
  img_src: string;
  @IsNotEmpty({ message: '标签不能为空' })
  label: string;
  @IsNotEmpty({ message: '跳转链接不能为空' })
  link: string;
}
