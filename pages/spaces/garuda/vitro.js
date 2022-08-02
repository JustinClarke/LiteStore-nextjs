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

const vitro = '/images/stores/garuda/vitro/vitro.webp'
const vitroInterior = '/images/stores/garuda/vitro/vitro2.webp'
const vitroInterior1 = '/images/stores/garuda/vitro/vitro1.webp'


export default function Vitro() {
    return (
        <div>
            <Head>
                <title>Vitro Naturals | LiteStore</title>
                <meta name="description" content="Vitro Naturals | LiteStore" />
                <meta name="twitter:title" content="Vitro Naturals | LiteStore" />
                <meta property="og:title" content="Vitro Naturals | LiteStore" />

            </Head>
            <Header />
            <div className="px-5 md:px-40 pt-5 md:pt-10 pb-10 bg-light-white">
                <h1 data-aos="fade-up" className="text-6xl text-vitro-green font-bold pb-2">Vitro  <br className="invisible md:hidden" /><span className="text-black font-light"> Flexi-Store,</span><span className="text-black font-semibold"> Garuda Mall</span> </h1>
                <h1 data-aos="fade-up" className="text-2xl font-light py-3">February '22</h1>
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
                                    src={vitro}
                                    alt="Vitro Naturals" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    className="rounded-lg"
                                    src={vitroInterior1}
                                    alt="Vitro Naturals" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    className="rounded-lg"
                                    src={vitroInterior}
                                    alt="Vitro Naturals" />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="flex col-span-1 justify-left text-justify">
                        <div className="grid grid-cols-1 gap-6">
                            <div data-aos="fade-up">
                                <h1 className="text-4xl font-semibold pb-1">About</h1>
                                <p className="font-light">Vitro Naturals, a nutraceutical company based out of Jaipur, Rajasthan made its first foray offline at Garuda Mall, Bangalore.</p>
                                <p className="font-light pt-2">Targeting a niche but a highly growing nutraceutical market - the Flexi-Store offered them a chance to test the offline market and interact with customers and educate them about some of their best selling products.</p>
                                <div className="grid grid-cols-3 gap-6 pt-5 text-lg font-light">
                                    <div>
                                        <h1 className="text-4xl font-semibold pb-1">40%</h1>
                                        <p className="leading-5">Repeat Purchases</p>
                                    </div>
                                    <div>
                                        <h1 className="text-4xl font-semibold pb-1">700+</h1>
                                        <p className="leading-5">Samples given out in-store</p>
                                    </div>
                                    <div>
                                        <h1 className="text-4xl font-semibold pb-1">3x</h1>
                                        <p className="leading-5">Increased Social Media Following</p>
                                    </div>
                                </div>
                                <div className="flex pt-8">
                                    <a className="inline-flex text-white bg-purple border-0 py-3 px-6 focus:outline-none hover:bg-darker-purple active:bg-black rounded text-lg transition ease-in-out delay-10 duration-200 hover:-translate-y-1 hover:scale-110" href="https://vitronaturals.com" target="_blank" rel="noreferrer">
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