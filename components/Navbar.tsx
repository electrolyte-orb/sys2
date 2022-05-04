import { useRouter } from 'next/router';
import { Navlist, Navlogo, NavItem, NavContainer } from './';
import { useEffect, useState } from 'react';

export default function Navbar() {
   const { events } = useRouter();
   const [menuOpen, setMenuOpen] = useState(false); // for mobile devices
   useEffect(() => {
      events.on('routeChangeComplete', () => {
         setMenuOpen(false);
      });
   });

   return (
      <NavContainer>
         <Navlogo>
            <span className="font-bold text-xl">
               Sy<span className="text-red-400">s</span>2
            </span>
         </Navlogo>

         <Navlist setMenuOpen={setMenuOpen} menuOpen={menuOpen}>
            <NavItem link="/">Home</NavItem>
            <NavItem link="/downloads">Downloads</NavItem>
            <NavItem link="/blogs">Blogs</NavItem>
         </Navlist>
      </NavContainer>
   );
}
