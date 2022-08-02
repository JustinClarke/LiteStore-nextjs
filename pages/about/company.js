import Head from 'next/head'

import Header from '../layout/Header'
import Footer from '../layout/Footer'

const puneet = '/images/team/puneet.webp'
const tarun = '/images/team/tarun.jpg'
const pranav = '/images/team/pranav.webp'

export default function company() {
    return (
        <div>
            <Head>
                <title>Company | LiteStore</title>
				<meta name="description" content="Company | LiteStore" />
				<meta name="twitter:title" content="Company | LiteStore" />
				<meta property="og:title" content="Company | LiteStore" />
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
            <div className="px-8 md:px-80 pt-5 md:pt-10 pb-10 font-light text-justify bg-light-white">
                <h1 className="text-4xl font-medium">What we do</h1>
                <p className="pt-5">
                    After co-riding, co-living and co-working, LiteStore® introduced co-retail. We offer premium retail storefronts for flexible bookings so that brands can bring their products to life and make a splash. The store becomes a destination with customers left wondering what their favorite digital brands are doing offline!
                </p>
                <p className="pt-5">
                    We believe the future of retail is all about experiences within the store, rather than just buy and go. We work with the best designers to ensure that each store captures the brand identity, without all the hassles of setting up a long term store.
                </p>
                <p className="pt-5">
                    With LiteStore®, you can now meet your favorite brands and the people who love them, in person.
                </p>
                <h1 className="text-4xl font-semibold pt-10 text-center">Who We Are</h1>
            </div>

            <div className="px-0 md:px-60 pb-10 bg-light-white">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
                    <div className="flex justify-center">
                        <div className="rounded-lg shadow-lg bg-white max-w-sm">
                            <a href="#">
                                <img src={puneet} className="rounded-t-lg" alt="Puneet Dinesh" />
                            </a>
                            <div className="p-6">
                                <h5 className="text-purple text-xl text-center font-semibold mb-2">Puneet Dinesh</h5>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="rounded-lg shadow-lg bg-white max-w-sm">
                            <a href="#">
                                <img src={pranav} className="rounded-t-lg" alt="Pranav Agarwal" />
                            </a>
                            <div className="p-6">
                                <h5 className="text-purple text-xl text-center font-semibold mb-2">Pranav Agarwal</h5>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="rounded-lg shadow-lg bg-white max-w-sm">
                            <a href="#">
                                <img src={tarun} className="rounded-t-lg" alt="Tarun Sundaram" />
                            </a>
                            <div className="p-6">
                                <h5 className="text-purple text-xl text-center font-semibold mb-2">Tarun Sundaram</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

