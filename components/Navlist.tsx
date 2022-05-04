import { motion, AnimatePresence } from 'framer-motion';
import { navVariant } from './framer-variants';
import { Dispatch, SetStateAction } from 'react';
import MenuIcon from '@heroicons/react/outline/MenuAlt4Icon';
import CloseIcon from '@heroicons/react/outline/XIcon';

interface NavlistProps {
   children: React.ReactNode;
   menuOpen: boolean;
   setMenuOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Navlist({
   children,
   menuOpen,
   setMenuOpen,
}: NavlistProps) {
   return (
      <>
         <button
            className="text-white py-1 px-2 inline-block md:hidden z-10"
            onClick={() => setMenuOpen(!menuOpen)}
         >
            {menuOpen ? (
               <CloseIcon className="h-5" />
            ) : (
               <MenuIcon className="h-5" />
            )}
         </button>
         <AnimatePresence>
            {menuOpen && (
               <>
                  <motion.div
                     variants={navVariant}
                     initial="hidden"
                     animate="visible"
                     exit="hidden"
                     className={
                        'md:hidden z-10 fixed left-0 w-full top-[59.5px] overflow-hidden shadow-2xl'
                     }
                  >
                     <motion.ul
                        transition={{ staggerChildren: 2 }}
                        className="bg-gray-700 p-2 shadow-2xl h-full"
                     >
                        {children}
                        <div className="text-center pt-4">
                           <span className="inline-block bg-gray-500 rounded-full w-1/4 h-1"></span>
                        </div>
                     </motion.ul>
                  </motion.div>
               </>
            )}
         </AnimatePresence>
         <div className="hidden md:block">
            <ul className="flex space-x-2">{children}</ul>
         </div>
      </>
   );
}
