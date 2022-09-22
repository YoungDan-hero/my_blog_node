// import { PrismaClient } from '@prisma/client';
// const prisma = new PrismaClient();

// const bookMark = [
//   {
//     img_src: 'http://120.78.78.16/ruanyifeng.png',
//     label: '阮一峰的博客',
//     link: 'https://www.ruanyifeng.com/',
//   },
//   {
//     img_src:
//       'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/6c61ae65d1c41ae8221a670fa32d05aa.svg',
//     label: '掘金社区',
//     link: 'https://juejin.cn/',
//   },
//   {
//     img_src: 'http://120.78.78.16/kuke.png',
//     label: '酷壳',
//     link: 'https://coolshell.cn/',
//   },
//   {
//     img_src: 'http://120.78.78.16/godly.png',
//     label: '好看的设计',
//     link: 'https://godly.website/',
//   },
//   {
//     img_src: 'http://120.78.78.16/d.png',
//     label: '大前端面试宝典',
//     link: 'https://lucifer.ren/fe-interview/#/',
//   },
//   {
//     img_src: 'http://120.78.78.16/rex.png',
//     label: '正则',
//     link: 'https://regex101.com/',
//   },
//   {
//     img_src: 'http://120.78.78.16/typescript.png',
//     label: '深入理解ts',
//     link: 'https://jkchao.github.io/typescript-book-chinese/typings/lib.html#%E4%BF%AE%E6%94%B9%E5%8E%9F%E5%A7%8B%E7%B1%BB%E5%9E%8B',
//   },
//   {
//     img_src: 'http://120.78.78.16/beisaier.png',
//     label: '生成贝塞尔曲线',
//     link: 'https://cubic-bezier.com/',
//   },
//   {
//     img_src: 'http://120.78.78.16/vant.png',
//     label: 'vant组件库',
//     link: 'https://vant-ui.github.io/vant/#/zh-CN',
//   },
//   {
//     img_src: 'http://120.78.78.16/tinyfwb.png',
//     label: 'tiny富文本',
//     link: 'https://www.tiny.cloud/',
//   },
// ];

// async function run() {
//   for (let key = 1; key < bookMark.length; key++) {
//     await prisma.bookmark.create({
//       data: {
//         img_src: bookMark[key].img_src,
//         link: bookMark[key].link,
//         label: bookMark[key].label,
//         userId: 1,
//       },
//     });
//   }
// }

// run();

// import { PrismaClient } from '@prisma/client';
// const prisma = new PrismaClient();

// const skillsOptions = [
//   {
//     img_src: 'http://120.78.78.16/javascript.png',
//     label: 'javascript',
//     description: '好吧，我说我精通JS可能太嚣张了，但是我确实还挺熟练的。',
//   },
//   {
//     img_src: 'http://120.78.78.16/html.png',
//     label: 'html',
//     description: '超文本标记语言，前端必备，你懂的。',
//   },
//   {
//     img_src: 'http://120.78.78.16/css.png',
//     label: 'css',
//     description: '这个可太难了，要把它学精通的话需要不短的时间的积累。',
//   },
//   {
//     img_src: 'http://120.78.78.16/typescript.png',
//     label: 'typescript',
//     description: '最近的几个项目都是用它写的，ts确实是现在前端必备的技能。',
//   },
//   {
//     img_src: 'http://120.78.78.16/vue.png',
//     label: 'vue',
//     description:
//       '三大框架就对你最熟悉，写的项目也最多，怎么说呢。vue3.0出来后真的还挺香的。',
//   },
//   {
//     img_src: 'http://120.78.78.16/react.png',
//     label: 'react',
//     description: '大厂必备的框架，写过项目，有点意思。',
//   },
//   {
//     img_src: 'http://120.78.78.16/angular.png',
//     label: 'angular',
//     description: '搬砖！！搬砖！！搬砖！！达咩！',
//   },
// ];

// async function run() {
//   for (let key = 1; key < skillsOptions.length; key++) {
//     await prisma.skill.create({
//       data: {
//         img_src: skillsOptions[key].img_src,
//         description: skillsOptions[key].description,
//         label: skillsOptions[key].label,
//         userId: 1,
//       },
//     });
//   }
// }

// run();

// import { PrismaClient } from '@prisma/client';
// const prisma = new PrismaClient();

// const toolsOptions = [
//   {
//     img_src: 'http://120.78.78.16/vscode.png',
//     label: 'vscode',
//     link: 'https://code.visualstudio.com/',
//   },
//   {
//     img_src: 'http://120.78.78.16/webstorm.png',
//     label: 'webstorm',
//     link: 'https://www.jetbrains.com/webstorm/',
//   },
//   {
//     img_src: 'http://120.78.78.16/hbuilderx.png',
//     label: 'hbuilderx',
//     link: 'https://www.dcloud.io/hbuilderx.html',
//   },
//   {
//     img_src: 'http://120.78.78.16/sourceTree.png',
//     label: 'sourceTree',
//     link: 'https://www.sourcetreeapp.com/',
//   },
//   {
//     img_src: 'http://120.78.78.16/docker.png',
//     label: 'docker',
//     link: 'https://www.docker.com/',
//   },
//   {
//     img_src: 'http://120.78.78.16/filezilla.png',
//     label: 'filezilla',
//     link: 'https://www.filezilla.cn/',
//   },
//   {
//     img_src: 'http://120.78.78.16/postman.png',
//     label: 'postman',
//     link: 'https://www.postman.com/',
//   },
// ];

// async function run() {
//   for (let key = 1; key < toolsOptions.length; key++) {
//     await prisma.tool.create({
//       data: {
//         img_src: toolsOptions[key].img_src,
//         link: toolsOptions[key].link,
//         label: toolsOptions[key].label,
//         userId: 1,
//       },
//     });
//   }
// }

// run();
