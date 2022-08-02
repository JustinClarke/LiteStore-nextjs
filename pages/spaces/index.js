import Head from 'next/head'
import Link from 'next/link'

import Header from '../layout/Header'
import Footer from '../layout/Footer'

const orion = '/images/stores/orion/orion.webp'
const garuda = '/images/stores/garuda/garuda.webp'
const lulu = '/images/stores/lulu/lulu.webp'

// store logos
const wowLogo = '../logos/trusted/wow.webp'
const tppLogo = '../logos/trusted/tpp.webp'
const sleepycatLogo = '../logos/trusted/sleepycat.webp'
const mensxpLogo = '../logos/trusted/mensxp.webp'
const vitroLogo = '../logos/trusted/vitro.webp'
const jblLogo = '../logos/trusted/jbl.webp'
// const zymratLogo = '../logos/trusted/zymrat.webp'
const frootleLogo = '../logos/trusted/frootle.webp'

export default function spaces() {
    return (
        <div>
            <Head>
                <title>Spaces | LiteStore</title>
                <meta name="description" content="Spaces | LiteStore" />
                <meta name="twitter:title" content="Spaces | LiteStore" />
                <meta property="og:title" content="Spaces | LiteStore" />Spaces
            </Head>
            <Header />
            <div className="px-5 md:px-40 lg:px-20 xl:px-40 pt-5 pb-5 font-light bg-light-white">
                <h1 data-aos="fade" className="text-4xl font-medium">Flagship Spaces</h1>
                <h2 data-aos="fade" className="pt-2 text-xl font-light">Operated by LiteStore<sup>®</sup></h2>
            </div>

            <div className="px-5 md:px-40 lg:px-20 xl:px-40 pb-10 bg-light-white">
                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6">
                    {/* Orion Mall */}
                    <div data-aos="fade" className="flex justify-left">
                        <Link href="/spaces/orion">
                            <a>
                                <div className="rounded-lg shadow-lg bg-white max-w-sm hover:scale-105 transition ease-in-out duration-500">
                                    <img
                                        src={orion}
                                        className="rounded-t-lg "
                                        alt="Orion Mall" />
                                    <div className="p-6">
                                        <p className="text-purple text-3xl text-left font-semibold mb-2 hover:underline">
                                            Orion Mall,
                                            <br />
                                            <span className="text-black">Bangalore</span>
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </Link>
                    </div>
                    <div data-aos="fade-up" className="flex justify-left">
                        <div className="grid grid-cols-2 grid-rows-2 gap-3">
                            <Link href="/spaces/orion/wow">
                                <a>
                                    <img
                                        className="rounded-lg hover:scale-105 transition ease-in-out duration-500"
                                        src={wowLogo}
                                        alt="Wow" />
                                </a>
                            </Link>
                            <Link href="/spaces/orion/thepantproject">
                                <a>
                                    <img
                                        className="rounded-lg hover:scale-105 transition ease-in-out duration-500"
                                        src={tppLogo}
                                        alt="The Pant Project" />
                                </a>
                            </Link>
                            <Link href="/spaces/orion/sleepycat">
                                <a>
                                    <img
                                        className="rounded-lg hover:scale-105 transition ease-in-out duration-500"
                                        src={sleepycatLogo}
                                        alt="SleepyCat" />
                                </a>
                            </Link>
                        </div>
                    </div>
                    {/* Garuda Mall */}
                    <div data-aos="fade" className="flex justify-left">
                        <Link href="/spaces/garuda">
                            <a>
                                <div className="rounded-lg shadow-lg bg-white max-w-sm hover:scale-105 transition ease-in-out duration-500">
                                    <img
                                        src={garuda}
                                        className="rounded-t-lg "
                                        alt="Garuda Mall" />
                                    <div className="p-6">
                                        <p className="text-purple text-3xl text-left font-semibold mb-2 hover:underline">
                                            Garuda Mall,
                                            <br />
                                            <span className="text-black">Bangalore</span>
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </Link>
                    </div>
                    <div data-aos="fade-up" className="flex justify-left">
                        <div className="grid grid-cols-2 grid-rows-1 gap-3">
                            <Link href="/spaces/garuda/mensxp">
                                <a>
                                    <img
                                        className="rounded-lg hover:scale-105 transition ease-in-out duration-500"
                                        src={mensxpLogo}
                                        alt="MensXP" />
                                </a>
                            </Link>
                            <Link href="/spaces/garuda/vitro">
                                <a>
                                    <img
                                        className="rounded-lg hover:scale-105 transition ease-in-out duration-500"
                                        src={vitroLogo}
                                        alt="Vitro Naturals" />
                                </a>
                            </Link>
                        </div>
                    </div>
                    {/* Lulu Mall */}
                    <div data-aos="fade" className="flex justify-left">
                        <Link href="/spaces/lulu">
                            <a>
                                <div className="rounded-lg shadow-lg bg-white max-w-sm hover:scale-105 transition ease-in-out duration-500">
                                    <img
                                        src={lulu}
                                        className="rounded-t-lg "
                                        alt="Lulu Mall" />
                                    <div className="p-6">
                                        <p className="text-purple text-3xl text-left font-semibold mb-2 hover:underline">
                                            Lulu Mall,
                                            <br />
                                            <span className="text-black">Bangalore</span>
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </Link>
                    </div>
                    <div data-aos="fade-up" className="flex justify-left">
                        <div className="grid grid-cols-2 grid-rows-1 gap-3">
                            <Link href="/spaces/garuda/mensxp">
                                <a>
                                    <img
                                        className="rounded-lg hover:scale-105 transition ease-in-out duration-500"
                                        src={jblLogo}
                                        alt="MensXP" />
                                </a>
                            </Link>
                            <Link href="/spaces/garuda/vitro">
                                <a>
                                    <img
                                        className="rounded-lg hover:scale-105 transition ease-in-out duration-500"
                                        src={frootleLogo}
                                        alt="Vitro Naturals" />
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
