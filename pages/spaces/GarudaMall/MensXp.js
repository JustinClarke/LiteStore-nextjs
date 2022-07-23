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

import mensxp from '../../../public/images/spaces/garuda/stores/mensxp/mensxp.webp'
import mensxpInterior from '../../../public/images/spaces/garuda/stores/mensxp/mensxp1.webp'

export default function MensXP() {
	return (
		<div>
			<Head>
				<title>MensXP | LiteStore</title>
				<meta name="description" content="LiteStore" />
			</Head>

			<Header />
            
            <div className="px-5 md:px-40 py-10 bg-light-white">
                <h1 className="text-6xl text-mensxp-orange font-bold pb-2">MensXP <span className="text-black font-light"> Flexi-Store,</span><span className="text-black font-semibold"> Garuda Mall</span> </h1>
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
                                    src={mensxp}
                                    alt="MensXp" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image 
                                    className="rounded-lg"
                                    src={mensxpInterior}
                                    alt="MensXp" />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="flex col-span-1 justify-left">
                        <div className="grid grid-cols-1 gap-6">
                            <div className="">
                                <h1 className="text-4xl font-semibold pb-1">About</h1>
                                <p className="font-light">After successfully capturing the internet shopping space, MensXP has opened its first store at Bangalore's Garuda Mall</p>
                                <p className="font-light pt-2">At MensXP Shop's store, you will be able to shop from exclusive labels like MensXP Basics (apparel), Collective (Bar Accessories), Indiyug (Ethnic Wear), Mojama (Casual Wear), MUD (for skincare), and Fraternity.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

			<Footer />
		</div>
	)
}