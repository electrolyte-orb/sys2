import Link from 'next/link';
import { motion } from 'framer-motion';
import { navItemVariant } from './framer-variants';
import { useRouter } from 'next/router';
import parseURL from 'utils/parseURL';

interface NavItemProps {
   children: React.ReactNode;
   link: string;
}

export default function NavItem({ children, link }: NavItemProps) {
   const { asPath } = useRouter();
   let isActivePage = parseURL(asPath) === parseURL(link);

   return (
      <>
         <motion.li variants={navItemVariant}>
            <Link href={link}>
               <a
                  className={
                     'text-xl md:text-sm px-4 md:px-0 py-6 md:py-0 font-medium tracking-wide text-center transition-colors select-none cursor-pointer block' +
                     (isActivePage ? ' text-white' : '')
                  }
               >
                  <span className="px-1">{children}</span>
               </a>
            </Link>
         </motion.li>
      </>
   );
}
