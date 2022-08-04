import Head from 'next/head'
import { data } from './utils/content';

import * as React from 'react';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Header from '../layout/Header'
import Footer from '../layout/Footer'

export default function general() {
    return (
        <div>
            <Head>
                <title>FAQs | LiteStore</title>
                <meta name="description" content="LiteStore" />
            </Head>
            <Header />
            <h1 data-aos="fade-up" className="px-5 md:px-40 py-5 text-6xl font-semibold"><span className="text-purple">General</span> FAQs</h1>
            <div data-aos="fade-up" className="px-5 md:px-40 pb-10 text-justify">
                {data[0].general.map(({ question, answer }) => (
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
            <Footer />
        </div>
    )
}