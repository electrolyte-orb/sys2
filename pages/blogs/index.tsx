import Link from 'next/link';
import Head from 'next/head';
import { GetServerSideProps } from 'next';

import { Container } from 'components';
import { getFiles, getDirs } from 'utils/getDir';
import FolderIcon from '@heroicons/react/outline/FolderIcon';

export const getServerSideProps: GetServerSideProps = async () => {
   const allFiles = (await getFiles('./docs')).map((value) =>
      value.replace('.md', ''),
   );
   const allDirs = await getDirs('./docs');
   const props = { allFiles, allDirs };

   return { props };
};

export default function index({
   allFiles,
   allDirs,
}: {
   [key: string]: string[];
}) {
   return (
      <Container>
         <Head>
            <title>All Blogs</title>
         </Head>
         <section className="m-6">
            <h1 className="font-bold text-3xl text-white">
               Stay updated, always.
            </h1>
            <ul className="my-4 space-y-2">
               {allFiles.map((blog) => (
                  <li key={blog} className="text-sky-500 underline">
                     <Link href={'/blogs/' + blog}>{blog}</Link>
                  </li>
               ))}
               {allDirs.map((blogGroup) => (
                  <li key={blogGroup} className="text-sky-500 hover:underline">
                     <FolderIcon className="h-5 inline" /> {blogGroup}
                  </li>
               ))}
            </ul>
         </section>
      </Container>
   );
}
