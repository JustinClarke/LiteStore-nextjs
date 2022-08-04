import Head from 'next/head'
import { data } from './utils/content';

import * as React from 'react';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Header from '../layout/Header'
import Footer from '../layout/Footer'

export default function landowners() {
    return (
        <div>
            <Head>
                <title>FAQs | LiteStore</title>
                <meta name="description" content="LiteStore" />
            </Head>
            <Header />
            <div className="px-5 md:px-40 py-5">
                <h1 data-aos="fade-up" className="py-5 text-6xl font-semibold"><span className="text-purple">Landowners</span> FAQs</h1>

                <h2 data-aos="fade-up" className="pb-2 text-3xl text-darker-purple font-semibold">General</h2>
                <div data-aos="fade-up" className="pb-10 text-justify">
                    {data[1].general.map(({ question, answer }) => (
                        <Accordion key={general.id}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <p className="text-xl hover:text-purple font-medium transition ease-in-out delay-10 duration-200">
                                    {question}
                                </p>
                            </AccordionSummary>
                            <AccordionDetails>
                                {answer}
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </div>

                <h2 data-aos="fade-up" className="pb-2 text-3xl text-darker-purple font-semibold">How it works?</h2>
                <div data-aos="fade-up" className="pb-10 text-justify">
                    {data[1].howitworks.map(({ question, answer }) => (
                        <Accordion key={howitworks.id}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <p className="text-xl hover:text-purple font-medium transition ease-in-out delay-10 duration-200">
                                    {question}
                                </p>
                            </AccordionSummary>
                            <AccordionDetails>
                                {answer}
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </div>

                <h2 data-aos="fade-up" className="pb-2 text-3xl text-darker-purple font-semibold">Legal Questions</h2>
                <div data-aos="fade-up" className="pb-10 text-justify">
                    {data[1].legal.map(({ question, answer }) => (
                        <Accordion key={legal.id}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <p className="text-xl hover:text-purple font-medium transition ease-in-out delay-10 duration-200">
                                    {question}
                                </p>
                            </AccordionSummary>
                            <AccordionDetails>
                                {answer}
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </div>

                <h2 data-aos="fade-up" className="pb-2 text-3xl text-darker-purple font-semibold">Payments</h2>
                <div data-aos="fade-up" className="pb-10 text-justify">
                    {data[1].payments.map(({ question, answer }) => (
                        <Accordion key={payments.id}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <p className="text-xl hover:text-purple font-medium transition ease-in-out delay-10 duration-200">
                                    {question}
                                </p>
                            </AccordionSummary>
                            <AccordionDetails>
                                {answer}
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </div>

            </div>
            <Footer />
        </div>
    )
}