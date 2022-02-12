import Head from 'next/head';
import { ExternalLinkIcon } from '@heroicons/react/outline';
import Link from 'next/link';
export default function Home() {
   return (
      <>
         <Head>
            <title>
               Multi Services Platform for developers. | Sys2 Homepage
            </title>
         </Head>
         <section>
            <h1 className="text-4xl lg:text-6xl font-bold text-black text-center m-12 leading-snug tracking-tighter">
               Open Sourced<span className="text-red-400">.</span>
               <br />
               Scalable
               <span className="text-red-400 relative">
                  .
                  <span className="absolute left-0 top-0 text-xs tracking-normal text-gray-400">
                     (Vertically)
                  </span>
               </span>
               <br />
               Performant<span className="text-red-400">.</span>
            </h1>
         </section>
         <section className="mt-4 mx-4">
            <h2 className="text-2xl font-medium text-gray-400 tracking-tighter">
               Multi Open Services Platform for web.{' '}
               <span className="text-gray-600">
                  Uses Next.js
                  <Link href="https://nextjs.org">
                     <sup>
                        <ExternalLinkIcon className="h-4 inline" />
                     </sup>
                  </Link>
               </span>{' '}
               for optimized web experience and{' '}
               <span className="text-gray-600">multi-level Caching.</span>
            </h2>
         </section>
      </>
   );
}
