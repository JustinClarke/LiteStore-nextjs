import '../styles/globals.css'
import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
const NEXT_PUBLIC_GOOGLE_ANALYTICS = 'G-Z1S5RX2Q4E'

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		Aos.init({ duration: 1500 });
	}, []);

	return (
		<>
			<Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />

			<Script strategy="lazyOnload">
				{`
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());
					gtag('config', '${NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
					page_path: window.location.pathname,
					});
				`}
			</Script>
			<Component {...pageProps} />
		</>
	)
}

export default MyApp
