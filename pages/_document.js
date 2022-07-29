import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html>
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<meta property="og:url" content="https://litestore.in/" />
				<meta property="og:title" content="LiteStore" />
				<meta property="og:description" content="Booking retail space can't get any easier LiteStore™ is an online platform for listing and booking commercial retail spaces which can be rented on an ultra short term basis." />
				<meta property="og:image" content="https://litestore.in/assets/img/og-image.jpg" />
				<link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}