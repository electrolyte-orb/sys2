import { useRouter } from 'next/router';
import {
	MenuAlt4Icon as MenuIcon,
	XIcon as CloseIcon,
} from '@heroicons/react/outline';
import { Navlist, Navlogo, NavItem, NavContainer } from './';
import { useState } from 'react';

export default function Navbar() {
	const router = useRouter();
	const [menuOpen, setMenuOpen] = useState(false); // for mobile devices
	return (
		<NavContainer>
			<Navlogo>
				<span className="font-light tracking-widest">⋰ TREC_</span>
				<span className="uppercase font-light ml-2"></span>
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
				<NavItem isActivePage={router.route.endsWith('/')} link="/">
					Home
				</NavItem>
				<NavItem
					isActivePage={router.route.endsWith('downloads')}
					link="/downloads"
				>
					Downloads
				</NavItem>
				<NavItem isActivePage={router.route.endsWith('blogs')} link="/blogs">
					Blogs
				</NavItem>

				<NavItem isActivePage={router.route.endsWith('guides')} link="/">
					Guides
				</NavItem>
			</Navlist>
		</NavContainer>
	);
}
// ⋱ ⋯ ⋮
