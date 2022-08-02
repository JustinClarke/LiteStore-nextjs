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

const wow = '/images/stores/orion/wow/wow1.webp'
const wowInterior = '/images/stores/orion/wow/wow2.webp'
const tpp = '/images/stores/orion/tpp/tpp.webp'
const tppInterior = '/images/stores/orion/tpp/tpp2.webp'
const sleepycat = '/images/stores/orion/sleepycat/sleepycat.webp'
const sleepycatInterior = '/images/stores/orion/sleepycat/sleepycat3.webp'

const orionRender1 = '/images/stores/orion/orionRender1.webp'
const orionRender2 = '/images/stores/orion/orionRender2.webp'

export default function index() {
    return (
        <div>
            <Head>
                <title>Orion Mall | LiteStore</title>
				<meta name="description" content="Orion Mall | LiteStore" />
				<meta name="twitter:title" content="Orion Mall | LiteStore" />
				<meta property="og:title" content="Orion Mall | LiteStore" />
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-Z1S5RX2Q4E"></script>
				<script>
					window.dataLayer = window.dataLayer || [];
					function gtag(){
						dataLayer.push(arguments)
					}
					gtag('js', new Date());

					gtag('config', 'G-Z1S5RX2Q4E');
				</script>
            </Head>
            <Header />
            <div className="w-full h-[86.75vh] md:h-[93vh] bg-cover bg-center" style={{ backgroundImage: 'urlhttps://litestore-faqs.vercel.app/assets/img/places/orion/orion.jpg)' }}>
                <div className="flex items-center justify-center h-full w-full ">
                    <div data-aos="fade-up" className="text-center w-full bg-gray-900 bg-opacity-40">
                        <h1 className="text-5xl md:text-6xl pt-3 text-white font-bold uppercase">Orion Mall</h1>
                        <h2 className="text-lg md:text-xl pt-1 pb-3 text-white font-medium">Brigade Gateway, Rajajinagar</h2>
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
                            pagination={{ clickable: true }}
                        >
                            <SwiperSlide>
                                <img
                                    className="rounded-lg"
                                    src={wow}
                                    alt="Orion Mall" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    className="rounded-lg"
                                    src={tpp}
                                    alt="Orion Mall" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    className="rounded-lg"
                                    src={sleepycat}
                                    alt="Orion Mall" />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="flex col-span-2 justify-left text-justify">
                        <div className="grid grid-cols-1 gap-6">
                            <div data-aos="fade-up">
                                <h1 className="text-4xl font-semibold pb-1">About</h1>
                                <p className="font-light">Orion is situated right next to World Trade Centre, Sheraton Hotel and a sprawling apartment complex, all housed within the same walls</p>
                            </div>
                            <div data-aos="fade-up">
                                <h1 className="text-4xl font-semibold pb-1">Size</h1>
                                <p className="font-light">530 Sq. Ft. Carpet Area (Upper Ground Floor)</p>
                            </div>
                            <div data-aos="fade-up">
                                <h1 className="text-4xl font-semibold pb-1">Location Adjacencies</h1>
                                <p className="font-light">Upper Ground Floor/Pantaloons, Krispy Kreme, Columbia Sports</p>
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
            </div>

            <div className="px-5 md:px-40 py-10 text-black bg-light-white">
                <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    <h1 className="text-4xl font-light pb-1">Locate Us</h1>
                    <div className="flex col-span-4">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.3862410484253!2d77.55287571482245!3d13.011058190829965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d4b805e4167%3A0xa4c255e80b7e5464!2sOrion%20Mall!5e0!3m2!1sen!2sin!4v1653406013952!5m2!1sen!2sin"
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