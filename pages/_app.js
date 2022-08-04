import '../styles/globals.css'
import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		Aos.init({ duration: 1500 });
	}, []);

	return (
		<div>
			<Component {...pageProps} />
		</div>
	)
}

export default MyApp