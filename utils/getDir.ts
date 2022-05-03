import fs from 'node:fs/promises';

export async function getFiles(path: string) {
   const fileList = await fs.readdir(path, {
      encoding: 'utf-8',
      withFileTypes: true,
   });
   return fileList
      .filter((dirnet) => dirnet.isFile())
      .map((dirnet) => dirnet.name);
}

export async function getDirs(path: string) {
   const fileList = await fs.readdir(path, {
      encoding: 'utf-8',
      withFileTypes: true,
   });
   return fileList
      .filter((dirnet) => dirnet.isDirectory())
      .map((dirnet) => dirnet.name);
}
