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
const vitro = '/spaces/garuda/vitro/vitro.webp'
const vitroInterior = '/spaces/garuda/vitro/vitro1.webp'

const garudaRender1 = '/spaces/garuda/garudaRender1.webp'
const garudaRender2 = '/spaces/garuda/garudaRender2.webp'

export default function index() {
    return (
        <div>
            <Head>
                <title>Garuda Mall | LiteStore</title>
                <meta name="og:title" content="Garuda Mall | LiteStore" />
                <meta name="twitter:title" content="Garuda Mall | LiteStore" />
                <meta property="og:title" content="Garuda Mall | LiteStore" />

            </Head>
            <Header />
            <div className="w-full h-[86.75vh] md:h-[93vh] bg-cover bg-center" style={{ backgroundImage: 'url(https://garudamall.in/wp-content/uploads/2019/11/mall2.jpg)' }}>
                <div className="flex items-center justify-center h-full w-full ">
                    <div data-aos="fade-up" className="text-center w-full bg-gray-900 bg-opacity-40">
                        <h1 className="text-5xl md:text-6xl pt-3 text-white font-bold uppercase">Garuda Mall</h1>
                        <h2 className="text-lg md:text-xl pt-1 text-white font-medium">CENTRAL BUSINESS DISTRICT</h2>
                        <div data-aos="fade-up" className="text-light-white body-font">
                            <div className="grid grid-cols-2 px-0 md:px-96 text-center justify-center">
                                <Link href="/spaces/garuda/mensxp">
                                    <a className="p-2 md:p-4 w-full md:w-auto">
                                        <div className="border-2 hover:bg-mensxp-orange border-gray-200 py-2 md:py-4 rounded-lg transition ease-in-out delay-10 duration-200 hover:-translate-y-1 hover:scale-105">
                                            <p className="leading-relaxed">MensXP</p>
                                        </div>
                                    </a>
                                </Link>
                                <Link href="/spaces/garuda/vitro">
                                    <a className="p-2 md:p-4 w-full md:w-auto">
                                        <div className="border-2 hover:bg-vitro-green border-gray-200 py-2 md:py-4 rounded-lg transition ease-in-out delay-10 duration-200 hover:-translate-y-1 hover:scale-105">
                                            <p className="leading-relaxed">Vitro Naturals</p>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-5 md:px-40 py-10 bg-light-white">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
                    <div data-aos="fade-up" className="flex">
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
                                    src={mensxp}
                                    alt="MensXp" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    className="rounded-lg"
                                    src={vitro}
                                    alt="Vitro Naturals" />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="flex col-span-2 justify-left">
                        <div className="grid grid-cols-1 gap-6">
                            <div data-aos="fade-up">
                                <h1 className="text-4xl font-semibold pb-1">About</h1>
                                <p className="font-light">Nestled in the heart of the city - Garuda Mall is one of Bangalore's most popular malls. Situated in the Central Business District of Bangalore - Garuda is a destination mall for every Bangalorean and hosts world's most exciting brands.</p>
                            </div>
                            <div data-aos="fade-up">
                                <h1 className="text-4xl font-semibold pb-1">Size</h1>
                                <p className="font-light">330 sq. ft. Carpet Area (Central Atrium, 2nd Floor)</p>
                            </div>
                            <div data-aos="fade-up">
                                <h1 className="text-4xl font-semibold pb-1">Location Adjacencies</h1>
                                <p className="font-light">Upper Ground Floor, Chumbak, Soch, Bombay Store, Shoppers Stop</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


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
                                    src={garudaRender1}
                                    alt="Orion Mall" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    className="rounded-lg"
                                    src={garudaRender2}
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
                                    src={mensxpInterior}
                                    alt="MensXp" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    className="rounded-lg"
                                    src={vitroInterior}
                                    alt="Vitro Naturals" />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <h1 className="text-4xl font-light text-center p-[25%]">Store goes live in 48-56 hours</h1>
                </div>
            </div>

            <div className="px-5 md:px-40 py-10 text-black bg-light-white">
                <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    <h1 className="text-4xl font-light pb-1">Locate Us</h1>
                    <div className="flex col-span-4">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0248354163205!2d77.60777421482199!3d12.970262590856787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1681ad793b83%3A0x71c21b8f646dac81!2sGaruda%20Mall!5e0!3m2!1sen!2sin!4v1652949696538!5m2!1sen!2sin"
                            className="w-full h-[300px] rounded-lg drop-shadow-xl"
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                        >
                        </iframe>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}