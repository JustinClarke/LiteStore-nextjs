import Head from 'next/head'
import Link from 'next/link'

const data = [
    {
        // General
        general: [

            {
                key: `1`,
                question: `What does LiteStore® do?`,
                answer: `LiteStore® is India's first online platform for listing, booking commercial retail spaces on an ultra-short-term basis`
            },
            {
                key: `1`,
                question: `How does LiteStore® work?`,
                answer: `Individuals/companies/entities (Brand) can book a space on our platform. These spaces can either be listed directly by Landowners or they could be premium stores operated by LiteStore®.`
            },
            {
                key: `1`,
                question: `Who can use stores listed on our platform?`,
                answer: `The possibilities for using temporary retail spaces are endless. If you want to test a new product or reach out to a different market, create a buzz around your brand to increase awareness or are a brand with a purely digital presence but want to test the Brick & Mortar model, LiteStore®can make it happen. We provide a low cost, hassle free solution to bring all these possibilities to life.`
            },
            {
                key: `1`,
                question: `Does the 'short term retail' market model work?`,
                answer: `Touted to be the 'future of retail', temporary retail spaces in the form of 'pop up' stores have been hugely successful in Australia, France, Spain and USA. It has also been trusted by top brands such as Louis Vuitton,OnePlus & Adidas. With India's thriving retail market and surge in startups and small businesses, small and big brands alike are competing to get customers' attention. In this market, short-term retail with its low investment, hassle-freeand creative model is poised to be the game-changer in marketing and retail.`
            },
        ]
    },
    {
        // Landowners
        general: [
            {
                key: `1`,
                question: `Why should I list my space on LiteStore®.in?`,
                answer: `We connect you to many brands on the lookout for short term retail spaces.
                We provide you the opportunity to create revenues during vacancies, increase discovery & exposure to brands
                We assist you in enteringinto risk-free simplified legal agreements.`
            },
            {
                key: `1`,
                question: `Do I get any complimentary services for listing my space on LiteStore®.in?`,
                answer: `Yes. Currently, listing your space on our platform is completely free. Apart from that, we provide quality branding through our high quality photography.`
            },
            {
                key: `1`,
                question: `How will listing my space on LiteStore®.in affect long term leasing/other business ventures?`,
                answer: `You remain in full control of your property at all times, and retain the right to market it via your existing leasing channels. At LiteStore®, we provide you an extra avenue to discover many brands & retailers and generatemore revenues. No exclusivity is required.`
            },
            {
                key: `1`,
                question: `Can this work while the pandemic is ongoing?`,
                answer: `In the midst of the pandemic, retailers and brands are on the constant look out for flexible stores to minimize their financial risk.
                For every landowner looking to make lemonade from lemons, your otherwise unused space, can be used by a Brand to build their business, while you get to earn additional revenue from it`
            }
        ],
        howitworks: [
            {
                key: `1`,
                question: `Who controls my space after it is listed on LiteStore®.in?`,
                answer: `You will continue to hold complete control over your retail space. The landowner has complete control over deciding the price, duration and the ground rules, provided they meet the guidelines/rules for listing on LiteStore®.`
            },
            {
                key: `1`,
                question: `How do I list my space on LiteStore®.in?`,
                answer: `Listing your space involves just 3 steps!
                        Step 1: Open LiteStore®.in
                        Step 2: Click on List a Space
                        Step 3: Just fill in the form!
                        Our team will get in touch and assist you with the listing. You can mention any extra rooms, details or any facilities attached to the space. It's completely free to list a space!`
            },
            {
                key: `1`,
                question: `What happens after I list my space on LiteStore®.in?`,
                answer: `We will assign you a Realty Partner who will conduct a standard due diligence of your property within 24 hours of reaching out to us.
                We will require you to give an assurance that the property is safe and there areno major leaks, repairs or electrical faults. However, even if your space is in a shell state, don't worry! You can avail our LiteStore® Services to ensure that your space looks presentable.
                Get in touch with our team to know more.`
            },
            {
                key: `1`,
                question: `Can a prospective Brand visit my space before booking it?`,
                answer: `Yes. The Brand can request for either a virtual tour or a physical tour of the space. Our team will ensure that we facilitate the visit at your convenient time.`
            },
            {
                key: `1`,
                question: `What is the minimum duration for offering my space to brands?`,
                answer: `There is no minimum duration for listing your space.
                You can offer your space for a day, a week or a month!`
            },
            {
                key: `1`,
                question: `What is the maximum duration for which I can offer my space on my platform?`,
                answer: `The maximum duration for which you can offer your space on our platform is 3 months with an option of 'extend listing' in accordance with our terms and conditions.`
            },
            {
                key: `1`,
                question: `What is the Landowner dashboard?`,
                answer: `Landowner dashboard is a technology service that we provide to manage your portfolio, bookings and get real-time data of viewings & demand of your space. The linking of your bank account will also happen on this portal.`
            },
            {
                key: `1`,
                question: `Can I offer my space to more than one brand at the same time?`,
                answer: `Yes! Part of LiteStore®'s unique offering is to house multiple Brands in the same store. This creates a diverse and exciting experience for the customer. 
                At the time of listing, you can decide whether you want to offer your space to multiple brands at the same time.`
            }
        ],
        legal: [
            {
                key: `1`,
                question: `Will my business transaction with the client create any security/right/ownership over the space for the retailers/brands?`,
                answer: `No. Our legal agreements ensure that no security/ right/ ownership is created in favour of the Brands.`
            },
            {
                key: `1`,
                question: `Who am I entering into a contract with?`,
                answer: `You will enter into a contract with each Brand that makes a booking. This will include the Usage Terms determined at the time of making the booking. LiteStore® merely administers this with our online leasing system.
                This is in addition to the Listing Terms you must agree to at the time of listing your space on LiteStore®.in.`
            },
            {
                key: `1`,
                question: `Can I make changes to the contract as per my considerations?`,
                answer: `To ensure that brands and retailers have a standardized experience through our platform, both the Landowner and the brands will be entering into a standard agreement which will cover all the potential legal risks.
                Any terms which are unique to a particular booking may form part of the Usage Terms agreed upon at the time of confirming a booking, provided they are in accordance with our terms and conditions.`
            },
            {
                key: `1`,
                question: `How will the agreement be entered into?`,
                answer: `(Step 1)
                The Brand accepts the LiteStore® Terms of Use/License Agreement at the time of making a booking
                ->
                (Step 2)
                Additionally, the Brand fills in information in the Usage Terms (terms which are unique to each booking such as duration, nature of goods/services/ nature of use etc.) 
                ->
                (Step 3)
                LiteStore® will send the proposed Usage Terms to the Landowner who must confirm within 24 hours 
                ->
                (Step 4) 
                Once confirmed, the Landowner and Brand are bound by the Terms of Use/License Terms and the booking is complete with a quick digital sign by both parties. The Brand will make the payment on our website.
                ->
                (Step 5)
                Brands open their store! `
            },
            {
                key: `1`,
                question: `What happens if the Brand causes damage to my retail space?`,
                answer: `From our end, we conduct due diligence regarding the credibility of the Brand. By virtue of entering into the agreements at the time of booking, they are obligated to not make any structural alterations and are requiredto return the space as it was when they booked it. However, in the unfortunate event that there is any damage to the property, we will cover the cost of repairs.`
            },
            {
                key: `1`,
                question: `Will my space be safe from squatters? What if a brand refuses to vacate the space?`,
                answer: `When a brand makes a booking on the LiteStore® platform, they are only granted permission to use the property temporarily. If a brand exceeds the checkout time, they will be liable to pay a penalty fee to the Landowner atthe rate of double the daily cost of booking the space for each day of loss to the Landowner.
                LiteStore® will assist the Landowner in ensuring that Brands check out of the space on time and recovering the penalty fee.`
            },
            {
                key: `1`,
                question: `Can the Brand sub-license the space to other brands?`,
                answer: `The Brand cannot sub-license the space or share it with any other brand. They only have the Right to Use the space for the brand and the purpose as agreed upon in the Terms of Use with the Landowner.`
            }
        ],
        payments: [
            {
                key: `1`,
                question: `Can I charge any amount for the space?`,
                answer: `You can decide the booking cost for a day, a week and a month on your dashboard.
                In the event, the Brand is looking to book for a duration outside the standard framework of a day, a week or a month, our smart pricing technology will instantly generate a pro-rata amount by accounting for variables such as number of weekends, holidaysamongst others to generate a fair market value.`
            },
            {
                key: `1`,
                question: `Can I change the amount I have entered for my space?`,
                answer: `Yes. You are allowed to change the amount as many times you wish on your dashboard. However, once a Brand has made an offer or a booking has been confirmed based on a listed price, you are not allowed to change the amount.
                However, this is not applicable for extended bookings made on our platform.`
            },
            {
                key: `1`,
                question: `What should the booking fee that I charge include?`,
                answer: `Your demanded booking price must be an all-inclusive amount. It should include all utility charges (such as electricity, water, security, wifi and any other facility provided) along with any maintenance charge that willbe used for the specific duration. You are strictly not allowed to charge any amount after the booking has been confirmed.
                Consult our pricing strategy team to fix the market value by reaching out to us at
                support@litestore.in`
            },
            {
                key: `1`,
                question: `How will I receive my payment?`,
                answer: `You will receive the amount within five business days from the day the Brand occupies your space. The amount will be credited through online transfer to the same bank account you would have provided at the time of registration.The payment is strictly done without the involvement or interference of Litestore`
            },
            {
                key: `1`,
                question: `Where will I get an invoice for my booking?`,
                answer: `You can download your invoices instantly from your dashboard on our website.`
            },
            {
                key: `1`,
                question: `Will I receive the entire payout at once?`,
                answer: `The payout schedule as per our standard contract is that for any bookings until 8 weeks, the Brand will make a one time payout that will be credited to the account of the Landowner within five business days.
                If the booking is for a period of more than 8 weeks, the payment can be made in tranches.`
            },
            {
                key: `1`,
                question: `How much does LiteStore® charge?`,
                answer: `Listing a space through LiteStore® is completely free including discovery and photography. We charge a 12% service fee for a successful booking.`
            },
        ]
    },
    {
        // Brands
        howitworks: [
            {
                key: `1`,
                question: `Should the space be used for retail only?`,
                answer: `Spaces at LiteStore® can be used for multiple purposes in a way that brings your idea to life unless the Landowner has an objection or a specific permission ought to be obtained for carrying out the project.
                Example - Preparation or sale of any food & alcoholic beverage products requires a FSSAI license among other permits. At the time of submitting 'Usage Terms' to the Landlord, you will be required to list down your purposesof using the space.`
            },
            {
                key: `1`,
                question: `What happens if my purpose of use of the space changes after I start using the space?`,
                answer: `By virtue of entering into a contract at the time of confirmation, you are bound by the Usage Terms which documents the purpose of use you had mentioned at that time. However, execution of any new idea can be pursued withthe prior approval of the Landowner as per the Contractual Terms. We will facilitate this process for you.`
            },
            {
                key: `1`,
                question: `What is the difference between Listed Spaces and Flagship Spaces?`,
                answer: `Landowners can enter into a business relationship with LiteStore® through two ways.
                Listing your space: Landowners can list their space on our platform and we will connect you to brands & retailers on our LiteStore® platform.
                Flagship Spaces: LiteStore® will exclusively manage the space by licensing it out to multiple brands`
            },
            {
                key: `1`,
                question: `Will you have to bring your own staff/equipment?`,
                answer: `It is up to you. LiteStore® provides staffing as an add-on service. Do check out the LiteStore® Services section for more!`
            },
            {
                key: `1`,
                question: `What expenses will a Brand have to incur, over and above the booking charge?`,
                answer: `The booking charge is inclusive of all costs involved in opening the store. Any operational costs incurred while the store is open which are not covered in the Terms of Use/License Agreement will be borne by the brand.The final booking charge paid by the Brand will include taxes, as applicable.`
            },
            {
                key: `1`,
                question: `What can I expect from the space that I see on LiteStore®.in?`,
                answer: `Our photography will ensure that you get an accurate idea of the space on our site. Further, each of the listed spaces will go through a round of due diligence from our side to ensure that basic amenities such as electricity,water supply & maintenance will be provided. The details on the property page will provide you with information specific to each booking.`
            },
            {
                key: `1`,
                question: `Who takes care of the fittings/furnishing/lighting?`,
                answer: `Each store will be provided in a white label manner with basic lighting and fittings. You can choose LiteStore® Services for anything additional.`
            },
            {
                key: `1`,
                question: `Can I make alterations to the space?`,
                answer: `Spaces are booked "as seen". This means that you agree to book the space in the condition that it is shown in the listing. For most spaces landlords are happy for you to redecorate as long as the space is returned to itsoriginal condition at the end of your booking.
                If there is anything you are unsure about in regards to the decoration, make sure you check with the landlord first or get in touch with our team and we'll look into it for you.`
            },
            {
                key: `1`,
                question: `Can I share the space with any other brand/retailer?`,
                answer: `Yes, LiteStore® offers the option to book the space in collaboration with other brands to improve the offering at your store and build synergies with other businesses.`
            }
        ],
        booking: [
            {
                key: `1`,
                question: `How do I book my space on LiteStore®.in?`,
                answer: `Step 1: Find a space that matches your budget, location and audience.
                Step 2: Type in your preferred dates in the calendar feature and make an enquiry by submitting your proposal to the landlord.
                Step 3: When the Landowner approves, you will receive a confirmation and can make the payment to successfully complete your booking.`
            },
            {
                key: `1`,
                question: `When can I access my space to set it up?`,
                answer: `You can access your space only from the commencement date of your bookingl period and you must vacate the space on the last day of the booking.
                Example - if you book a space on LiteStore®.in from 14th May to 20th May. You will get access to the space only at 09:00 am on 14th May to set it up and you must ensure that the space is returned in the same state at 11:00 PM on 20th May.
                We therefore, advise you to book your space a day in advance to ensure that you set up your space comfortably.`
            },
            {
                key: `1`,
                question: `What is the minimum or the maximum period for booking?`,
                answer: `Minimum period is for 01 day and the maximum period is for 03 months with an option to extend the booking.
                However, for Listed Spaces, the minimum booking period on Listed Spaces will be decided by the Landowner. You can find out the minimum booking period for a space by checking the particular space listing.`
            },
            {
                key: `1`,
                question: `Can I visit a space before booking it?`,
                answer: `Yes. Request a viewing of the store on the booking page and our team will get in touch you. You could choose either a virtual tour or a physical tour of the space.`
            },
            {
                key: `1`,
                question: `Why can I not see the name and the contact details of the Landowners?`,
                answer: `We respect the confidentiality of our brands/entrepreneurs and our Landowners. Just like how we don't share your details to the Landowners prior to the booking being confirmed, we adopt the same policy for the Landownersdetails as well.`
            },
            {
                key: `1`,
                question: `Can I book a store for a day?`,
                answer: `Yes, you can book it for a day. However, note that the access to the space and return of the space will be on the same day.
                Example - If you book a space on LiteStore® on 12th January. You will get access to the space only at 09:00 am on 12th January and you mustvacate the space by 11:00 pm on 12th January.
                We therefore, advise you to book your space a day in advance to ensure that you set up your space comfortably.`
            },
            {
                key: `1`,
                question: `How far in advance can I book?`,
                answer: `You can normally book 2 months in advance. However, please do check the availability for such bookings on our site.`
            },
            {
                key: `1`,
                question: `How quickly can I set up my space?`,
                answer: `Once you raise a request for a space, Landowners will approve the idea within 36 hours and we will contact you to arrange the viewing, if you require one. It can take up to 48-72 hours.`
            },
            {
                key: `1`,
                question: `How will the agreement be entered into? How will the booking get confirmed?`,
                answer: `(Step 1)
                The Brand accepts the LiteStore® Terms of Use/License Agreement at the time of making a booking
                ->
                (Step 2)
                Additionally, the Brand fills in information in the Usage Terms 
                (Terms which are unique to each booking such as duration, nature of goods/services/ nature of use etc.) 
                ->
                (Step 3)
                LiteStore® will send the proposed Usage Terms to the Landowner who must confirm within 24 hours 
                ->
                (Step 4) 
                Once confirmed, the Landowner and Brand are bound by the Terms of Use/License Terms and the booking is complete with a quick digital sign by both parties. The Brand will make the payment on our website.
                ->
                (Step 5)
                Open your very own store! `
            },
            {
                key: `1`,
                question: `Can I extend my booking for a longer time?`,
                answer: `Subject to availability, you can easily extend the booking on our website through your dashboard. Click 'extend booking' and extend your booking based on the information displayed by the Landowner.
                However, if there is no availability because the space is already booked for those days, you can always look at other nearby spaces on our website!`
            }
        ],
        legal: [
            {
                key: `1`,
                question: `Who am I entering into a contract with?`,
                answer: `For Listed Spaces: You will enter into an agreement with each Landowner at the time you make a booking and the Usage Terms are agreed to by the Landowner. The Landowner and the Brandwill be bound by the LiteStore® Terms of Use/License Agreement along with the Usage Terms of each booking.
                For Flagship Spaces: You will enter into an agreement directly with LiteStore® at the time you agree to our Terms of Use/License Terms. Every time you complete a booking and UsageTerms are agreed upon, there is a concluded agreement between you and LiteStore®.`
            },
            {
                key: `1`,
                question: `How safe is my booking with LiteStore®?`,
                answer: `LiteStore® ensures that booking and launching a store is a seamless experience. If for any reason, you are unable to launch your store due to any fault committed by the landowner or LiteStore®, your booking amount will berefunded in accordance with the Refund Policy`
            }
        ],
        payments: [
            {
                key: `1`,
                question: `How much does LiteStore® charge?`,
                answer: `Prices published are inclusive of Utilities, maintenance, basic fixtures and LiteStore®'s service fee (12%).`
            },
            {
                key: `1`,
                question: `Why do I see different prices when I search for different dates?`,
                answer: `We adopt smart pricing technology. This means that the price is adjusted to the demand that is expected during the period you've enquired. If the dates clash with long weekends, holidays - you could expect a higher amountin booking fees. We also adopt staggered pricing. So it's often cheaper to book for longer periods and more expensive for shorter periods.`
            },
            {
                key: `1`,
                question: `Am I required to pay the entire amount at once?`,
                answer: `The payout schedule as per our standard contract is that for any bookings until 8 weeks, you will make a one-time payout that will be credited to the account of the Landowner within five business days.
                If the booking is for a period of more than 8 weeks, the payment can be made in tranches.`
            },
            {
                key: `1`,
                question: `Where can I get my invoice for my booking?`,
                answer: `You can download your invoices instantly from your dashboard on our website.`
            },
        ]
    },
    {
        // Services
        services: [
            {
                key: `1`,
                question: `What are LiteStore® Services?`,
                answer: `They are add on services that you can avail for setting up your pop-up store. Our goal is to make your journey of opening a pop-up store easier, efficient and transparent. So we do all the heavy lifting! While you can concentrateon what you do best!
                We provide:
                ● PoS & other payment systems 
                ● Retail Store design: 
                ● Fit-outs: including signage, rental soft furnishing. 
                ● Staffing: including maintenance & security 
                ● Wifi
                All the above services will be tailor-made for your brand and your marketing strategy.`
            },
            {
                key: `1`,
                question: `How do I book LiteStore® services?`,
                answer: `All LiteStore® services are listed on the website and our essentials can be booked on our site when you book the space.`
            },
            {
                key: `1`,
                question: `How much will I be charged for the LiteStore™ Services?`,
                answer: `You will be charged for the services you subscribe for. Think of it like an amazon cart! However, we adopt a staggered/tiered pricing model. The more services you opt for and the longer the duration you engage our services,the cheaper the cost.`
            },
            {
                key: `1`,
                question: `What if I face any problem with LiteStore™ services?`,
                answer: `Please reach out to us at support@litestore.in. Our team will get in touch with you.`
            },
            {
                key: `1`,
                question: `I'm a service provider and would like to get involved as a partner. How do I get in touch?`,
                answer: `We are always on the lookout for partners who can help us create the best stores for our clients. Please reach out to us at
                support@litestore.in`
            },
            {
                key: `1`,
                question: `What can I expect from the space that I see on LiteStore™.in?`,
                answer: `Our photography will ensure that you get an accurate idea of the space on our site. Further, each of the listed spaces will go through a round of due diligence from our side to ensure that basic amenities such as electricity,water supply & maintenance will be provided. The details on the property page will provide you with information specific to each booking.`
            },
            {
                key: `1`,
                question: `Who takes care of the fittings/furnishing/lighting?`,
                answer: `Each store will be provided in a white label manner with basic lighting and fittings. You can choose LiteStore™ Services for anything additional.`
            },
            {
                key: `1`,
                question: `Can I make alterations to the space?`,
                answer: `Spaces are booked "as seen". This means that you agree to book the space in the condition that it is shown in the listing. For most spaces landlords are happy for you to redecorate as long as the space is returned to itsoriginal condition at the end of your booking. If there is anything you are unsure about in regards to the decoration, make sure you check with the landlord first or get in touch with our team and we'll look into itfor you.`
            },
            {
                key: `1`,
                question: `Can I share the space with any other brand/retailer?`,
                answer: `Yes, LiteStore™ offers the option to book the space in collaboration with other brands to improve the offering at your store and build synergies with other businesses.`
            },
        ]
    }
];

