import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Container, Navbar, Notice } from '../components';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Container>
			<Notice />
			<Navbar />
			<Component {...pageProps} />
		</Container>
	);
}

export default MyApp;
