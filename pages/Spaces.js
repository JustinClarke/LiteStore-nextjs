import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import orion from '../public/images/stores/orion/orion.jpg'
import garuda from '../public/images/stores/garuda/garuda.webp'

import Header from './layout/Header'
import Footer from './layout/Footer'

export default function spaces() {
    return (
        <div>
            <Head>
                <title>Spaces | LiteStore</title>
                <meta name="description" content="LiteStore" />
            </Head>
            <Header />
            <div className="px-5 md:px-40 pt-5 pb-5 font-light bg-light-white">
                <h1 className="text-4xl font-medium">Flagship Spaces</h1>
                <h2 className="pt-2 text-xl font-light">Operated by LiteStore<sup>®</sup></h2>
            </div>

            <div className="px-5 md:px-40 pb-10 bg-light-white">
                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6">
                    <div className="flex justify-left">
                        <div className="rounded-lg shadow-lg bg-white max-w-sm">
                            <Link href="/spaces/orion">
                                <a>
                                    <Image
                                        src={orion}
                                        className="rounded-t-lg hover:scale-125 transition ease-in-out duration-1000"
                                        alt="Orion Mall" />
                                </a>
                            </Link>
                            <div className="p-6">
                                <Link href="/spaces/orion">
                                    <a className="text-purple text-3xl text-left font-semibold mb-2 hover:underline">
                                        Orion Mall,
                                        <br />
                                        <span className="text-black">Bangalore</span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-left">
                        <div className="rounded-lg shadow-lg bg-white max-w-sm">
                            <Link href="/spaces/garuda">
                                <a href="#">
                                    <Image
                                        src={garuda}
                                        className="rounded-t-lg hover:scale-125 transition ease-in-out duration-1000"
                                        alt="Garuda Mall" />
                                </a>
                            </Link>
                            <div className="p-6">
                                <Link href="/spaces/garuda">
                                    <a className="text-purple text-3xl text-left font-semibold mb-2 hover:underline">
                                        Garuda Mall,
                                        <br />
                                        <span className="text-black">Bangalore</span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}