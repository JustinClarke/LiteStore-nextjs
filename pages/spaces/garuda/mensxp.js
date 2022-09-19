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

const mensxp = '/spaces/garuda/mensxp/mensxp.webp'
const mensxpInterior = '/spaces/garuda/mensxp/mensxp1.webp'

export default function MensXP() {
    return (
        <div>
            <Head>
                <title>MensXP | LiteStore</title>
                <meta name="og:title" content="MensXP | LiteStore" />
                <meta name="twitter:title" content="MensXP | LiteStore" />
                <meta property="og:title" content="MensXP | LiteStore" />

            </Head>
            <Header />
            <div className="px-5 md:px-40 pt-5 md:pt-10 pb-10 bg-light-white">
                <h1 data-aos="fade-up" className="text-6xl text-mensxp-orange font-bold pb-2">MensXP <span className="text-black font-light"> Flexi-Store,</span><span className="text-black font-semibold"> Garuda Mall</span> </h1>
                <h1 data-aos="fade-up" className="text-2xl font-light py-3">March '22 - June '22</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
                    <div data-aos="fade" className="flex col-span-2">
                        <Swiper
                            modules={[Navigation, Pagination, A11y, EffectFade, Autoplay]}
                            effect="fade"
                            slidesPerView={1}
                            autoplay={true}
                        >
                            <SwiperSlide>
                                <img
                                    className="rounded-lg"
                                    src={mensxp}
                                    alt="MensXp" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    className="rounded-lg"
                                    src={mensxpInterior}
                                    alt="MensXp" />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="flex col-span-1 justify-left text-justify">
                        <div data-aos="fade-up" className="grid grid-cols-1 gap-6">
                            <div>
                                <h1 className="text-4xl font-semibold pb-1">About</h1>
                                <p className="font-light">After successfully capturing the internet shopping space, MensXP has opened its first store at Bangalore's Garuda Mall</p>
                                <p className="font-light pt-2">At MensXP Shop's store, you will be able to shop from exclusive labels like MensXP Basics (apparel), Collective (Bar Accessories), Indiyug (Ethnic Wear), Mojama (Casual Wear), MUD (for skincare), and Fraternity.</p>
                                <div className="flex pt-8">
                                    <a className="inline-flex text-white bg-purple border-0 py-3 px-6 focus:outline-none hover:bg-darker-purple active:bg-black rounded text-lg transition ease-in-out delay-10 duration-200 hover:-translate-y-1 hover:scale-110" href="http://mensxp.com" target="_blank" rel="noreferrer">
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