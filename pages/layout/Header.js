import Link from 'next/link'

function header() {
	return (
		<header className="sticky top-0 z-50 flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-4">
			<nav className="px-10 md:px-40 mx-auto w-full sm:flex sm:items-center sm:justify-between" aria-label="Global">
				<Link href="/">
					<a className="flex-none text-4xl text-purple">LiteStore</a>
				</Link>
				<div className="flex flex-row items-center gap-5 mt-5 sm:justify-end sm:mt-0 sm:pl-5">
					<Link href="/spaces">
						<a className="font-light hover:font-medium">Find a Space</a>
					</Link>
					<Link href="/company">
						<a className="font-light hover:font-medium">Company</a>
					</Link>
					<Link href="/contactus">
						<a className="font-light hover:font-medium">Contact Us</a>
					</Link>
				</div>
			</nav>
		</header>
	)
}

export default header