import type { Variants } from 'framer-motion';
const navVariant: Variants = {
	hidden: {
		height: 0,
		transition: {
			duration: 0.3,
			easings: 'linear',
			when: 'afterChildren',
		},
	},
	visible: {
		height: 'auto',
		transition: {
			easings: 'linear',
			staggerChildren: 0.1,
			when: 'beforeChildren',
		},
	},
};
const navItemVariant: Variants = {
	hidden: {
		x: 100,
		opacity: 0,
		transition: {
			duration: 0.1,
		},
	},
	visible: {
		x: 0,
		opacity: 1,
		transition: {
			type: 'spring',
			mass: 0.75,
		},
	},
};
export { navVariant, navItemVariant };