import * as React from 'react';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Header from '../layout/Header'
import Footer from '../layout/Footer'

export default function brands() {
    return (
        <div>
            <Head>
                <title>FAQs | LiteStore</title>
                <meta name="description" content="LiteStore" />
            </Head>
            <Header />
            <div className="px-5 md:px-40">
                <div className="grid grid-cols-1 md:grid-cols-3 py-5">
                    <h1 data-aos="fade-up" className="col-span-1 pt-5 text-6xl font-semibold"><span className="text-purple dark:text-darker-purple">Brands</span> FAQs</h1>
                    <div data-aos="fade-up" className="col-span-1 md:col-span-2 body-font">
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
                        <Accordion key={key} className="transition ease-in-out delay-10 duration-500 hover:-translate-y-1 hover:scale-102 hover:text-purple dark:text-light-white dark:bg-black">
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
                        <Accordion key={key} className="transition ease-in-out delay-10 duration-500 hover:-translate-y-1 hover:scale-102 hover:text-purple dark:text-light-white dark:bg-black">
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
                        <Accordion key={key} className="transition ease-in-out delay-10 duration-500 hover:-translate-y-1 hover:scale-102 hover:text-purple dark:text-light-white dark:bg-black">
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
                        <Accordion key={key} className="transition ease-in-out delay-10 duration-500 hover:-translate-y-1 hover:scale-102 hover:text-purple dark:text-light-white dark:bg-black">
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