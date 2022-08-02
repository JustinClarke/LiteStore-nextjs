import Head from 'next/head'

import Header from '../layout/Header'
import Footer from '../layout/Footer'

export default function privacypolicy() {
    return (
        <div>
            <Head>
                <title>Privacy Policy | LiteStore</title>
				<meta name="description" content="Privacy Policy | LiteStore" />
				<meta property="og:title" content="Privacy Policy | LiteStore" />
            </Head>
            <Header />
            <div className="px-8 md:px-80 pt-5 md:pt-10 pb-10 font-light bg-light-white text-justify">
                <h1 className="text-4xl pb-5">
                    LITESTORE PRIVACY POLICY
                </h1>
                <p className="pb-5">
                    When you use the LiteStore<sup>®</sup> website or any of its features or sub-domains <strong>(Site)</strong>, we may collect some personal information from you. We are committed to protecting the security of your personal information and safeguarding your privacy while you use our Site and this privacy policy sets out the way we collect personal information from you and use the personal information that we have collected or received about you. The Site is owned and operated by Popspace Technologies Private Limited, a company having its registered office at #58, Domlur Layout, Bangalore-560071, India. The terms <strong>"user", "you", "your"</strong> hereunder refer to the person accessing and or using the Site. The terms <strong>"we", "us", "our"</strong> refer to Popspace Technologies Private Limited.
                </p>
                <p className="pb-5">
                    By visiting and using the Site and selecting the 'Accept T&C and Privacy Policy' option while providing your email address and mobile number, you signify your acceptance of this Privacy Policy (as amended from time to time and agree to be bound by them for as long as you are using or accessing the Site. If you do not click the 'Accept T&C and Privacy Policy' option, you will not be permitted to access or use the Site. This Privacy Policy details our collection, processing, storage, use, disclosure, transfer and otherwise handling of your personal and sensitive personal data.
                </p>
                <p className="pb-5">
                    We may revise the Privacy Policy from time to time. While we may not be able to separately notify you of the revisions each time that we make them, we will notify you and obtain your consent for any changes that we make to this policy when required under law.
                </p>
                <p className="pb-5">
                    We encourage you to check this page periodically for modifications or revisions to the Privacy Policy to understand how it affects the use of your information. We will not be responsible for your failure to remain informed about such changes.
                </p>
                <p className="pb-5">
                    The Privacy Policy will inform you about:
                    <br />
                    • What personal information we collect and why we collect it
                    <br />
                    • How we use that personal information including how we share the personal information with third parties
                    <br />
                    • Your rights and options
                </p>
                <p className="pt-5 font-semibold">
                    The Information That We Collect
                </p>
                <p className="pb-5">
                    The following personal information may be collected from you in any of the following ways:
                </p>
                <p className="pt-5 font-semibold">
                    I. Accessing the Site:
                </p>
                <p className="pb-5">
                    We may collect your email address and mobile number as a necessary condition to access the Site.
                </p>
                <p className="pt-5 font-semibold">
                    II. Account creation:
                </p>
                <p className="pb-5">
                    Users provide information such as an email address and password at the time of creating an account,[including by way of logging in to an existing social networking service such as Google, Facebook or via other email service providers
                </p>
                <p className="pt-5 font-semibold">
                    III. Purchases:
                </p>
                <p className="pb-5">
                    To enable our third party payment services vendors to collect any payments when you make a purchase from a seller on the Site, we will need to collect the financial information you provide for this purpose including your credit card number, your debit card number, your bank account number, bank IFSC code, your UPI handle, payment wallet information or net-banking details. The information we collect would depend on the payment method that you use. We may pass this information on to our third-party payment services vendors, or these entities may also directly collect this information from you.
                </p>
                <p className="pt-5 font-semibold">
                    Uses of Information:
                </p>
                <p className="pb-5">
                    The personal information that we collect from you may be used for the following purposes:
                    <br />
                    1. To inform you of any new offerings or upcoming launches.
                    <br />
                    2. To administer accounts and keep track of billing and payments.
                    <br />
                    We may use your account related data and other data available to us to process payments, bookings, cancellations and other transactions made on the Site.
                </p>
                <p className="pt-5 font-semibold">
                    Your Rights
                </p>
                <p className="pb-5">
                    You have the right to request access to all personal information about you that we have collected, and have the right to ask for any inaccurate or deficient information be corrected or amended. You may exercise this right by writing to us at <a href="mailto: support@litestore.in" className="text-purple font-semibold">support@litestore.in</a>
                </p>
                <p className="pt-5 font-semibold">
                    Security and Confidentiality
                </p>
                <p className="pb-5">
                    We have adopted standard security features on the Site to protect the confidentiality and security of your information as required by applicable laws.
                </p>
                <p className="pt-5 font-semibold">
                    Disclosures and Transfer
                </p>
                <p className="pb-5">
                    We will not publish or disclose your personal information without your prior consent, unless it is mandated by law, or if you have previously provided your consent. We may disclose personal information with its employees, officers, agents, consultants, business associates, contractors, attorneys, etc., on a need-to-know basis for the purposes specified by us.
                </p>
                <p className="pt-2">
                    We will also disclose any sensitive personal data and information if there is a legal requirement or if it is ordered to do so by a court of competent jurisdiction or to any government agency if required by law for the purposes of verification of identity, or for prevention, detection, or investigation of crime (including cyber incidents), or for prosecution or punishment of offences.
                </p>
                <p className="pt-2">
                    We may transfer personal information including sensitive personal information pertaining to you to the following entities for specified purposes.
                </p>
                <p className="pt-5 font-semibold">
                    Retention
                </p>
                <p className="pb-5">
                    We will not retain any sensitive personal data or information for longer than is required for the purpose for which such data or information was collected, or may lawfully be used, or is otherwise required under any other law for the time being in force. We may retain anonymized data for as long as is required.
                </p>
                <p className="pt-5 font-semibold">
                    Grievance Officer
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
