import { GetStaticPaths, GetStaticProps } from 'next';
import { marked } from 'marked';
import sanitizeHTML from 'sanitize-html';
import { Container } from 'components';
import matter from 'gray-matter';
import Head from 'next/head';
import { getFile } from 'utils/getFile';
import { getFiles } from 'utils/getDir';
interface BlogProps {
   text: string;
   name: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
   const allFiles = await getFiles('./docs');
   const allIDs = allFiles.map((value) => ({
      params: { id: value.replace('.md', '') },
   }));
   return {
      paths: allIDs,
      fallback: false,
   };
};
export const getStaticProps: GetStaticProps = async (context) => {
   const file = await getFile(context.params?.id);

   if (file === null) {
      return {
         notFound: true,
      };
   }
   const frontMatter = matter(file);
   const HTML = marked.parse(frontMatter.content);
   const sanitized_HTML = sanitizeHTML(HTML);

   const props: BlogProps = {
      text: sanitized_HTML,
      name: frontMatter.data.name,
   };

   return {
      props,
   };
};

export default function Blog({ name, text }: BlogProps) {
   return (
      <Container>
         <Head>
            <title>{name} - Sys2</title>
         </Head>
         <div
            className="prose"
            dangerouslySetInnerHTML={{
               __html: text,
            }}
         ></div>
      </Container>
   );
}
