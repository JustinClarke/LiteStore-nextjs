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

import wow from '../../../public/images/stores/orion/wow/wow1.webp'
import wow1 from '../../../public/images/stores/orion/wow/wow.webp'
import wowInterior from '../../../public/images/stores/orion/wow/wow2.webp'

export default function mensxp() {
    return (
        <div>
            <Head>
                <title>Wow | LiteStore</title>
                <meta name="description" content="LiteStore" />
            </Head>

            <Header />

            <div className="px-5 md:px-40 py-10 bg-light-white">
                <h1 className="text-6xl text-wow-gold font-bold pb-2">Wow <br className="invisible md:hidden" /><span className="text-black font-light"> Flexi-Store,</span><span className="text-black font-semibold"> Orion Mall</span> </h1>
                <h1 className="text-2xl font-light pb-5">November '21</h1>

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
                                    src={wow}
                                    alt="Wow" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image
                                    className="rounded-lg"
                                    src={wow1}
                                    alt="Wow" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image
                                    className="rounded-lg"
                                    src={wowInterior}
                                    alt="Wow" />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="flex col-span-1 justify-left">
                        <div className="grid grid-cols-1 gap-6">
                            <div>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}