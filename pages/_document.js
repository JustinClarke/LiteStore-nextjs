import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html>
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<meta name="twitter:site" content="https://litestore.in" />
				<meta property="og:image" content="https://litestore.in/logo.jpg" />
				<meta name="twitter:card" content="https://litestore.in/logo.jpg" />
				<meta property="og:image" content="https://litestore.in/logo.jpg" />
				<meta property="og:description" content="Booking retail space can't get any easier LiteStore™ is an online platform for listing and booking commercial retail spaces which can be rented on an ultra short term basis." />
				<meta name="twitter:description" content="Booking retail space can't get any easier LiteStore™ is an online platform for listing and booking commercial retail spaces which can be rented on an ultra short term basis." />
				<link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>

				{/* Global Site Tag (gtag.js) - Google Analytics */}
				<script
					async
					src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
				/>
				<script
					dangerouslySetInnerHTML={{
						__html: `
							window.dataLayer = window.dataLayer || [];
							function gtag(){dataLayer.push(arguments);}
							gtag('js', new Date());
							gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
							page_path: window.location.pathname,
							});
						`,
					}}
				/>
			</Head>
			<body className="bg-light-white dark:bg-[#030303] dark:text-gray-200">
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}