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

const wow = '/images/spaces/orion/wow/wow1.webp'
const wow1 = '/images/spaces/orion/wow/wow.webp'
const wowInterior = '/images/spaces/orion/wow/wow2.webp'

export default function mensxp() {
    return (
        <div>
            <Head>
                <title>Wow | LiteStore</title>
                <meta name="description" content="Wow | LiteStore" />
                <meta name="twitter:title" content="Wow | LiteStore" />
                <meta property="og:title" content="Wow | LiteStore" />

            </Head>
            <Header />
            <div className="px-5 md:px-40 pt-5 md:pt-10 pb-10 bg-light-white">
                <h1 data-aos="fade-up" className="text-6xl text-jbl-orange font-bold pb-2">JBL <br className="invisible md:hidden" /><span className="text-black font-light"> Flexi-Store,</span><span className="text-black font-semibold"> Lulu Mall</span> </h1>
                <h1 data-aos="fade-up" className="text-2xl font-light py-3">November '21</h1>
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
                                    src={wow}
                                    alt="Wow" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    className="rounded-lg"
                                    src={wow1}
                                    alt="Wow" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    className="rounded-lg"
                                    src={wowInterior}
                                    alt="Wow" />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="flex col-span-1 justify-left text-justify">
                        <div className="grid grid-cols-1 gap-6">
                            <div data-aos="fade-up">
                                <h1 className="text-4xl font-semibold pb-1">About</h1>
                                <p className="font-light">One of India's most successful skincare, haircare and wellness brands, WOW has been a trailblazer in the D2C online market.</p>
                                <p className="font-light pt-2">The WOW FlexiStore featured the best of the product line that WOW offers including top sellers like apple cider vinegar shampoo, black onion seed oil and Vitamin C face washes. Customers gushed over the Body Cupid range of products which included a wide range of scrubs and perfumes with many coming back repeatedly during the month to get their hands on more!</p>
                                <div className="grid grid-cols-3 gap-6 pt-5 text-lg font-light">
                                    <div>
                                        <h1 className="text-4xl font-semibold pb-1">55%</h1>
                                        <p className="leading-5">Daily Conversion Rate</p>
                                    </div>
                                    <div>
                                        <h1 className="text-4xl font-semibold pb-1">1500+</h1>
                                        <p className="leading-5">Pieces Sold</p>
                                    </div>
                                    <div>
                                        <h1 className="text-4xl font-semibold pb-1">1st</h1>
                                        <p className="leading-5">Exclusive offline store</p>
                                    </div>
                                </div>
                                <div className="flex pt-8">
                                    <a className="inline-flex text-white bg-purple border-0 py-3 px-6 focus:outline-none hover:bg-darker-purple active:bg-black rounded text-lg transition ease-in-out delay-10 duration-200 hover:-translate-y-1 hover:scale-110" href="https://www.buywow.in" target="_blank" rel="noreferrer">
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