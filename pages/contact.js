import Head from 'next/head'

import Header from './layout/Header'
import Footer from './layout/Footer'

function contact() {
	return (
		<div>
			<Head>
				<title>Contact | LiteStore</title>
				<meta name="description" content="LiteStore" />
			</Head>
			<Header />
			<div className="flex pt-20 text-black text-center bg-light-white">
				<div className="mx-auto">
					<h1 className="font-bold text-3xl ">GET IN TOUCH</h1>
					<h2 className="text-lg">We would love to hear from you!</h2>

					<form className="px-10 md:px-40 w-full pt-10 pb-10">
						<div className="flex flex-wrap -mx-3 mb-6">
							<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
								{/* <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
									First Name
								</label> */}
								<input className="appearance-none block w-full bg-light-white text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500 hover:border-gray-500 transition ease-in-out delay-150 duration-200" id="grid-first-name" type="text" placeholder="Name" />
								{/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
							</div>
							<div className="w-full md:w-1/2 px-3">
								<input className="appearance-none block w-full bg-light-white text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500 hover:border-gray-500 transition ease-in-out delay-150 duration-200" id="grid-email" type="email" placeholder="Email" />
							</div>
						</div>
						<div className="flex flex-wrap -mx-3 mb-6">
							<div className="w-full px-3">
								<input className="appearance-none block w-full bg-light-white text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500 hover:border-gray-500 transition ease-in-out delay-150 duration-200" id="grid-text" type="text" placeholder="Subject" />
							</div>
						</div>
						<div className="flex flex-wrap -mx-3 mb-6">
							<div className="w-full px-3">
								<textarea className="appearance-none block w-full bg-light-white text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500 hover:border-gray-500 transition ease-in-out delay-150 duration-200" id="grid-text" type="text" rows="4" placeholder="Message" />
							</div>
						</div>
						<button className="transition ease-in-out delay-150 duration-200 hover:-translate-y-1 hover:scale-110 hover:bg-black bg-purple text-white py-2 px-4 rounded">
							Send Message
						</button>
					</form>
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default contact