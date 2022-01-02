import Link from 'next/link';
import { motion } from 'framer-motion';
import { navItemVariant } from './framer-variants';
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
		<motion.li variants={navItemVariant}>
			<Link href={link}>
				<a
					className={
						'uppercase text-xs p-2 hover:text-blue-400 transition-colors select-none cursor-pointer py-2 block' +
						(isActivePage ? ' text-white' : '')
					}
				>
					{children}
				</a>
			</Link>
		</motion.li>
	);
}
