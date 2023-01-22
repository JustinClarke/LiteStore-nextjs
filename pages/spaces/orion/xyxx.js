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

const xyxx = '/spaces/orion/xyxx/xyxx.webp'
const xyxx1 = '/spaces/orion/xyxx/xyxx1.webp'
const xyxx2 = '/spaces/orion/xyxx/xyxx2.webp'
const xyxx3 = '/spaces/orion/xyxx/xyxx3.webp'
const xyxx4 = '/spaces/orion/xyxx/xyxx4.webp'
const xyxx5 = '/spaces/orion/xyxx/xyxx5.webp'
const xyxx6 = '/spaces/orion/xyxx/xyxx6.webp'

export default function mensxp() {
    return (
        <div>
            <Head>
                <title>XY | XX | LiteStore</title>
                <meta name="og:title" content="XY | XX | LiteStore" />
                <meta name="twitter:title" content="XY | XX | LiteStore" />
                <meta property="og:title" content="XY | XX | LiteStore" />
            </Head>
            <Header />
            <div className="px-5 md:px-40 pt-5 md:pt-10 pb-10 bg-light-white">
                <h1 data-aos="fade-up" className="text-6xl font-bold pb-2">XY | XX <br className="invisible md:hidden" /><span className="text-black font-light"> Flexi-Store,</span><span className="text-black font-semibold"> Orion Mall</span> </h1>
                {/* <h1 data-aos="fade-up" className="text-2xl font-light py-3">November '21</h1> */}
                <div data-aos="fade" className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
                    <div className="flex col-span-2">
                        <Swiper
                            modules={[Navigation, Pagination, A11y, EffectFade, Autoplay]}
                            effect="fade"
                            slidesPerView={1}
                            autoplay={true}
                        // pagination={{ clickable: true }}
                        >
                            <SwiperSlide>
                                <img
                                    className="rounded-lg"
                                    src={xyxx}
                                    alt="XY | XX" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    className="rounded-lg"
                                    src={xyxx1}
                                    alt="XY | XX" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    className="rounded-lg"
                                    src={xyxx2}
                                    alt="XY | XX" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    className="rounded-lg"
                                    src={xyxx3}
                                    alt="XY | XX" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    className="rounded-lg"
                                    src={xyxx4}
                                    alt="XY | XX" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    className="rounded-lg"
                                    src={xyxx5}
                                    alt="XY | XX" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    className="rounded-lg"
                                    src={xyxx6}
                                    alt="XY | XX" />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="flex col-span-1 justify-left text-justify">
                        <div className="grid grid-cols-1 gap-6">
                            <div data-aos="fade-up">
                                <h1 className="text-4xl font-semibold pb-1">About</h1>
                                <p className="font-light">
                                    XY | XX is a market-leading brand in the men's loungewear and athleisure category. Their incredible range of products has received a very warm response from customers.
                                </p>
                                <p className="font-light pt-2">
                                    The Flexi-Store at Orion Mall marks their first offline experience center in South India.
                                </p>
                                <div className="flex pt-8">
                                    <a className="inline-flex text-white bg-purple border-0 py-3 px-6 focus:outline-none hover:bg-darker-purple active:bg-black rounded text-lg transition ease-in-out delay-10 duration-200 hover:-translate-y-1 hover:scale-110" href="http://xyxxcrew.com" target="_blank" rel="noreferrer">
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