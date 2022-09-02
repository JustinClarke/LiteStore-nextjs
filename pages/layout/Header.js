import Link from 'next/link'

export default function header() {
	return (
		<header className="sticky top-0 z-50 flex flex-wrap pt-3 md:pt-0 sm:justify-start sm:flex-nowrap w-full bg-white shadow-md text-sm">
			<nav className="md:px-40 lg:px-20 xl:px-40 mx-auto w-full sm:flex sm:items-center sm:justify-between" aria-label="Global">
				<Link href="/">
					<a className="px-3 flex-none text-4xl text-purple transition ease-in-out delay-10 duration-500 hover:scale-110">LiteStore</a>
				</Link>
				<div className="flex flex-row items-center sm:justify-end sm:mt-0 sm:pl-5">
					<Link href="/spaces">
						<a className="p-3 md:p-6 font-light hover:text-white hover:bg-purple transition ease-in-out delay-20 duration-300">Find a Space</a>
					</Link>
					<Link href="/about/company">
						<a className="p-3 md:p-6 font-light hover:text-white hover:bg-purple transition ease-in-out delay-20 duration-300">Company</a>
					</Link>
					<Link href="/about/contact">
						<a className="p-3 md:p-6 font-light hover:text-white hover:bg-purple transition ease-in-out delay-20 duration-300">Contact Us</a>
					</Link>
				</div>
			</nav>
		</header>
	)
}

