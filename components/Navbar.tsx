import { Navlist, Navlogo, NavItem, NavContainer } from './';
export default function Navbar() {
	return (
		<NavContainer>
			<Navlogo>
				<span className="font-light tracking-widest">⋰ TREC_</span>
				<span className="uppercase font-light ml-2"></span>
			</Navlogo>
			<Navlist>
				<NavItem>Home</NavItem>
				<NavItem>Downloads</NavItem>
				<NavItem>Redeem</NavItem>
				<NavItem>RedShift</NavItem>
			</Navlist>
		</NavContainer>
	);
}
// ⋱ ⋯ ⋮
