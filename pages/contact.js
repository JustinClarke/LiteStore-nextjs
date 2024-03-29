import Head from 'next/head'
import Link from 'next/link'

import { useState } from 'react';

import axios from 'axios';

import Header from './layout/Header'
import Footer from './layout/Footer'

export default function Contact() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		const objt = { name, email, message };
		axios
			.post(
				'https://sheet.best/api/sheets/31835dc6-39e3-4004-bf0f-1ba409fe965a',
				objt
			)
			.then((response) => {
				console.log(response);
			});
	};

	return (
		<div>
			<Head>
				<title>Contact | LiteStore</title>
				<meta name="og:title" content="Contact | LiteStore" />
				<meta name="twitter:title" content="Contact | LiteStore" />
				<meta property="og:title" content="Contact | LiteStore" />
			</Head>
			<Header />

			<section data-aos="fade" data-aos-delay="50" className="text-gray-600 body-font relative">
				<div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
					<div className="md:w-2/3 bg-gray-300 rounded-lg overf	low-hidden sm:mr-10 p-10 flex items-end justify-start relative">
						<iframe data-aos="fade" data-aos-delay="500" width="100%" height="100%" className="absolute inset-0" style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.4)' }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8876943059986!2d77.63954109264365!3d12.979034261679734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae172f4076812b%3A0x4b2e99c6f215ed28!2sLiteStore!5e0!3m2!1sen!2suk!4v1674335630705!5m2!1sen!2suk" />
						<div data-aos="fade-up" data-aos-delay="100" className="grid grid-cols-2 bg-white relative py-6 rounded shadow-md transition ease-in-out delay-100 duration-300 hover:-translate-y-1 hover:scale-105">
							{/* <div className="lg:w-1/2 px-6"> */}
							<div className="px-6">
								<h2 className="title-font font-semibold text-gray-900 tracking-widest text-base">ADDRESS</h2>
								<p className="mt-1">
									#11, 7th Main Road,
									<br />KHM Block, RT Nagar
									<br />Bangalore 560032
								</p>
							</div>
							{/* <div className="lg:w-1/2 px-6 mt-4 lg:mt-0"> */}
							<div>
								<h2 className="title-font font-semibold text-gray-900 tracking-widest text-base">EMAIL</h2>
								<a className="text-purple leading-relaxed" href="mailto:support@litestore.in">support@litestore.in</a>
								<h2 className="title-font font-semibold text-gray-900 tracking-widest text-base mt-1">PHONE</h2>
								<p className="font-mono leading-relaxed">+91 9483465923</p>
							</div>
						</div>
					</div>
					<form className="md:w-1/3 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
						<h1 data-aos="fade-up" data-aos-delay="100" className="font-bold text-3xl">GET IN TOUCH</h1>
						<p data-aos="fade-up" data-aos-delay="100" className="leading-relaxed mb-5 text-gray-600">We would love to hear from you!</p>
						<div data-aos="fade-up" data-aos-delay="100" className="relative mb-4">
							<label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
							<input onChange={e => setName(e.target.value)} type="text" id="name" name="name" className="w-full appearance-none block text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500 hover:border-gray-500 transition ease-in-out delay-10 duration-200" />
						</div>
						<div data-aos="fade-up" data-aos-delay="100" className="relative mb-4">
							<label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
							<input onChange={e => setEmail(e.target.value)} type="email" id="email" name="email" className="w-full appearance-none block text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500 hover:border-gray-500 transition ease-in-out delay-10 duration-200" />
						</div>
						<div data-aos="fade-up" data-aos-delay="100" className="relative mb-4">
							<label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
							<textarea onChange={e => setMessage(e.target.value)} id="message" name="message" rows="5" className="w-full 	 appearance-none block text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500 hover:border-gray-500 transition ease-in-out delay-10 duration-200" defaultValue={""} />
						</div>
						<Link href="/utilities/success">
							<button data-aos="fade-up" data-aos-delay="100" onClick={handleSubmit} type="submit" className="text-white text-center bg-purple border-0 py-2 px-6 focus:outline-none hover:bg-darker-purple rounded text-lg active:bg-black font-medium transition ease-in-out delay-10 duration-200 hover:-translate-y-1 hover:scale-105">
								Send Message
							</button>
						</Link>
						{/* <p className="text-xs text-gray-500 mt-3">Message Sent</p> */}
					</form>
				</div>
			</section>


			<Footer />
		</div>
	)
}