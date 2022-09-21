import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const toolsOptions = [
  {
    img_src: 'vscode',
    label: 'vscode',
    link: 'https://code.visualstudio.com/',
  },
  {
    img_src: 'webstorm',
    label: 'webstorm',
    link: 'https://www.jetbrains.com/webstorm/',
  },
  {
    img_src: 'hbuilderx',
    label: 'hbuilderx',
    link: 'https://www.dcloud.io/hbuilderx.html',
  },
  {
    img_src: 'sourceTree',
    label: 'sourceTree',
    link: 'https://www.sourcetreeapp.com/',
  },
  {
    img_src: 'docker',
    label: 'docker',
    link: 'https://www.docker.com/',
  },
  {
    img_src: 'filezilla',
    label: 'filezilla',
    link: 'https://www.filezilla.cn/',
  },
  {
    img_src: 'postman',
    label: 'postman',
    link: 'https://www.postman.com/',
  },
];

async function run() {
  for (let i = 0; i < toolsOptions.length; i++) {
    await prisma.tools.create({
      data: {
        img_src: toolsOptions[i].img_src,
        label: toolsOptions[i].label,
        link: toolsOptions[i].link,
      },
    });
  }
}

run();
