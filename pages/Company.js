import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import puneet from '../public/images/team/puneet.webp'
import tarun from '../public/images/team/tarun.jpg'
import pranav from '../public/images/team/pranav.webp'

import Header from './layout/Header'
import Footer from './layout/Footer'

function Company() {
    return (
        <div>
            <Head>
                <title>Company | LiteStore</title>
                <meta name="description" content="LiteStore" />
                <link rel="icon" href="/favicon.ico" />
                <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
            </Head>
            <Header />
            <div className="px-10 md:px-80 md:pt-10 pb-10 font-light text-center">
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
                <h1 className="text-4xl font-semibold pt-5">Who We Are</h1>
            </div>

            <div className="container mx-auto pb-10">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
                    <div className="flex justify-center">
                        <div class="rounded-lg shadow-lg bg-white max-w-sm">
                            <a href="#!">
                                <Image src={puneet} className="rounded-t-lg" alt="Puneet Dinesh" />
                            </a>
                            <div className="p-6">
                                <h5 className="text-purple text-xl text-center font-semibold mb-2">Puneet Dinesh</h5>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="rounded-lg shadow-lg bg-white max-w-sm">
                            <a href="#!">
                                <Image src={pranav} className="rounded-t-lg" alt="Pranav Agarwal" />
                            </a>
                            <div className="p-6">
                                <h5 className="text-purple text-xl text-center font-semibold mb-2">Pranav Agarwal</h5>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="rounded-lg shadow-lg bg-white max-w-sm">
                            <a href="#!">
                                <Image src={tarun} className="rounded-t-lg" alt="Tarun Sundaram" />
                            </a>
                            <div className="p-6">
                                <h5 className="text-purple text-xl text-center font-semibold mb-2">Tarun Sundaram</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="pb-10">
                <div className="flex justify-center">
                    <div class="rounded-lg shadow-lg bg-white max-w-sm">
                        <a href="#!">
                        <Image src={puneet} className="rounded-t-lg" alt="Puneet Dinesh"/>
                        </a>
                        <div className="p-6">
                            <h5 className="text-gray-900 text-xl text-center font-medium mb-2">Card title</h5>
                        </div>
                    </div>
                </div>
            </div> */}
            <Footer />
        </div>
    )
}

export default Company