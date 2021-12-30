interface NavlistProps {
	children: React.ReactNode;
}

export default function Navlist({ children }: NavlistProps) {
	return <ul className="flex space-x-4">{children}</ul>;
}
