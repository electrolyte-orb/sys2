import { motion, AnimatePresence } from 'framer-motion';
import { navVariant } from './framer-variants';
import { Dispatch, SetStateAction } from 'react';
interface NavlistProps {
	children: React.ReactNode;
	menuOpen: boolean;
	setMenuOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Navlist({
	children,
	menuOpen,
	setMenuOpen,
}: NavlistProps) {
	return (
		<>
			<AnimatePresence>
				{menuOpen && (
					<>
						<motion.ul
							variants={navVariant}
							initial="hidden"
							animate="visible"
							exit="hidden"
							className={
								'lg:hidden z-10 fixed left-0 w-screen top-[59.5px] overflow-hidden rounded-b-3xl'
							}
						>
							<motion.div
								transition={{ staggerChildren: 2 }}
								className="bg-gray-900 bg-opacity-90 backdrop-filter backdrop-blur-sm p-2 divide-y-[0.5px] divide-gray-600 shadow-2xl"
							>
								{children}
								<div className="lg:hidden text-center pt-4">
									<span className="inline-block bg-gray-600 rounded-full w-1/3 h-1"></span>
								</div>
							</motion.div>
						</motion.ul>
						<div
							onClick={() => setMenuOpen(!menuOpen)}
							className="z-0 w-screen h-screen bg-none fixed top-0 left-0 lg:hidden"
						></div>
					</>
				)}
			</AnimatePresence>
		</>
	);
}
