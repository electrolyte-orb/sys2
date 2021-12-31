interface ContainerProps {
	children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
	return (
		<div className="bg-gray-100 flow-root min-h-screen leading-normal">
			{children}
		</div>
	);
}
