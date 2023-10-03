'use client'
import React from 'react'
import { Table, TableBody, TableCell, TableHeader, TableRow, TableHead } from '../../components/ui/table'
import Link from 'next/link'
import Footer from '../layout/Footer'
import Header from '../layout/Header'
import Head from 'next/head'

const InvestorRelations = () => {
    const reports = [
        {
            name: 'AGM 2023',
            docx: '/files/agm-2023.docx',
            pdf: '/files/agm-2023.pdf'

        }
    ]

    return (<div>
        <Head>
            <title>Privacy Policy | LiteStore</title>
            <meta name="og:title" content="Privacy Policy | LiteStore" />
            <meta property="og:title" content="Privacy Policy | LiteStore" />
        </Head>
        <Header />
        <section className='container px-8 md:px-80 pt-5 md:pt-10 pb-10 font-light  text-justify'>
            <h1 className="text-3xl pb-5">
                Investor Relations
            </h1>


            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Report</TableHead>
                        <TableHead>DOCX Version</TableHead>
                        <TableHead>PDF Version</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        reports.map((report, index) => <TableRow key={index}>
                            <TableCell className="font-medium">{report?.name}</TableCell>
                            <TableCell>
                                <Link href={report?.docx}>Download
                                </Link>
                            </TableCell>
                            <TableCell><Link href={report?.docx}>Download
                            </Link></TableCell>
                        </TableRow>)
                    }
                </TableBody>
            </Table>

        </section>
        <Footer />
    </div>
    )
}

export default InvestorRelations