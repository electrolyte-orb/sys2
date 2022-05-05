import Head from 'next/head';
import { Container } from 'components';
import Link from 'next/link';

export default function Home() {
   return (
      <>
         <Head>
            <title>Supercharge React.js with SYS2 | Sys 2 Homepage</title>
         </Head>
         <Container>
            <section className="m-6">
               <h1 className="font-black text-4xl lg:text-9xl leading-tight tracking-tight text-white">
                  <span className="bg-gradient-to-br from-green-500 to-blue-400 bg-clip-text text-transparent">
                     Supercharge
                  </span>{' '}
                  ReactJS with
                  <br />
                  SYS 2
               </h1>
               <p className="text-lg my-4">
                  Set of technical guides with best dos and don&apos;ts.
               </p>
               <div className="grid grid-cols-2 gap-2 mt-4 lg:max-w-md">
                  <Link href="/blogs">
                     <button className="px-3 py-3 bg-blue-600 rounded-lg shadow-lg focus:ring-4 focus:ring-blue-800 transition text-white font-medium">
                        Get Started
                     </button>
                  </Link>
                  <Link href="/docs">
                     <button className="px-3 py-3 rounded-lg focus:ring-4 focus:ring-gray-600 transition text-white font-medium">
                        Docs
                     </button>
                  </Link>
               </div>
            </section>
         </Container>
      </>
   );
}
