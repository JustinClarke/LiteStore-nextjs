import Head from 'next/head'

import Header from '../layout/Header'
import Footer from '../layout/Footer'

export default function careers() {
    return (
        <div>
            <Head>
                <title>Careers | LiteStore</title>
                <meta name="description" content="Careers | LiteStore" />
                <meta name="twitter:title" content="Careers | LiteStore" />
                <meta property="og:title" content="Careers | LiteStore" />
            </Head>
            <Header />
            <section className="bg-light-white">
                <div data-aos="fade-up" data-aos-delay="100" className="px-8 md:px-80 pt-5 md:pt-10 pb-10 font-light text-justify">
                    <h1 className="text-4xl font-medium">Why work with us?</h1>
                    <p className="pt-5">
                        As India's first online marketplace for short term retail
                        spaces, we are working in exciting, uncharted territory.
                        We believe in bringing people together - not only as a
                        company, but in the workplace as well. We are a team of
                        self-starters who lift each other up and bring ideas to life, together.
                    </p>
                    <p className="pt-5">
                        We believe in creating a healthy company culture where people
                        are excited to come into work everyday and make an impact. If
                        this sounds like something you would like to be a part of, please
                        get in touch! We would love to speak to you.
                    </p>
                    <p className="pt-5">
                        Tell us what you are passionate about at: <a className="text-purple font-semibold" href="mailto:support@litestore.in">support@litestore.in</a>
                    </p>

                    <div className="grid pt-10">
                        <table className="border border-gray-200 text-gray-900 text-lg text-left">
                            <tbody>
                                <tr>
                                    <td className="px-6 py-4 border-b w-full rounded-t-lg">
                                        Graphic Designer, Bangalore
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 border-b w-full rounded-t-lg">Leasing Partner, Bangalore</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 border-b w-full rounded-t-lg">Marketing and Advertising Consultants, Bangalore</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 border-b w-full rounded-t-lg">Account Manager, Bangalore</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 border-b w-full rounded-t-lg">Retail Design Strategist, Bangalore</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}
