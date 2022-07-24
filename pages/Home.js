import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Header from './layout/Header'
import Footer from './layout/Footer'

import wow from '../public/images/spaces/orion/stores/wow/wow1.webp'
import tpp from '../public/images/spaces/orion/stores/tpp/tpp.webp'
import sleepycat from '../public/images/spaces/orion/stores/sleepycat/sleepycat.webp'

import mensxp from '../public/images/spaces/garuda/stores/mensxp/mensxp.webp'
import vitro from '../public/images/spaces/garuda/stores/vitro/vitro.webp'

export default function home() {
	return (
		<div>
			<Head>
				<title>Home | LiteStore</title>
				<meta name="description" content="LiteStore" />
			</Head>
			<Header />

			{/* <div>
				<video
					autoplay="true"
					loop="true"
					muted="true"
					playsinline="true"
					className="w-full min-w-full h-[86.75vh] md:h-[93vh] top-0 left-0 right-0 bottom-0 z-0 bg-cover"
					>
						<source
						src="https://litestore.in/assets/img/video/litestore.mp4"
						type="video/mp4"
						/>
					Your browser does not support the video tag.
				</video>
			</div> */}


			<section id="about">
				<div className="px-5 md:px-40 pt-5 pb-5 text-center font-light">
					<h1 className="text-3xl md:text-4xl font-medium">Going offline <span className="invisible md:hidden" ><br /></span> can't get any easier</h1>
					<h2 className="pt-2 text-sm md:text-xl font-light">LiteStore<sup>®</sup> is an online platform to find, book & set-up retail experience centres on a short term basis.</h2>
				</div>

				<div className="text-gray-600 body-font">
					<div className="container px-5 py-10 mx-auto flex flex-wrap">
						<div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
							<div className="h-full w-6 absolute inset-0 flex items-center justify-center">
								<div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
							</div>
							<div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-purple text-white relative z-10 title-font font-medium text-sm font-sans">1</div>
							<div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
								<div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-purple rounded-full inline-flex items-center justify-center">
									<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
										<path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
									</svg>
								</div>
								<div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
									<h2 className="font-medium title-font text-gray-900 mb-1 text-xl">Find a Space</h2>
									<p className="leading-relaxed">Select a location from our curated list of venues</p>
								</div>
							</div>
						</div>
						<div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
							<div className="h-full w-6 absolute inset-0 flex items-center justify-center">
								<div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
							</div>
							<div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-purple text-white relative z-10 title-font font-medium text-sm font-sans">2</div>
							<div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
								<div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-purple rounded-full inline-flex items-center justify-center">
									<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
										<path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
									</svg>
								</div>
								<div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
									<h2 className="font-medium title-font text-gray-900 mb-1 text-xl">Book & Pay</h2>
									<p className="leading-relaxed">Simple agreement, signed digitally & transparent pricing</p>
								</div>
							</div>
						</div>
						<div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
							<div className="h-full w-6 absolute inset-0 flex items-center justify-center">
								<div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
							</div>
							<div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-purple text-white relative z-10 title-font font-medium text-sm font-sans">3</div>
							<div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
								<div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-purple rounded-full inline-flex items-center justify-center">
									<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
										<path strokeLinecap="round" strokeLinejoin="round" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
									</svg>
								</div>
								<div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
									<h2 className="font-medium title-font text-gray-900 mb-1 text-xl">Customize Your Store</h2>
									<p className="leading-relaxed">Choose your store layout and select from our list of add-on services</p>
								</div>
							</div>
						</div>
						<div className="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
							<div className="h-full w-6 absolute inset-0 flex items-center justify-center">
								<div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
							</div>
							<div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-purple text-white relative z-10 title-font font-medium text-sm font-sans">4</div>
							<div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
								<div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-purple rounded-full inline-flex items-center justify-center">
									<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
										<path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
									</svg>
								</div>
								<div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
									<h2 className="font-medium title-font text-gray-900 mb-1 text-xl">Launch Your Store</h2>
									<p className="leading-relaxed">Bring your product, team, ideas and head over to your store</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section id="brands" className="py-10 px-10 md:px-40 bg-black justify-center">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<div className="grid grid-cols-2 gap-4">
						<h1 className="pb-2 col-span-2 text-2xl md:text-4xl font-light text-center text-light-white">LiteStore<sup>®</sup>, Orion Mall</h1>
						<Link href="/spaces/orion/wow">
							<a>
								<Image
									className="rounded-lg "
									src={wow}
									alt="Wow" />
							</a>
						</Link>
						<Link href="/spaces/orion/sleepycat">
							<a>
								<Image
									className="rounded-lg"
									src={sleepycat}
									alt="SleepyCat" />
							</a>
						</Link>
						<div className="px-[25%] col-span-2">
							<Link href="/spaces/orion/thepantproject">
								<a>
									<Image
										className="rounded-lg"
										src={tpp}
										alt="The Pant Project" />
								</a>
							</Link>
						</div>
					</div>
					<div className="grid grid-cols-2 gap-4">
						<h1 className="pb-2 col-span-2 text-2xl md:text-4xl font-light text-center text-light-white">LiteStore<sup>®</sup>, Garuda Mall</h1>
							<Link href="/spaces/garuda/mensxp">
								<a>
									<Image
										className="rounded-lg"
										src={mensxp}
										alt="MensXp" />
								</a>
							</Link>
							<Link href="/spaces/garuda/vitro">
								<a>
									<Image
										className="rounded-lg"
										src={vitro}
										alt="Vito Naturals" />
								</a>
							</Link>
						
						<div>
							<Image
								className="rounded-lg invisible"
								src={vitro}
								alt="Vito Naturals" />
						</div>
					</div>
				</div>
			</section>

			


			<Footer />
		</div>
	)
}