import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import Header from '../../layout/Header'
import Footer from '../../layout/Footer'

import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade, A11y, Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import tpp from '../../../public/images/stores/orion/tpp/tpp.webp'
import tppInterior from '../../../public/images/stores/orion/tpp/tpp2.webp'

export default function ThePantProject() {
    return (
        <div>
            <Head>
                <title>The Pant Project | LiteStore</title>
                <meta name="description" content="LiteStore" />
            </Head>
            <Header />
            <div className="px-5 md:px-40 pt-5 md:pt-10 pb-10 bg-light-white">
                <h1 className="text-6xl font-bold pb-2">The Pant Project <br className="invisible md:hidden" /> <span className="text-black font-light"> Flexi-Store,</span><span className="text-black font-semibold"> Orion Mall</span> </h1>
                <h1 className="text-2xl font-light py-3">March '22 - June '22</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
                    <div className="flex col-span-2">
                        <Swiper
                            modules={[Navigation, Pagination, A11y, EffectFade, Autoplay]}
                            effect="fade"
                            slidesPerView={1}
                            autoplay={true}
                            pagination={{ clickable: true }}
                        >
                            <SwiperSlide>
                                <Image
                                    className="rounded-lg"
                                    src={tpp}
                                    alt="Wow" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image
                                    className="rounded-lg"
                                    src={tppInterior}
                                    alt="Wow" />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="justify-left text-justify">
                        <div>
                            <h1 className="text-4xl font-semibold pb-1">About</h1>
                            <p className="font-light">With a Master on-site to take the perfect measurements and Pantologists to guide the customers on the perfect pair</p>
                            <p className="font-light pt-2">The Pant Project's Flexi-Store offers a fresh and a personalized retail shopping experience for the Lakhs of customers walking into Orion Mall, Bangalore.</p>
                        </div>
                        <div className="flex pt-8">
                            <a className="inline-flex text-white bg-purple border-0 py-3 px-6 focus:outline-none hover:bg-darker-purple active:bg-black rounded text-lg transition ease-in-out delay-10 duration-200 hover:-translate-y-1 hover:scale-110" href="https://pantproject.com" target="_blank" rel="noreferrer">
                                <span className="pr-3">Online Store</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}