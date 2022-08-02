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
				<meta name="description" content="LiteStore" />
			</Head>
			<Header />

			<section className="text-gray-600 body-font relative">
				<div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
					<div className="md:w-2/3 bg-gray-300 rounded-lg overf	low-hidden sm:mr-10 p-10 flex items-end justify-start relative">
						<iframe width="100%" height="100%" className="absolute inset-0" style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.4)' }} frameBorder={0} title="map" marginHeight={0} marginWidth={0} scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15553.040683593823!2d77.63189588526959!3d12.955196715429485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1411c78f31e7%3A0xde911cf5a1a0eec3!2sBengaluru%2C%20Karnataka%20560071!5e0!3m2!1sen!2sin!4v1659109973378!5m2!1sen!2sin" />
						<div className="bg-white relative flex flex-wrap py-6 rounded shadow-md transition ease-in-out delay-100 duration-300 hover:-translate-y-1 hover:scale-105">
							<div className="lg:w-1/2 px-6">
								<h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
								<p className="mt-1">#58, Domlur Layout, Bangalore-71</p>
							</div>
							<div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
								<h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
								<a className="text-purple leading-relaxed" href="mailto:support@litestore.in">support@litestore.in</a>
								<h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
								<p className="font-mono leading-relaxed">+91 948 346 5923</p>
							</div>
						</div>
					</div>
					<form className="md:w-1/3 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
						<h1 className="font-bold text-3xl">GET IN TOUCH</h1>
						<p className="leading-relaxed mb-5 text-gray-600">We would love to hear from you!</p>
						<div className="relative mb-4">
							<label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
							<input onChange={e => setName(e.target.value)} type="text" id="name" name="name" className="w-full appearance-none block text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500 hover:border-gray-500 transition ease-in-out delay-10 duration-200" />
						</div>
						<div className="relative mb-4">
							<label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
							<input onChange={e => setEmail(e.target.value)} type="email" id="email" name="email" className="w-full appearance-none block text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500 hover:border-gray-500 transition ease-in-out delay-10 duration-200" />
						</div>
						<div className="relative mb-4">
							<label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
							<textarea onChange={e => setMessage(e.target.value)} id="message" name="message" rows="5" className="w-full 	 appearance-none block text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500 hover:border-gray-500 transition ease-in-out delay-10 duration-200" defaultValue={""} />
						</div>
						<Link href="/utilities/success">
							<button onClick={handleSubmit} type="submit" className="text-white text-center bg-purple border-0 py-2 px-6 focus:outline-none hover:bg-darker-purple rounded text-lg active:bg-black font-medium transition ease-in-out delay-10 duration-200 hover:-translate-y-1 hover:scale-105">
								Send Message
							</button>
						</Link>
						{/* <p class="text-xs text-gray-500 mt-3">Message Sent</p> */}
					</form>
				</div>
			</section>


			<Footer />
		</div>
	)
}