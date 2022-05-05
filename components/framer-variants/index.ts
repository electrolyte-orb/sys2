import type { Variants } from 'framer-motion';
const navVariant: Variants = {
   hidden: {
      height: 0,
      transition: {
         duration: 0.3,
         easings: 'backInOut',
         when: 'afterChildren',
      },
   },
   visible: {
      height: 'calc(100vh - 64px)',
      transition: {
         easings: 'backInOut',
         staggerChildren: 0.2,
         when: 'beforeChildren',
      },
   },
};
const navItemVariant: Variants = {
   hidden: {
      x: 100,
      opacity: 0,
      transition: {
         duration: 0.1,
      },
   },
   visible: {
      x: 0,
      opacity: 1,
      transition: {
         easings: 'easeOut',
      },
   },
};
export { navVariant, navItemVariant };
