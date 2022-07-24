import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade, A11y, Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import Header from '../../layout/Header'
import Footer from '../../layout/Footer'

import vitro from '../../../public/images/stores/garuda/vitro/vitro.webp'
import vitroInterior from '../../../public/images/stores/garuda/vitro/vitro2.webp'
import vitroInterior1 from '../../../public/images/stores/garuda/vitro/vitro1.webp'


export default function Vitro() {
    return (
        <div>
            <Head>
                <title>Vitro | LiteStore</title>
                <meta name="description" content="LiteStore" />
            </Head>

            <Header />

            <div className="px-5 md:px-40 py-10 bg-light-white">
                <h1 className="text-6xl text-vitro-green font-bold pb-2">Vitro  <br className="invisible md:hidden" /><span className="text-black font-light"> Flexi-Store,</span><span className="text-black font-semibold"> Garuda Mall</span> </h1>
                <h1 className="text-2xl font-light pb-5">February '22</h1>
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
                                    src={vitro}
                                    alt="Vitro Naturals" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image
                                    className="rounded-lg"
                                    src={vitroInterior1}
                                    alt="Vitro Naturals" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image
                                    className="rounded-lg"
                                    src={vitroInterior}
                                    alt="Vitro Naturals" />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="flex col-span-1 justify-left">
                        <div className="grid grid-cols-1 gap-6">
                            <div>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}