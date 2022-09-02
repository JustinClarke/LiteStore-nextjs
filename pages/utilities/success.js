import Head from 'next/head'

import { Header, Footer } from '../layout'

export default function contact() {

    return (
        <div>
            <Head>
                <title>Contact | LiteStore</title>
                <meta name="og:title" content="LiteStore" />
            </Head>
            <Header />
            <h1 className="px-5 md:px-40 py-5 md:py-10 text-center text-6xl font-semibold">Message Sent!</h1>
            <Footer />
        </div>
    )
}