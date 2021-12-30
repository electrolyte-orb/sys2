import Head from 'next/head';
import { Navbar, Container } from '../components';
function Home() {
	return (
		<>
			<Head>
				<title>Hello world</title>
			</Head>
			<Container>
				<Navbar />
			</Container>
		</>
	);
}

export default Home;
