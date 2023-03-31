import Head from 'next/head'
import Image from 'next/image'
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

const frootle = '/spaces/lulu/frootle/frootle.webp'
const frootleInterior = '/spaces/lulu/frootle/frootleInterior.webp'
const frootleInterior1 = '/spaces/lulu/frootle/frootleInterior1.webp'

export default function index() {
    return (
        <div>
            <Head>
                <title>Lulu Mall | LiteStore</title>
                <meta name="og:title" content="LiteStore" />
                <meta name="og:title" content="Lulu Mall | LiteStore" />
                <meta name="twitter:title" content="Lulu Mall | LiteStore" />
                <meta property="og:title" content="Lulu Mall | LiteStore" />

            </Head>
            <Header />
            <div className="w-full h-[86.75vh] md:h-[93vh] bg-cover bg-center" style={{ backgroundImage: 'url(https://images.newindianexpress.com/uploads/user/imagelibrary/2021/10/10/w900X450/Lulu_Hypermarket.jpg?w=400&dpr=2.6)' }}>
                {/* westside image */}
                {/* <div className="w-full h-[86.75vh] md:h-[93vh] bg-cover bg-center" style={{ backgroundImage: 'url(https://www.lulumall.in/media/8016/westside_banner.jpg?crop=0.059296097934200528,0,0.079954093343533622,0.13925019127773422&cropmode=percentage&width=1400&height=500&rnd=132237356240000000)' }}> */}
                <div className="flex items-center justify-center h-full w-full ">
                    <div data-aos="fade-up" className="text-center w-full bg-gray-900 bg-opacity-40">
                        <h1 className="text-5xl md:text-6xl pt-3 text-white font-bold uppercase">Lulu Mall</h1>
                        <h2 className="text-lg md:text-xl pt-1 pb-3 text-white font-medium">West Bangalore (Rajajinagar)</h2>
                    </div>
                </div>
            </div>

            <div className="px-5 md:px-40 pt-5 md:pt-10 pb-10 bg-light-white">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
                    <div data-aos="fade-up" className="flex">
                        <Swiper
                            modules={[Navigation, Pagination, A11y, EffectFade, Autoplay]}
                            effect="fade"
                            slidesPerView={1}
                            autoplay={true}
                        >
                            <SwiperSlide>
                                <img
                                    className="rounded-lg"
                                    src={frootle}
                                    alt="Lulu Mall" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    className="rounded-lg"
                                    src={frootleInterior}
                                    alt="Lulu Mall" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    className="rounded-lg"
                                    src={frootleInterior1}
                                    alt="Lulu Mall" />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="flex col-span-2 justify-left text-justify">
                        <div className="grid grid-cols-1 gap-3 content-between">
                            <div data-aos="fade-up">
                                <h1 className="text-4xl font-semibold pb-1">About</h1>
                                <p className="font-light">Known for creating magnificent retail and entertainment destinations, Lulu Mall in Bangalore offers diverse opportunities for customers to engage within the mall. Lulu Mall delivers shopping experiences to {'>'}20 Lakh shoppers every month, one of the highest in South India. </p>
                            </div>
                            {/* <div data-aos="fade-up">
                                <h1 className="text-4xl font-semibold pb-1">Size</h1>
                                <p className="font-light">530 Sq. Ft. Carpet Area (Upper Ground Floor)</p>
                            </div> */}
                            {/* <div data-aos="fade-up">
                                <h1 className="text-4xl font-semibold pb-1">Brand Pipeline</h1>
                                <p className="font-light">Frootle, JBL, Mokobara</p>
                            </div> */}
                            <div data-aos="fade-up">
                                <h1 className="text-4xl font-semibold pb-1">Location Adjacencies</h1>
                                <p className="font-light">First Floor, Zudio, Westside, Mothercare, USPA</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* 
            <div className="px-5 md:px-40 py-10 text-light-white bg-black">
                <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                    <h1 className="text-4xl font-light text-center p-[25%]">One week to ideate and confirm design</h1>
                    <div className="flex">
                        <Swiper
                            modules={[Navigation, Pagination, A11y, EffectFade, Autoplay]}
                            effect="fade"
                            slidesPerView={1}
                            autoplay={true}
                        >
                            <SwiperSlide>
                                <img
                                    className="rounded-lg"
                                    src={orionRender1}
                                    alt="Orion Mall" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    className="rounded-lg"
                                    src={orionRender2}
                                    alt="Orion Mall" />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>

            <div className="px-5 md:px-40 py-10 text-light-white bg-black">
                <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                    <div className="flex">
                        <Swiper
                            modules={[Navigation, Pagination, A11y, EffectFade, Autoplay]}
                            effect="fade"
                            slidesPerView={1}
                            autoplay={true}
                        >
                            <SwiperSlide>
                                <img
                                    className="rounded-lg"
                                    src={wowInterior}
                                    alt="Orion Mall" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    className="rounded-lg"
                                    src={tppInterior}
                                    alt="Orion Mall" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    className="rounded-lg"
                                    src={sleepycatInterior}
                                    alt="Orion Mall" />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <h1 className="text-4xl font-light text-center p-[25%]">Store goes live in 48-56 hours</h1>
                </div>
            </div> */}

            <div className="px-5 md:px-40 py-10 text-black bg-light-white">
                <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    <h1 className="text-4xl font-light pb-1">Locate Us</h1>
                    <div className="flex col-span-4">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1943.9258784893284!2d77.56244711610184!3d12.981331882713183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17cbb8276a8b%3A0xacfdd8a4a4ced9fd!2sLulu%20Hypermarket!5e0!3m2!1sen!2sin!4v1659446115278!5m2!1sen!2sin"
                            className="w-full h-[300px] rounded-lg drop-shadow-xl"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        >
                        </iframe>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}