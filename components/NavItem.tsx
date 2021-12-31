import Link from 'next/link';
interface NavItemProps {
	children: React.ReactNode;
	isActivePage?: boolean;
	link: string;
}
export default function NavItem({
	children,
	isActivePage,
	link,
}: NavItemProps) {
	return (
		<li>
			<Link href={link}>
				<a
					className={
						'uppercase text-xs p-2 hover:text-blue-400 transition-colors select-none cursor-pointer' +
						(isActivePage ? ' text-white' : '')
					}
				>
					{children}
				</a>
			</Link>
		</li>
	);
}
