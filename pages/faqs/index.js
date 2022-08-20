import Head from 'next/head'
import Link from 'next/link'

import { Header, Footer } from '../layout'

export default function index() {
    return (
        <div>
            <Head>
                <title>FAQs | LiteStore</title>
                <meta name="og:title" content="LiteStore" />
            </Head>
            <Header />
            <h1 data-aos="fade-up" className="px-5 md:px-40 pt-10 md:pt-20 text-6xl font-semibold">FAQs</h1>

            <div>
                <section className="text-gray-600 body-font">
                    <div className="px-5 md:px-40 py-5 lg:py-36 mx-auto">
                        <div className="flex flex-wrap -m-4 text-center">
                            <Link href="/faqs/general">
                                <a className="p-4 md:w-1/4 sm:w-1/2 w-full hover:scale-110 transition ease-in-out duration-500">
                                    <div data-aos="fade-up">
                                        <div className="border-2 border-gray-200 px-4 py-10 rounded-lg">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="text-purple w-12 h-12 mb-8 inline-block" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <h2 className="title-font font-medium text-3xl text-gray-900">General</h2>
                                        </div>
                                    </div>
                                </a>
                            </Link>
                            <Link href="/faqs/landowners">
                                <a className="p-4 md:w-1/4 sm:w-1/2 w-full hover:scale-110 transition ease-in-out duration-500">
                                    <div data-aos="fade-up">
                                        <div className="border-2 border-gray-200 px-4 py-10 rounded-lg">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="text-purple w-12 h-12 mb-8 inline-block" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                            </svg>
                                            <h2 className="title-font font-medium text-3xl text-gray-900">Landowners</h2>
                                        </div>
                                    </div>
                                </a>
                            </Link>

                            <Link href="/faqs/brands">
                                <a className="p-4 md:w-1/4 sm:w-1/2 w-full hover:scale-110 transition ease-in-out duration-500">
                                    <div data-aos="fade-up">
                                        <div className="border-2 border-gray-200 px-4 py-10 rounded-lg">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="text-purple w-12 h-12 mb-8 inline-block" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                            </svg>
                                            <h2 className="title-font font-medium text-3xl text-gray-900">Brands</h2>
                                        </div>
                                    </div>
                                </a>
                            </Link>

                            <Link href="/faqs/services">
                                <a className="p-4 md:w-1/4 sm:w-1/2 w-full hover:scale-110 transition ease-in-out duration-500">
                                    <div data-aos="fade-up">
                                        <div className="border-2 border-gray-200 px-4 py-10 rounded-lg">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="text-purple w-12 h-12 mb-8 inline-block" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                            </svg>
                                            <h2 className="title-font font-medium text-3xl text-gray-900">Services</h2>
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        </div>
                    </div>
                </section>

            </div>
            <Footer />
        </div>
    )
}