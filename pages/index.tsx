import Head from 'next/head';
function Home() {
	return (
		<>
			<Head>
				<title>Ampere</title>
			</Head>
			<section>
				<h1 className="text-6xl font-bold text-black text-center m-12 leading-snug tracking-tighter">
					Let your limits <br />
					be left <span>undefined</span>.
				</h1>
			</section>
		</>
	);
}

export default Home;
