import fs from 'node:fs/promises';

export async function getFile(path: string | string[] | undefined) {
   let file: string | null;
   try {
      file = await fs.readFile(`./docs/${path}.md`, {
         encoding: 'utf-8',
      });
   } catch (error) {
      console.error(error);
      file = null;
   }
   return file;
}
