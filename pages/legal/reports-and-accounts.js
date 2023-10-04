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
            name: 'AGM Notice',
            url: '/files/notice_of_agm.pdf'
        },
        {
            name: 'MGT 7A Form',
            url: '/files/form_mgt_7A.pdf'

        }
    ]

    return (<div>
        <Head>
            <title>Reports and Accounts | LiteStore</title>
            <meta name="og:title" content="Reports and Accounts | LiteStore" />
            <meta property="og:title" content="Reports and Accounts | LiteStore" />
        </Head>
        <Header />
        <section className='container px-8 md:px-80 pt-5 md:pt-10 pb-10 font-light  text-justify'>
            <h1 className="text-3xl pb-5">
                Reports and Accounts
            </h1>


            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Report</TableHead>
                        <TableHead></TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        reports.map((report, index) => <TableRow key={index}>
                            <TableCell className="font-medium">{report?.name}</TableCell>
                            <TableCell>
                                <Link href={report?.url}>Download
                                </Link>
                            </TableCell>
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