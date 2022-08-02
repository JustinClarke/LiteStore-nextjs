import Head from 'next/head'

import Header from '../layout/Header'
import Footer from '../layout/Footer'

export default function contact() {

    return (
        <div>
            <Head>
                <title>Contact | LiteStore</title>
                <meta name="description" content="LiteStore" />
                <script async src="https://www.googletagmanager.com/gtag/js?id=UA-209054329-1"></script>
				<script>
					window.dataLayer = window.dataLayer || [];
					
					function gtag() {
						dataLayer.push(arguments)
					}
					gtag('js', new Date());
					gtag('config', 'UA-209054329-1');
				</script>
            </Head>
            <Header />
            <h1 className="px-5 md:px-40 py-5 md:py-10 text-center text-6xl font-semibold">Message Sent!</h1>
            <Footer />
        </div>
    )
}