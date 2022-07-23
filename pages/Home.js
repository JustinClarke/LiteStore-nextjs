import Head from 'next/head'

import Header from './layout/Header'
import Footer from './layout/Footer'

function Home() {
	return (
		<div>
			<Head>
				<title>Home | LiteStore</title>
				<meta name="description" content="LiteStore" />
			</Head>
			<Header />
			<Footer />
		</div>
	)
}

export default Home