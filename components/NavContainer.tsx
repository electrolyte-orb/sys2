interface NavContainerProps {
	children: React.ReactNode;
}
export default function NavContainer({ children }: NavContainerProps) {
	return (
		<div className="text-sm bg-gray-900 px-6 py-4 text-gray-300 flex justify-between items-center">
			{children}
		</div>
	);
}
