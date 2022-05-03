import Link from 'next/link';
import { Container } from 'components';
import { GetServerSideProps } from 'next';
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
         <h1 className="font-bold text-3xl">
            Here what&apos;s going inside <br /> from insiders.
         </h1>
         <ul className="my-4 space-y-2">
            {allFiles.map((blog) => (
               <li key={blog} className="text-blue-600 underline">
                  <Link href={'/blogs/' + blog}>{blog}</Link>
               </li>
            ))}
            {allDirs.map((blogGroup) => (
               <li key={blogGroup} className="text-blue-600 hover:underline">
                  <FolderIcon className="h-5 inline" /> {blogGroup}
               </li>
            ))}
         </ul>
      </Container>
   );
}
