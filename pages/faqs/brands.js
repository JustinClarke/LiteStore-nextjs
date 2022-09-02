import Head from 'next/head'
import Link from 'next/link'

import * as React from 'react';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { Header, Footer } from '../layout'

import data from './utils/data'

export default function brands() {
    return (
        <div>
            <Head>
                <title>FAQs | LiteStore</title>
                <meta name="og:title" content="LiteStore" />
            </Head>
            <Header />
            <div className="px-5 md:px-40">
                <div className="grid grid-cols-1 md:grid-cols-3 py-5">
                    <h1 data-aos="fade-up" className="col-span-1 pt-5 text-6xl font-semibold"><span className="text-purple">Brands</span> FAQs</h1>
                    <div data-aos="fade-up" className="col-span-1 md:col-span-2 text-gray-600 body-font">
                        <div className="container py-5">
                            <div className="flex flex-wrap -m-4 text-center justify-end">
                                <Link href="/faqs/general">
                                    <a className="p-2 md:p-4 w-full md:w-auto">
                                        <div className="border-2 border-gray-200 px-2 py-2 md:px-4 md:py-4 rounded-lg transition ease-in-out delay-10 duration-200 hover:-translate-y-1 hover:scale-110">
                                            <p className="leading-relaxed">General FAQs</p>
                                        </div>
                                    </a>
                                </Link>
                                <Link href="/faqs/landowners">
                                    <a className="p-2 md:p-4 w-full md:w-auto">
                                        <div className="border-2 border-gray-200 px-2 py-2 md:px-4 md:py-4 rounded-lg transition ease-in-out delay-10 duration-200 hover:-translate-y-1 hover:scale-110">
                                            <p className="leading-relaxed">Landowners FAQs</p>
                                        </div>
                                    </a>
                                </Link>
                                <Link href="/faqs/services">
                                    <a className="p-2 md:p-4 w-full md:w-auto">
                                        <div className="border-2 border-gray-200 px-2 py-2 md:px-4 md:py-4 rounded-lg transition ease-in-out delay-10 duration-200 hover:-translate-y-1 hover:scale-110">
                                            <p className="leading-relaxed">Services FAQs</p>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <h2 data-aos="fade-up" className="pb-2 text-3xl text-darker-purple font-semibold">How it works?</h2>
                <div data-aos="fade-up" className="pb-10">
                    {data[2].howitworks.map(({ question, answer }, key) => (
                        <Accordion key={key} className="transition ease-in-out delay-10 duration-500 hover:-translate-y-1 hover:scale-102 hover:text-purple">
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <p className="text-xl">
                                    {question}
                                </p>
                            </AccordionSummary>
                            <AccordionDetails>
                                <p className="text-justify">{answer}</p>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </div>

                <h2 data-aos="fade-up" className="pb-2 text-3xl text-darker-purple font-semibold">Booking a Space</h2>
                <div data-aos="fade-up" className="pb-10">
                    {data[2].booking.map(({ question, answer }, key) => (
                        <Accordion key={key} className="transition ease-in-out delay-10 duration-500 hover:-translate-y-1 hover:scale-102 hover:text-purple">
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <p className="text-xl">
                                    {question}
                                </p>
                            </AccordionSummary>
                            <AccordionDetails>
                                <p className="text-justify">{answer}</p>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </div>

                <h2 data-aos="fade-up" className="pb-2 text-3xl text-darker-purple font-semibold">Legal Questions</h2>
                <div data-aos="fade-up" className="pb-10">
                    {data[2].legal.map(({ question, answer }, key) => (
                        <Accordion key={key} className="transition ease-in-out delay-10 duration-500 hover:-translate-y-1 hover:scale-102 hover:text-purple">
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <p className="text-xl">
                                    {question}
                                </p>
                            </AccordionSummary>
                            <AccordionDetails>
                                <p className="text-justify">{answer}</p>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </div>

                <h2 data-aos="fade-up" className="pb-2 text-3xl text-darker-purple font-semibold">Payments</h2>
                <div data-aos="fade-up" className="pb-10">
                    {data[2].payments.map(({ question, answer }, key) => (
                        <Accordion key={key} className="transition ease-in-out delay-10 duration-500 hover:-translate-y-1 hover:scale-102 hover:text-purple">
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <p className="text-xl">
                                    {question}
                                </p>
                            </AccordionSummary>
                            <AccordionDetails>
                                <p className="text-justify">{answer}</p>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </div>

            </div>
            <Footer />
        </div>
    )
}