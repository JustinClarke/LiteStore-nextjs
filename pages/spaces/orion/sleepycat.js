import Head from 'next/head'
import Link from 'next/link'

import Header from '../../layout/Header'
import Footer from '../../layout/Footer'

import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade, A11y, Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const sleepycat = '/images/stores/orion/sleepycat/sleepycat.webp'
const sleepycatInterior = '/images/stores/orion/sleepycat/sleepycat2.webp'
const sleepycatInterior1 = '/images/stores/orion/sleepycat/sleepycat3.webp'

export default function Sleepycat() {
    return (
        <div>
            <Head>
                <title>SleepyCat | LiteStore</title>
				<meta name="description" content="SleepyCat | LiteStore" />
				<meta name="twitter:title" content="SleepyCat | LiteStore" />
				<meta property="og:title" content="SleepyCat | LiteStore" />
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-Z1S5RX2Q4E"></script>
				<script>
					window.dataLayer = window.dataLayer || [];
					function gtag(){
						dataLayer.push(arguments)
					}
					gtag('js', new Date());

					gtag('config', 'G-Z1S5RX2Q4E');
				</script>
            </Head>
            <Header />
            <div className="px-5 md:px-40 pt-5 md:pt-10 pb-10 bg-light-white">
                <h1 data-aos="fade-up" className="text-6xl text-sleepycat-orange font-bold">SleepyCat <br className="invisible md:hidden" /> <span className="text-black font-light"> Flexi-Store,</span><span className="text-black font-semibold"> Orion Mall</span></h1>
                <h1 data-aos="fade-up" className="text-2xl font-light py-3">December '21 - March '22</h1>
                <div data-aos="fade" className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
                    <div className="flex col-span-2">
                        <Swiper
                            modules={[Navigation, Pagination, A11y, EffectFade, Autoplay]}
                            effect="fade"
                            slidesPerView={1}
                            autoplay={true}
                            pagination={{ clickable: true }}
                        >
                            <SwiperSlide>
                                <img
                                    className="rounded-lg"
                                    src={sleepycat}
                                    alt="SleepyCat" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    className="rounded-lg"
                                    src={sleepycatInterior}
                                    alt="SleepyCat" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    className="rounded-lg"
                                    src={sleepycatInterior1}
                                    alt="SleepyCat" />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="flex col-span-1 justify-left text-justify">
                        <div className="grid grid-cols-1 gap-6">
                            <div data-aos="fade-up">
                                <h1 className="text-4xl font-semibold pb-1">About</h1>
                                <p className="font-light">SleepyCat marked their first ever foray into an offline store with LiteStore this December in Bangalore!</p>
                                <p className="font-light pt-2">With a chic, sleep themed experience centre, SleepyCat has brought the perfect sleep education to the hundreds of customers walking through their doors.</p>
                                <p className="font-light pt-2">With a pillow bar to rest your head and a sleep station to try out the different materials in each product, customers find it hard to leave the store!</p>
                                <div className="grid grid-cols-2 gap-6 pt-5 text-lg font-light">
                                    <div className="text-left">
                                        <h1 className="text-4xl font-semibold pb-1">700+</h1>
                                        <p className="leading-5">New Customers educated about SleepyCat</p>
                                    </div>
                                    <div>
                                        <h1 className="text-4xl font-semibold pb-1">1st</h1>
                                        <p className="leading-5">Exclusive offline store</p>
                                    </div>
                                </div>
                                <div className="flex pt-8">
                                    <a className="inline-flex text-white bg-purple border-0 py-3 px-6 focus:outline-none hover:bg-darker-purple active:bg-black rounded text-lg transition ease-in-out delay-10 duration-200 hover:-translate-y-1 hover:scale-110" href="https://sleepycat.in" target="_blank" rel="noreferrer">
                                        <span className="pr-3">Online Store</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}