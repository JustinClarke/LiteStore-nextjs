import Head from 'next/head'

import Header from './layout/Header'
import Footer from './layout/Footer'

export default function termsofuse() {
    return (
        <div>
            <Head>
                <title>Terms of use | LiteStore</title>
                <meta name="description" content="LiteStore" />
            </Head>
            <Header />
            <div className="px-8 md:px-80 pt-5 md:pt-10 pb-10 font-light bg-light-white text-justify">
                <h1 className="text-4xl pb-5 text-left">
                    LITESTORE TERMS OF USE
                </h1>
                <p className="pb-5">
                    These terms and conditions (Terms) govern your use of our website, any of its features or sub-domains <strong>(Site)</strong>. The Site is owned and operated by Popspace Technologies Private Limited, a company having its registered office at #58, Domlur Layout, Bangalore-560071, India,. The terms <strong>"user", "you", "your"</strong> hereunder refer to the person accessing and or using the Site. The terms <strong>"we", "us", "our"</strong> refer to Popspace Technologies Private Limited.
                </p>
                <p className="pb-5">
                    Before proceeding to use the Site, please read these Terms carefully. By clicking the 'Accept Privacy Policy and Terms of Use' option while providing your email address and mobile number, you signify your acceptance of the Terms (as amended from time to time) and agree to be bound by them for as long as you are using or accessing the Site. If you do not click the 'Accept Privacy Policy and Terms of Use' option, you will not be permitted to access or use the Site. The use of our Site is available only to persons who can form legally binding contracts under the Indian Contract Act, 1872. If you are a minor i.e. under the age of 18 years, please do not provide any of your contact details on the Site and have an adult sign accept these Terms on your behalf and supervise your use of the Site. Please also interact with any retailers on the Site through the supervising adult and at no time should you provide any of your details to the retailers on the Site.
                </p>
                <p className="pb-5">
                    These Terms may be amended by us from time to time.
                </p>
                <p className="font-semibold">
                    1. THE SITE
                </p>
                <p className="pb-5">
                    We have developed the Site as a booking and listing platform for retail spaces.
                </p>
                <p className="pt-5 font-semibold">
                    2. ACCOUNT
                </p>
                <p className="pb-5">
                    In order to list spaces or make bookings on our Site, you must enter your email address and mobile number. You will be responsible for providing accurate and valid information about yourself. In order to make purchases on the Site you will have to create an account with the Site and provide additional information. Any personal information that we collect about you is subject to our privacy policy which is available here. It is your responsibility to ensure that your account information is up to date on the Site at all times. You agree to notify us promptly if your account information changes by updating the same on the Site. You agree that we shall not be liable or responsible for the activities or consequences that occur in cases where you have failed to update your account information on the Site.
                </p>
                <p className="pt-5 font-semibold">
                    3. CONTENT
                </p>
                <p className="pb-5">
                    <strong>"Content"</strong> means any information, text, graphics, drawings or other materials uploaded, downloaded or appearing on the Site. The Content on the Site contains copyrighted material, trademarks, proprietary information and other intellectual property owned by us or the relevant retailers. You agree not to copy, modify, publish, transmit, distribute, perform, display, or sell any such proprietary information. Access to, or use of, the Site does not confer and should not be considered as conferring upon anyone any license to either our or any retailer's intellectual property rights. Any use of the Site or its contents without our permission is prohibited.
                </p>
                <p className="pb-2">
                    By using the Site, you agree that you will not scrape or attempt to scrape or extract any data or Content available on the Site.
                </p>
                <p className="pt-5 font-semibold">
                    4. DISRUPTION OF SERVICES
                </p>
                <p className="pb-5">
                    We make no guarantee as to quality or availability of the Content on the Site on a 24x7 basis and make no promise of providing uninterrupted access to the Site. Disruption of services may arise due to technical or operational difficulties, and no prior notice of downtime will be given to you in such circumstance. We also reserve the right to suspend access to the Site for all or specific persons, either permanently or temporarily, for any reason whatsoever.
                </p>
                <p className="pt-5 font-semibold">
                    5. LIMITATION OF LIABILITY AND DISCLAIMER
                </p>
                <p className="pb-5">
                    YOU AGREE AND ACKNOWLEDGE THAT POPSPACE TECHNOLOGIES PRIVATE LIMITED WILL NOT BE LIABLE FOR ANY CLAIMS IN RELATION TO THE USE OF THE SITE, INCLUDING BUT NOT LIMITED TO (A) YOUR ACCESS TO OR USE OF OR INABILITY TO USE THE SITE; (B) THE CONTENT ON THE SERVICE, INCLUDING WITHOUT LIMITATION, ANY DEFAMATORY, OBSCENE, OFFENSIVE OR ILLEGAL CONTENT; (C) ANY UNAUTHORISED ACCESS OF THE SITE OR ITS BACKEND INFRASTRUCTURE. ALL CONTENT ON THE SITE IS ON AN "AS IS" BASIS AND POPSPACE TECHNOLOGIES PRIVATE LIMITED GRANTS NO WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, STATUTORY OR OTHERWISE WITH RESPECT TO THE SITE OR ANY OF THE INFORMATION OR CONTENT CONTAINED THEREIN. POPSPACE TECHNOLOGIES PRIVATE LIMITED SPECIFICALLY DISCLAIMS ANY IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE OR NON-INFRINGEMENT. YOU EXPRESSLY AGREE THAT THE USE OF THE SITE AND ANY INFORMATION THEREIN IS AT YOUR OWN RISK.
                </p>
                <p className="pt-5 font-semibold">
                    6. GOVERNING LAW AND DISPUTE RESOLUTION
                </p>
                <p className="pb-5">
                    These Terms shall be governed by the laws of India and any disputes or proceedings arising hereunder shall be subject to the exclusive jurisdiction of the courts in Bangalore, Karnataka.
                </p>
                <p className="pb-2">
                    If you have any concerns or questions in relation to this Privacy Policy, you may address them to our grievance officer whose name and email address are as follows:
                </p>
                <p className="pb-5">
                    Grievance Officer: <span className="text-purple font-semibold">Punnet Dinesh</span>
                    <br />
                    Email: <a href="mailto: support@litestore.in" className="text-purple font-semibold">puneet@litestore.in</a>
                </p>
            </div>
            <Footer />
        </div>
    )
}