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

import sleepycat from '../../../public/images/stores/orion/sleepycat/sleepycat.webp'
import sleepycat1 from '../../../public/images/stores/orion/sleepycat/sleepycat.webp'
import sleepycatInterior from '../../../public/images/stores/orion/sleepycat/sleepycat3.webp'
import sleepycatInterior1 from '../../../public/images/stores/orion/sleepycat/sleepycat3.webp'

export default function Sleepycat() {
    return (
        <div>
            <Head>
                <title>SleepyCat | LiteStore</title>
                <meta name="description" content="LiteStore" />
            </Head>

            <Header />

            <div className="px-5 md:px-40 py-10 bg-light-white">
                <h1 className="text-6xl text-sleepycat-orange font-bold pb-2">SleepyCat <br className="invisible md:hidden" /> <span className="text-black font-light"> Flexi-Store,</span><span className="text-black font-semibold"> Orion Mall</span> </h1>
                <h1 className="text-2xl font-light pb-5">December '21 - March '22</h1>
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
                                    src={sleepycat}
                                    alt="Wow" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image
                                    className="rounded-lg"
                                    src={sleepycat1}
                                    alt="Wow" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image
                                    className="rounded-lg"
                                    src={sleepycatInterior}
                                    alt="Wow" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image
                                    className="rounded-lg"
                                    src={sleepycatInterior1}
                                    alt="Wow" />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="flex col-span-1 justify-left">
                        <div className="grid grid-cols-1 gap-6">
                            <div>
                                <h1 className="text-4xl font-semibold pb-1">About</h1>
                                <p className="font-light">SleepyCat marked their first ever foray into an offline store with LiteStore this December in Bangalore!</p>
                                <p className="font-light pt-2">With a chic, sleep themed experience centre, SleepyCat has brought the perfect sleep education to the hundreds of customers walking through their doors.</p>
                                <p className="font-light pt-2">With a pillow bar to rest your head and a sleep station to try out the different materials in each product, customers find it hard to leave the store!</p>
                                <div className="grid grid-cols-2 gap-6 pt-5 text-lg font-light">
                                    <div>
                                        <h1 className="text-4xl font-semibold pb-1">700+</h1>
                                        <p className="leading-5">New Customers educated about SleepyCat</p>
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