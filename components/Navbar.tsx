import { useRouter } from 'next/router';
import { Navlist, Navlogo, NavItem, NavContainer } from './';

export default function Navbar() {
	const router = useRouter();
	return (
		<NavContainer>
			<Navlogo>
				<span className="font-light tracking-widest">⋰ TREC_</span>
				<span className="uppercase font-light ml-2"></span>
			</Navlogo>
			<Navlist>
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
