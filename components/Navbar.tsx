import { useRouter } from 'next/router';
import {
   MenuAlt4Icon as MenuIcon,
   XIcon as CloseIcon,
} from '@heroicons/react/outline';
import { Navlist, Navlogo, NavItem, NavContainer } from './';
import { useEffect, useState } from 'react';

export default function Navbar() {
   const { route, events } = useRouter();
   const [menuOpen, setMenuOpen] = useState(false); // for mobile devices

   useEffect(() => {
      events.on('routeChangeComplete', () => {
         setMenuOpen(false);
      });
   }, []);

   return (
      <NavContainer>
         <Navlogo>
            <span className="font-bold text-xl">
               Sy<span className="text-red-400">s</span>2
            </span>
         </Navlogo>

         <button
            className="text-white py-1 px-2 inline-block lg:hidden z-10"
            onClick={() => setMenuOpen(!menuOpen)}
         >
            {menuOpen ? (
               <CloseIcon className="h-5" />
            ) : (
               <MenuIcon className="h-5" />
            )}
         </button>

         <Navlist setMenuOpen={setMenuOpen} menuOpen={menuOpen}>
            <NavItem isActivePage={route.endsWith('/')} link="/">
               Home
            </NavItem>
            <NavItem
               isActivePage={route.endsWith('downloads')}
               link="/downloads"
            >
               Downloads
            </NavItem>
            <NavItem isActivePage={route.endsWith('blogs')} link="/blogs">
               Blogs
            </NavItem>

            <NavItem isActivePage={route.endsWith('guides')} link="/">
               Guides
            </NavItem>
         </Navlist>
      </NavContainer>
   );
}
