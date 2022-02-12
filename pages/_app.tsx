import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Container, Navbar, Notice } from '../components';

function MyApp({ Component, pageProps }: AppProps) {
   return (
      <>
         <Head>
            {!(process.env.NODE_ENV == 'development') && (
               <link
                  rel="stylesheet"
                  href="https://rsms.me/inter/inter.css"
                  id="font-file"
               />
            )}
         </Head>
         <Container>
            <Notice />
            <Navbar />
            <Component {...pageProps} />
         </Container>
      </>
   );
}

export default MyApp;
