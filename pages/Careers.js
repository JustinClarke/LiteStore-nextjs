import Head from 'next/head'

import Header from './layout/Header'
import Footer from './layout/Footer'

function Careers() {
    return (
        <div>
            <Head>
				<title>Careers | LiteStore</title>
				<meta name="description" content="LiteStore" />
				<link rel="icon" href="/favicon.ico" />
				<link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
			</Head>
            <Header />
            <div className="px-10 md:px-60 md:pt-10 pb-10 font-light">
                <h1 className="text-4xl">Why work with us?</h1>
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

                <div class="flex pt-10">
                    <table className="bg-white rounded-lg border border-gray-200 text-gray-900 text-lg">
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
            <Footer />
        </div>
    )
}

export default Careers