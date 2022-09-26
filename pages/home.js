import Head from 'next/head'
import Link from 'next/link'

import Header from './layout/Header'
import Footer from './layout/Footer'

import React, { useState, useEffect } from 'react';

import CountUp from 'react-countup'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade, A11y, Autoplay, Scrollbar } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/virtual';

//video
const video = '/video/litestore.mp4'

// store images
const wow = '/spaces/orion/wow/wow1.webp'
const tpp = '/spaces/orion/tpp/tpp.webp'
const sleepycat = '/spaces/orion/sleepycat/sleepycat.webp'
const jbl = '/spaces/orion/jbl/jbl.webp'

const mensxp = '/spaces/garuda/mensxp/mensxp.webp'
const vitro = '/spaces/garuda/vitro/vitro.webp'
const zymrat = '/spaces/garuda/zymrat/zymrat.webp'

const frootle = '/spaces/lulu/frootle/frootle.webp'

// store logos
const wowLogo = '/logos/trusted/wow.webp'
const tppLogo = '/logos/trusted/tpp.webp'
const sleepycatLogo = '/logos/trusted/sleepycat.webp'
const mensxpLogo = '/logos/trusted/mensxp.webp'
const vitroLogo = '/logos/trusted/vitro.webp'
const jblLogo = '/logos/trusted/jbl.webp'
const zymratLogo = '/logos/trusted/zymrat.webp'
const frootleLogo = '/logos/trusted/frootle.webp'
const skillmaticsLogo = '/logos/trusted/skillmatics.webp'

// real estate partner logos
const brigadeReap = '/logos/real-estate-partners/brigade-reap.webp'
const brigade = '/logos/real-estate-partners/brigade.webp'
const brookfield = '/logos/real-estate-partners/brookfield.webp'
const garuda = '/logos/real-estate-partners/garuda.webp'
const lulu = '/logos/real-estate-partners/lulu.webp'

// media logos
const apn = '/logos/articles/apn.webp'
const fml = '/logos/articles/fml.webp'
const ir = '/logos/articles/ir.webp'
const mb = '/logos/articles/mb.webp'
const pl = '/logos/articles/pl.webp'
const twi = '/logos/articles/twi.webp'

function WindowSize() {
	// Initialize state with undefined width/height so server and client renders match
	// Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
	const [windowSize, setWindowSize] = useState({
		width: undefined,
		height: undefined,
	});
	useEffect(() => {
		// Handler to call on window resize
		function handleResize() {
			// Set window width/height to state
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		}
		// Add event listener
		window.addEventListener("resize", handleResize);
		// Call handler right away so state gets updated with initial window size
		handleResize();
		// Remove event listener on cleanup
		return () => window.removeEventListener("resize", handleResize);
	}, []); // Empty array ensures that effect is only run on mount
	return windowSize;
}

