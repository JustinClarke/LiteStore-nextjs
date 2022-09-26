import Head from 'next/head'

import Header from '../layout/Header'
import Footer from '../layout/Footer'

const puneet = '/team/puneet.webp'
const tarun = '/team/tarun.webp'
const gaurav = '/team/gaurav.webp'
const justin = '/team/justin.webp'
const karen = '/team/karen.webp'

export default function company() {
    return (
        <div>
            <Head>
                <title>Company | LiteStore</title>
                <meta name="og:title" content="Company | LiteStore" />
                <meta name="twitter:title" content="Company | L3iteStore" />
                <meta property="og:title" content="Company | LiteStore" />
            </Head>
            <Header />
            <section className="bg-light-white">
                <div data-aos="fade-up" data-aos-delay="100" className="px-8 md:px-80 pt-5 md:pt-10 pb-10 font-light text-justify">
                    <h1 className="text-4xl font-medium">What we do</h1>
                    <p className="pt-5">
                        After co-riding, co-living and co-working, LiteStore® introduces co-retail. We offer premium retail storefronts for flexible bookings so that brands can bring their products to life and make a splash. The store becomes a destination with customers left wondering what their favorite digital brands are doing offline!
                    </p>
                    <p className="pt-5">
                        We believe the future of retail is all about experiences within the store, rather than just buy and go. We work with the best designers to ensure that each store captures the brand identity, without all the hassles of setting up a long term store.
                    </p>
                    <p className="pt-5">
                        With LiteStore®, you can now meet your favorite brands and the people who love them, in person.
                    </p>
                    <h1 className="text-4xl font-semibold pt-10 text-center">Who We Are</h1>
                </div>

                <div className="px-0 md:px-60 pb-10">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div data-aos="fade-up" data-aos-delay="300" className="p-2 md:p-0 flex justify-center">
                            <div className="rounded-lg shadow-lg bg-white max-w-lg">
                                <a href="#">
                                    <img src={puneet} className="rounded-t-lg" alt="Puneet Dinesh" />
                                </a>
                                <div className="p-6">
                                    <h5 className="text-purple text-xl text-center font-semibold">Puneet Dinesh</h5>
                                    <h5 className="text-lg text-center font-semibold mb-2">Co-founder</h5>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="300" className="p-2 md:p-0 flex justify-center">
                            <div className="rounded-lg shadow-lg bg-white max-w-lg">
                                <a href="#">
                                    <img src={tarun} className="rounded-t-lg" alt="Tarun Sundaram" />
                                </a>
                                <div className="p-6">
                                    <h5 className="text-purple text-xl text-center font-semibold">Tarun Sundaram</h5>
                                    <h5 className="text-lg text-center font-semibold mb-2">Co-founder</h5>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10">
                        <div data-aos="fade-up" data-aos-delay="300" className="flex justify-center">
                            <div className="rounded-lg shadow-lg bg-white max-w-sm">
                                <a href="#">
                                    <img src={karen} className="rounded-t-lg" alt="Karen Justus" />
                                </a>
                                <div className="p-6">
                                    <h5 className="text-purple text-xl text-center font-semibold">Karen Justus</h5>
                                    <h5 className="text-lg text-center font-semibold mb-2">Head | Brand Operations</h5>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="300" className="flex justify-center">
                            <div className="rounded-lg shadow-lg bg-white max-w-sm">
                                <a href="#">
                                    <img src={gaurav} className="rounded-t-lg" alt="Gaurav" />
                                </a>
                                <div className="p-6">
                                    <h5 className="text-purple text-xl text-center font-semibold">Gaurav Kapoor</h5>
                                    <h5 className="text-lg text-center font-semibold mb-2">Head | Retail Operations</h5>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="300" className="flex justify-center">
                            <div className="rounded-lg shadow-lg bg-white max-w-sm">
                                <a href="#">
                                    <img src={justin} className="rounded-t-lg" alt="Justin Clarke" />
                                </a>
                                <div className="p-6">
                                    <h5 className="text-purple text-xl text-center font-semibold">Justin Clarke</h5>
                                    <h5 className="text-lg text-center font-semibold mb-2">React Developer</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

