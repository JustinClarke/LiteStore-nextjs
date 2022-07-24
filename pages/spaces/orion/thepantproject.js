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

            <div className="px-5 md:px-40 py-10 bg-light-white">
                <h1 className="text-6xl font-bold pb-2">The Pant Project <br className="invisible md:hidden" /> <span className="text-black font-light"> Flexi-Store,</span><span className="text-black font-semibold"> Orion Mall</span> </h1>
                <h1 className="text-2xl font-light pb-5">March '22 - June '22</h1>
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
                    <div className="flex col-span-1 justify-left">
                        <div className="grid grid-cols-1 gap-6">
                            <div>
                                <h1 className="text-4xl font-semibold pb-1">About</h1>
                                <p className="font-light">With a Master on-site to take the perfect measurements and Pantologists to guide the customers on the perfect pair - The Pant Project's Flexi-Store offers a fresh and a personalized retail shopping experience for the Lakhs of customers walking into Orion Mall, Bangalore.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}