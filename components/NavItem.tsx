interface NavItemProps {
	children: React.ReactNode;
}

export default function NavItem({ children }: NavItemProps) {
	return (
		<li>
			<a
				href="#"
				className="uppercase text-xs p-2 hover:text-white transition-colors"
			>
				{children}
			</a>
		</li>
	);
}
