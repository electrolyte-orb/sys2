import { useRouter } from 'next/router';
import Image from 'next/image';
import { Navlist, Navlogo, NavItem, NavContainer } from './';
import { useEffect, useState } from 'react';
import logo from '../public/black-hole.png';

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
            <div className="h-8">
               <Image src={logo} width={32} height={32} />
            </div>
            <span className="ml-2 tracking-wide font-bold">SYS 2</span>
         </Navlogo>

         <Navlist setMenuOpen={setMenuOpen} menuOpen={menuOpen}>
            <NavItem link="/">Home</NavItem>
            <NavItem link="/downloads">Downloads</NavItem>
            <NavItem link="/docs">Documentation</NavItem>
            <NavItem link="/blogs">Blogs</NavItem>
         </Navlist>
      </NavContainer>
   );
}