export default function home() {
	const counterDurarion = 8;
	var slidesPerView = 7;
	var slidesPerViewBrands = 3.1;

	const { height, width } = WindowSize();
	if (width < 480) {
		var slidesPerView = 4;
		var slidesPerViewBrands = 1.1;
	}
	return (
		<div>
			<Head>
				<title>Home | LiteStore</title>
				<meta name="og:title" content="Home | LiteStore" />
				<meta name="twitter:title" content="Home | LiteStore" />
				<meta property="og:title" content="Home | LiteStore" />
			</Head>
			<Header />

			<section id="head" className="relative bg-black">
				<div className="bg-hero-section bg-no-repeat h-[88vh] md:h-[93vh] bg-center bg-cover">
					<video autoPlay loop muted className="absolute inset-0 min-w-full object-cover h-[86.75vh] md:h-[93vh] ">
						<source
							src={video}
							type="video/mp4"
						/>
						Your browser does not support the video tag.
					</video>
					<div data-aos="fade-up" data-aos-delay="100" className="relative inset-0 text-white text-center">
						<h1 className="text-7xl md:text-[12rem] font-black pt-[45%] md:pt-[15%] leading-9 md:leading-none">
							LiteStore
						</h1>
						<p className="text-xl pt-8 md:pt-0 md:text-4xl font-medium md:leading-none">Launch your own Flexi-Store, instantly</p>
						<div className="grid pt-10">
							<Link href="/spaces">
								<a className="mx-auto">
									<button className="py-2 px-10 bg-purple hover:bg-darker-purple active:bg-black font-medium text-xl text-white rounded transition ease-in-out delay-10 duration-200 hover:-translate-y-1 hover:scale-110"
										href="#">
										Get Started
									</button>
								</a>
							</Link>
						</div>
					</div>
				</div>
			</section>

			<section id="about" className="px-5 md:pt-8 xl:pt-20">
				<div data-aos="fade-up" className="px-5 md:px-40 pt-5 pb-5 text-center font-light">
					<h1 className="text-3xl md:text-4xl font-medium text-gray-600">Going offline <span className="invisible md:hidden" ><br /></span> can't get any easier</h1>
					<h2 className="pt-2 text-sm md:text-xl font-light">LiteStore<sup>®</sup> is an online platform to find, book & set-up retail experience centres on a short term basis.</h2>
				</div>
				<div className="text-gray-600 body-font">
					<div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
						<div className="h-full w-6 absolute inset-0 flex items-center justify-center">
							<div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
						</div>
						<div data-aos="fade-up" className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-purple text-white relative z-10 title-font font-medium text-sm font-sans">1</div>
						<div data-aos="fade-up" className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
							<div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-purple rounded-full inline-flex items-center justify-center">
								<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
									<path strokeLinecap="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
								</svg>
							</div>
							<div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
								<h2 className="font-medium title-font mb-1 text-xl">Find a Space</h2>
								<p className="leading-relaxed">Select a location from our curated list of venues</p>
							</div>
						</div>
					</div>
					<div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
						<div className="h-full w-6 absolute inset-0 flex items-center justify-center">
							<div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
						</div>
						<div data-aos="fade-up" className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-purple text-white relative z-10 title-font font-medium text-sm font-sans">2</div>
						<div data-aos="fade-up" className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
							<div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-purple rounded-full inline-flex items-center justify-center">
								<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
									<path strokeLinecap="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
								</svg>
							</div>
							<div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
								<h2 className="font-medium title-font mb-1 text-xl">Book & Pay</h2>
								<p className="leading-relaxed">Simple agreement, signed digitally & transparent pricing</p>
							</div>
						</div>
					</div>
					<div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
						<div className="h-full w-6 absolute inset-0 flex items-center justify-center">
							<div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
						</div>
						<div data-aos="fade-up" className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-purple text-white relative z-10 title-font font-medium text-sm font-sans">3</div>
						<div data-aos="fade-up" className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
							<div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-purple rounded-full inline-flex items-center justify-center">
								<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
									<path strokeLinecap="round" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
								</svg>
							</div>
							<div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
								<h2 className="font-medium title-font mb-1 text-xl">Customize Your Store</h2>
								<p className="leading-relaxed">Choose your store layout and select from our list of add-on services</p>
							</div>
						</div>
					</div>
					<div className="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
						<div className="h-full w-6 absolute inset-0 flex items-center justify-center">
							<div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
						</div>
						<div data-aos="fade-up" className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-purple text-white relative z-10 title-font font-medium text-sm font-sans">4</div>
						<div data-aos="fade-up" className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
							<div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-purple rounded-full inline-flex items-center justify-center">
								<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
									<path strokeLinecap="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
							</div>
							<div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
								<h2 className="font-medium title-font mb-1 text-xl">Launch Your Store</h2>
								<p className="leading-relaxed">Bring your product, team, ideas and head over to your store</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section id="amenities" className="pt-16 pb-20 px-5 md:px-40 lg:px-20 xl:px-60">
				<div className="text-gray-600">
					<h1 data-aos="fade-up" className="pb-10 col-span-2 text-3xl md:text-4xl text-left md:text-center font-medium">Your Flexi-Store comes ready with</h1>
					<div className="grid grid-cols-2 gap-4 md:gap-12 auto-cols-[500px]">
						<div className="col-span-1">
							<div data-aos="fade-up" className="pt-40 md:pt-0 flex items-center border-b pb-10 border-gray-200 sm:flex-row flex-col">
								<div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-purple flex-shrink-0">
									<svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
										<path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
									</svg>
								</div>
								<div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
									<h2 className="text-gray-900 text-xl title-font font-medium mb-2">Minimalist Layout</h2>
									<p className="leading-relaxed text-base">The interiors, lighting & fitout are already complete so you can leave your toolbox at home</p>
								</div>
							</div>
							<div data-aos="fade-up" className="flex items-center border-b pb-10 pt-10 border-gray-200 sm:flex-row flex-col">
								<div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
									<h2 className="text-gray-900 text-xl title-font font-medium mb-2">Modular Fixtures</h2>
									<p className="leading-relaxed text-base">Chic and easy to assemble fixtures for a wide range of product categories</p>
								</div>
								<div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-purple flex-shrink-0">
									<svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
										<path strokeLinecap="round" strokeLinejoin="round" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
									</svg>
								</div>
							</div>
							<div data-aos="fade-up" className="flex items-center sm:flex-row pt-10 flex-col">
								<div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-purple flex-shrink-0">
									<svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
										<path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
									</svg>
								</div>
								<div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
									<h2 className="text-gray-900 text-xl title-font font-medium mb-2"> Retail Analytics</h2>
									<p className="leading-relaxed text-base"> Through Computer Vision technology, we track customer journeys and shopping patterns from our CCTV cameras in the stores to give you the full suite of data regarding your shoppers</p>
								</div>
							</div>
						</div>
						<div className="col-span-1">
							<div data-aos="fade-up" className="flex items-center border-b pb-10 border-gray-200 sm:flex-row flex-col">
								<div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-purple flex-shrink-0">
									<svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
										<path strokeLinecap="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
									</svg>
								</div>
								<div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
									<h2 className="text-gray-900 text-xl title-font font-medium mb-2">Regulatory Compliance</h2>
									<p className="leading-relaxed text-base">We've asked everybody for permission, so you don't have to!</p>
								</div>
							</div>
							<div data-aos="fade-up" className="flex items-center border-b pb-10 pt-10 border-gray-200 sm:flex-row flex-col">
								<div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
									<h2 className="text-gray-900 text-xl title-font font-medium mb-2">Branding</h2>
									<p className="leading-relaxed text-base">Digital Screens and dedicated surfaces will bring your brand to life in the store</p>
								</div>
								<div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-purple flex-shrink-0">
									<svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
										<path strokeLinecap="round" strokeLinejoin="round" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
									</svg>
								</div>
							</div>
							<div data-aos="fade-up" className="flex items-center sm:flex-row pt-10 flex-col">
								<div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-purple flex-shrink-0">
									<svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
										<path strokeLinecap="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
									</svg>
								</div>
								<div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
									<h2 className="text-gray-900 text-xl title-font font-medium mb-2">PoS and Billing System</h2>
									<p className="leading-relaxed text-base">We make sure that customers can actually buy your products!</p>
								</div>
							</div>
						</div>
					</div>

				</div>
			</section>

			{/* <section id="brands" className="px-5 md:px-40 py-10 bg-black justify-center">
				<div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<div className="grid grid-cols-2 gap-4">
						<h1 className="pb-2 col-span-2 text-2xl md:text-4xl font-light text-center text-light-white">LiteStore<sup>®</sup>, Orion Mall</h1>
						<Link href="/spaces/orion/wow">
							<a>
								<img
									className="rounded-lg hover:scale-105 transition ease-in-out duration-500"
									src={wow}
									alt="Wow" />
							</a>
						</Link>
						<Link href="/spaces/orion/sleepycat">
							<a>
								<img
									className="rounded-lg hover:scale-105 transition ease-in-out duration-500"
									src={sleepycat}
									alt="SleepyCat" />
							</a>
						</Link>
						<Link href="/spaces/orion/thepantproject">
							<a>
								<img
									className="rounded-lg hover:scale-105 transition ease-in-out duration-500"
									src={tpp}
									alt="The Pant Project" />
							</a>
						</Link>
						<Link href="/spaces/orion/jbl">
							<a>
								<img
									className="rounded-lg hover:scale-105 transition ease-in-out duration-500"
									src={jbl}
									alt="JBL" />
							</a>
						</Link>
					</div>
					<div className="grid grid-cols-2 gap-4">
						<h1 className="pb-2 col-span-2 text-2xl md:text-4xl font-light text-center text-light-white">LiteStore<sup>®</sup>, Garuda Mall</h1>
						<Link href="/spaces/garuda/mensxp">
							<a>
								<img
									className="rounded-lg hover:scale-105 transition ease-in-out duration-500"
									src={mensxp}
									alt="MensXp" />
							</a>
						</Link>
						<Link href="/spaces/garuda/vitro">
							<a>
								<img
									className="rounded-lg hover:scale-105 transition ease-in-out duration-500"
									src={vitro}
									alt="Vito Naturals" />
							</a>
						</Link>
						<div className="grid justify-items-center">
							<h1 className="pb-2 col-span-2 text-2xl md:text-4xl font-light self-center text-light-white">LiteStore<sup>®</sup>, <br /> Lulu Mall</h1>
						</div>
						<Link href="/spaces/lulu/frootle">
							<a>
								<img
									className="rounded-lg hover:scale-105 transition ease-in-out duration-500"
									src={frootle}
									alt="Frootle" />
							</a>
						</Link>
					</div>
				</div>
			</section> */}

			<section id="brands-alt" className="bg-black py-2 md:py-5">
				<Swiper
					style={{
						"--swiper-navigation-color": "#fff",
					}}
					modules={[Navigation, Pagination, A11y, EffectFade, Autoplay]}
					spaceBetween={50}
					slidesPerView={slidesPerViewBrands}
					autoplay={true}
					loop={true}
					centeredSlides={true}
					grabCursor={true}
					navigation
				>
					<SwiperSlide className="py-2 md:py-5">
						<Link href="/spaces/orion/wow">
							<a>
								<img
									className="rounded-lg hover:scale-105 transition ease-in-out duration-500"
									src={wow}
									alt="Wow" />
							</a>
						</Link>
					</SwiperSlide>
					<SwiperSlide className="py-2 md:py-5">
						<Link href="/spaces/orion/sleepycat">
							<a>
								<img
									className="rounded-lg hover:scale-105 transition ease-in-out duration-500"
									src={sleepycat}
									alt="SleepyCat" />
							</a>
						</Link>
					</SwiperSlide>
					<SwiperSlide className="py-2 md:py-5">
						<Link href="/spaces/orion/thepantproject">
							<a>
								<img
									className="rounded-lg hover:scale-105 transition ease-in-out duration-500"
									src={tpp}
									alt="The Pant Project" />
							</a>
						</Link>
					</SwiperSlide>
					<SwiperSlide className="py-2 md:py-5">
						<Link href="/spaces/orion/jbl">
							<a>
								<img
									className="rounded-lg hover:scale-105 transition ease-in-out duration-500"
									src={jbl}
									alt="JBL" />
							</a>
						</Link>
					</SwiperSlide>
					<SwiperSlide className="py-2 md:py-5">
						<Link href="/spaces/garuda/mensxp">
							<a>
								<img
									className="rounded-lg hover:scale-105 transition ease-in-out duration-500"
									src={mensxp}
									alt="MensXp" />
							</a>
						</Link>
					</SwiperSlide>
					<SwiperSlide className="py-2 md:py-5">
						<Link href="/spaces/garuda/vitro">
							<a>
								<img
									className="rounded-lg hover:scale-105 transition ease-in-out duration-500"
									src={vitro}
									alt="Vito Naturals" />
							</a>
						</Link>
					</SwiperSlide>
					<SwiperSlide className="py-2 md:py-5">
						<Link href="/spaces/lulu/frootle">
							<a>
								<img
									className="rounded-lg hover:scale-105 transition ease-in-out duration-500"
									src={zymrat}
									alt="Zymrat" />
							</a>
						</Link>
					</SwiperSlide>
					<SwiperSlide className="py-2 md:py-5">
						<Link href="/spaces/lulu/frootle">
							<a>
								<img
									className="rounded-lg hover:scale-105 transition ease-in-out duration-500"
									src={frootle}
									alt="Frootle" />
							</a>
						</Link>
					</SwiperSlide>
				</Swiper>
			</section>

			<section id="counter" className="px-0 md:px-60 lg:px-40 xl:px-60 py-5 md:py-10 text-center">
				<div data-aos="fade-up" className="grid grid-cols-3 gap-12 justify-center text-purple">
					<h1 className="col-span-3 font-bold text-xl md:text-3xl text-black">INDIA'S FIRST ONLINE PLATFORM FOR SHORT-TERM RETAIL SPACES.</h1>
					<div className="grid grid-cols-1 justify-items-center">
						<div className="flex col-span-1">
							<p className="pt-3 md:pt-5 text-xl md:text-6xl font-semibold">₹</p>
							<p className="text-5xl md:text-8xl font-black font-sans">
								<CountUp
									start={100}
									end={0}
									duration={counterDurarion}
								/>
							</p>
						</div>
						<p className="pt-8 leading-4 text-sm md:text-2xl text-black font-semibold">Security Deposit</p>
					</div>
					<div className="grid grid-cols-1 justify-items-center">
						<div className="flex col-span-1">
							<p className="text-5xl md:text-8xl font-black font-sans">
								<CountUp
									start={100}
									end={0}
									duration={counterDurarion}
								/>
							</p>
						</div>
						<p className="pt-8 leading-4 text-sm md:text-2xl text-black font-semibold">Lock In</p>
					</div>
					<div className="grid grid-cols-1 justify-items-center">
						<div className="flex col-span-1">
							<p className="pt-3 md:pt-5 text-xl md:text-6xl font-semibold">₹</p>
							<p className="text-5xl md:text-8xl font-black font-sans">
								<CountUp
									start={100}
									end={0}
									duration={counterDurarion}
								/>
							</p>
						</div>
						<p className="pt-8 leading-4 text-sm md:text-2xl text-black font-semibold">Sunk Cost</p>
					</div>
					<div className="grid grid-cols-1 justify-items-end md:justify-items-center">
						<div className="flex col-span-1">
							<p className="text-5xl md:text-8xl font-black font-sans">
								<CountUp
									start={0}
									end={48}
									duration={counterDurarion}
								/>
							</p>
							<p className="pt-8 md:pt-16 text-[10px] md:text-lg leading-none md:leading-none">Hours</p>
						</div>
						<p className="pt-2 leading-4 text-sm md:text-xl text-black font-semibold">Transition time between Brands</p>
					</div>
					<div className="grid grid-cols-1 justify-items-center">
						<div className="flex col-span-1">
							<p className="text-5xl md:text-8xl font-black font-sans">
								<CountUp
									start={0}
									end={58}
									duration={counterDurarion}
								/>%
							</p>
							<p className="pt-6 md:pt-12 text-[10px] md:text-lg leading-none md:leading-none">per<br />month</p>
						</div>
						<p className="pt-9 leading-4 text-sm md:text-xl text-black font-semibold">Cheaper than Conventional Retail Models</p>
					</div>
					<div className="grid grid-cols-1 justify-items-end md:justify-items-center pr-1 md:pr-0">
						<div className="flex col-span-1">
							<p className="pt-3 md:pt-5 text-xl md:text-6xl font-semibold">₹</p>
							<p className="text-5xl md:text-8xl font-black font-sans">
								{/* <CountUp
									start={0}
									end={1.5}
									duration={counterDurarion}
								/> */}
								1.5
							</p>
							<p className="pt-6 md:pt-16 text-[10px] md:text-lg leading-none md:leading-none text-left">Cr+ GMV</p>
						</div>
						<p className="pt-2 pr-2 md:pr-0 leading-4 text-sm md:text-xl text-black font-semibold">Sold in<br className="invisible md:hidden" /> Flexi-Stores</p>
					</div>
				</div>
			</section>

			<section id="logos" className="pt-5 pb-5 md:pb-10">
				<h1 data-aos="fade-up" className="pb-2 text-center text-medium text-xl md:text-3xl uppercase">Trusted By</h1>
				<div data-aos="fade-up" className="flex">
					<Swiper
						modules={[Navigation, Pagination, A11y, EffectFade, Autoplay]}
						spaceBetween={50}
						slidesPerView={slidesPerView}
						autoplay={true}
						loop={true}
						centeredSlides={true}
						grabCursor={true}
					>
						<SwiperSlide>
							<img
								className="rounded-lg"
								src={wowLogo}
								alt="Wow" />
						</SwiperSlide>
						<SwiperSlide>
							<img
								className="rounded-lg"
								src={tppLogo}
								alt="The Pant Project" />
						</SwiperSlide>
						<SwiperSlide>
							<img
								className="rounded-lg"
								src={sleepycatLogo}
								alt="SleepyCat" />
						</SwiperSlide>
						<SwiperSlide>
							<img
								className="rounded-lg"
								src={mensxpLogo}
								alt="MensXP" />
						</SwiperSlide>
						<SwiperSlide>
							<img
								className="rounded-lg"
								src={vitroLogo}
								alt="Vitro" />
						</SwiperSlide>
						<SwiperSlide>
							<img
								className="rounded-lg"
								src={jblLogo}
								alt="JBL" />
						</SwiperSlide>
						<SwiperSlide>
							<img
								className="rounded-lg"
								src={zymratLogo}
								alt="Zymrat" />
						</SwiperSlide>
						<SwiperSlide>
							<img
								className="rounded-lg"
								src={frootleLogo}
								alt="Frootle" />
						</SwiperSlide>
						<SwiperSlide>
							<img
								className="rounded-lg"
								src={skillmaticsLogo}
								alt="Frootle" />
						</SwiperSlide>
					</Swiper>
				</div>

				<h1 data-aos="fade-up" className="pb-5 md:pb-10 col-span-5 text-center text-medium text-xl md:text-3xl uppercase">Real Estate Partners</h1>
				<div data-aos="fade-up" className="px-10 md:px-[30%] grid grid-cols-5 gap-6">
					<img
						className="rounded-lg"
						src={brigade}
						alt="Brigade" />
					<img
						className="rounded-lg"
						src={brookfield}
						alt="Brookfield" />
					<img
						className="rounded-lg"
						src={brigadeReap}
						alt="Brigade Reap" />
					<img
						className="rounded-lg"
						src={garuda}
						alt="Garuda Mall" />
					<img
						className="rounded-lg"
						src={lulu}
						alt="Lulu Mall" />
				</div>

				<h1 className="pt-5 md:pt-10 md:pb-3 col-span-6 md:col-span-6 text-center text-medium text-xl md:text-3xl uppercase">Media</h1>

				{/* Desktop View */}
				<div data-aos="fade-up" className="invisible md:visible">
					<div className="px-10 md:px-60 grid grid-cols-6 gap-10">
						<img
							className="rounded-lg"
							src={apn}
							alt="APN News" />
						<img
							className="rounded-lg"
							src={fml}
							alt="FM Live" />
						<img
							className="rounded-lg"
							src={mb}
							alt="Media Brief" />
						<img
							className="rounded-lg"
							src={pl}
							alt="Pro Live" />
						<img
							className="rounded-lg"
							src={twi}
							alt="This Week India" />
						<img
							className="rounded-lg"
							src={ir}
							alt="India Retailing" />
					</div>
				</div>

				{/* Mobile View */}
				<div data-aos="fade-up" className="flex md:hidden">
					<Swiper
						modules={[Navigation, Pagination, A11y, EffectFade, Autoplay]}
						spaceBetween={20}
						slidesPerView={slidesPerView}
						autoplay={true}
						loop={true}
						centeredSlides={true}
						grabCursor={true}
					>
						<SwiperSlide>
							<img
								className="rounded-lg"
								src={apn}
								alt="APN News" />
						</SwiperSlide>
						<SwiperSlide>
							<img
								className="rounded-lg"
								src={fml}
								alt="FM Live" />
						</SwiperSlide>
						<SwiperSlide>
							<img
								className="rounded-lg"
								src={mb}
								alt="Media Brief" />
						</SwiperSlide>
						<SwiperSlide>
							<img
								className="rounded-lg"
								src={pl}
								alt="Pro Live" />
						</SwiperSlide>
						<SwiperSlide>
							<img
								className="rounded-lg"
								src={twi}
								alt="This Week India" />
						</SwiperSlide>
						<SwiperSlide>
							<img
								className="rounded-lg"
								src={ir}
								alt="India Retailing" />
						</SwiperSlide>
					</Swiper>
				</div>

			</section>

			<Footer />
		</div>
	)
}