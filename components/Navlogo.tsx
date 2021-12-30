interface NavlogoProps {
	children?: React.ReactNode;
}
export default function Navlogo({ children }: NavlogoProps) {
	return <div className="text-white text-base">{children}</div>;
}
