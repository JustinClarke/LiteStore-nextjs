import Head from 'next/head'
import Link from 'next/link'

import Header from '../layout/Header'
import Footer from '../layout/Footer'

const blog1 = '/blog/cheetos.webp'
const blog2 = '/blog/blog2.webp'

export default function index() {
    return (
        <div>
            <Head>
                <title>Blog | LiteStore</title>
                <meta name="description" content="Blog | LiteStore" />
                <meta name="twitter:title" content="Blog | LiteStore" />
                <meta property="og:title" content="Blog | LiteStore" />

            </Head>
            <Header />
            <h1 data-aos="fade-up" data-aos-delay="100" className="px-5 md:px-40 pt-5 md:pt-10 text-6xl font-semibold">Blog</h1>
            <section className="px-5 md:px-40 py-10 text-gray-600 body-font">
                <div className="">
                    <div className="flex flex-wrap gap-6">
                        <div data-aos="fade-up" data-aos-delay="100" className="py-4 px-4 lg:w-1/3 border-2 border-gray-200 border-opacity-60 rounded-lg">
                            <div className="pb-4">
                                <img className="rounded-lg" src={blog1} alt="blog" />
                            </div>
                            <div className="h-full flex items-start">
                                <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                                    <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">May</span>
                                    <span className="font-medium text-lg text-gray-800 title-font leading-none">19</span>
                                </div>
                                <div className="flex-grow pl-6">
                                    <h2 className="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">The Future of Retail:</h2>
                                    <h1 className="title-font text-xl font-medium text-gray-900 mb-3">More Than Just Space - I</h1>
                                    <p className="leading-relaxed mb-5">Looking beyond sales: <br />Read about the Cheetos museum and the laboratory-like pop-up serving free vitamin supplements to junk food lovers.</p>
                                    <div className="flex">
                                        <Link href="/blog/the-future-of-retail-1">
                                            <a className="inline-flex text-base text-black border-purple border-2 py-2 px-4 focus:outline-none hover:text-white hover:bg-darker-purple active:bg-black rounded transition ease-in-out delay-10 duration-200 hover:-translate-y-1 hover:scale-110" target="_blank" rel="noreferrer">
                                                <span className="pr-3">Read More</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="200" className="py-4 px-4 lg:w-1/3 border-2 border-gray-200 border-opacity-60 rounded-lg">
                            <div className="pb-4">
                                <img className="rounded-lg" src={blog2} alt="blog" />
                            </div>
                            <div className="h-full flex items-start">
                                <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                                    <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">May</span>
                                    <span className="font-medium text-lg text-gray-800 title-font leading-none">19</span>
                                </div>
                                <div className="flex-grow pl-6">
                                    <h2 className="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">The Future of Retail:</h2>
                                    <h1 className="title-font text-xl font-medium text-gray-900 mb-3">More Than Just Space - II</h1>
                                    <p className="leading-relaxed mb-5">In this post, we write about how the theory of paradox of choice is deciding the look of the new age stores along with why stores far away from civilization makes for great stories.</p>
                                    <div className="flex">
                                        <Link href="/blog/the-future-of-retail-2    ">
                                            <a className="inline-flex text-base text-black border-purple border-2 py-2 px-4 focus:outline-none hover:text-white hover:bg-darker-purple active:bg-black rounded transition ease-in-out delay-10 duration-200 hover:-translate-y-1 hover:scale-110" target="_blank" rel="noreferrer">
                                                <span className="pr-3">Read More</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}