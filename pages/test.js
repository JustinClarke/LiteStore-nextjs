import { useState, useEffect } from "react"

import Head from 'next/head'

import Header from './layout/Header'
import Footer from './layout/Footer'


function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

export default function App () {
  const { height, width } = useWindowSize();
  let testValue = 'Hello World'
  if (width < 768) {
	testValue = 'Mobile'
  }
  return (
		<div>
			<Head>
				<title>Test | LiteStore</title>
				<meta name="description" content="LiteStore" />
			</Head>
			<Header />
			<section>
				<h1 className="py-[10%] mx-[40%] text-2xl font-black">{testValue}</h1>
			</section>
			<Footer />
		</div>
  );
}