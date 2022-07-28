import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Header from '../layout/Header'
import Footer from '../layout/Footer'

export default function index() {
    return (
        <div>
            <Head>
                <title>FAQs | LiteStore</title>
                <meta name="description" content="LiteStore" />
            </Head>
            <Header />
            <h1 className="px-5 md:px-40 py-5 md:py-10 text-6xl font-semibold">FAQs</h1>
            <div>
                {accordionData.map(({ title, content }) => (
                    <Accordion title={title} content={content} />
                ))}
            </div>
            <Footer />
        </div>
    )
}