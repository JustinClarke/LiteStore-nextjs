import Head from 'next/head'
import Link from 'next/link'

import Header from '../layout/Header'
import Footer from '../layout/Footer'

const blog1 = '/blog/cheetos.webp'
const blog2 = '/blog/plus.webp'

export default function blog() {
	return (
		<div>
			<Head>
				<title>Blog | LiteStore</title>
				<meta name="og:title" content="Blog | LiteStore" />
				<meta name="twitter:title" content="Blog | LiteStore" />
				<meta property="og:title" content="Blog | LiteStore" />
			</Head>
			<Header />
			<div data-aos="fade-up" data-aos-delay="100" className="px-5 md:px-80 pt-5 md:pt-5 pb-10 font-light bg-white text-justify">
				<h1 className="py-5 font-serif text-gray-700 text-4xl text-center">The Future of Retail: More Than Just Space - I</h1>
				<p><span className="font-semibold">Date:</span> 19 May 2021</p>
				<h2 className="py-5 font-serif text-gray-600 text-3xl text-center italic">'Physical Retail Isn't dead. Boring Retail Is'</h2>
				<p className="">
					Why would anyone enter a retail store in 2021? The digital revolution and the subsequent rise of e-commerce giants has ensured that customers can now shop from the comfort of their homes. The disruption in the digital space has had tectonic effects on how brands view retail strategy, customer acquisition & digital marketing. The economic catastrophe caused by the 2008 recession and the recent Covid-19 Pandemic has led to severe liquidity crunch adversely affecting the sustainability of several retailers.
				</p>
				<p className="py-3">
					Long term leases, very high monthly rents and security deposits during such economic downturn might lead us to believe that we might be witnessing a 'Retail Apocalypse'. It just requires one to take a casual stroll through any of the prominent shopping districts in the metropolitan cities in India, to understand that the severity of the situation is not an exaggeration. The number of vacant retail spaces far surpasses the number of retail spaces occupied by retailers, with the gap between the two only increasing day after day.
				</p>
				<p className="py-3">
					This isn't to suggest that the Landowners aren't bleeding as well. Nor does it suggest that we won't see as many retail spaces after the pandemic. However, one thing's for sure – the future of physical retail spaces isn't going to be the same anymore and it is necessary that the retail and the real estate industry accounts for these disruptive changes in their business strategies.
				</p>
				<p className="py-3">
					What are these disruptive changes? In this blog, we will attempt to cull out a few trends that the physical retail spaces have been witnessing.
				</p>
				<p className="py-3 font-semibold">
					I. More than just sales
				</p>
				<p className="py-3">
					In a popular <a
						className="font-semibold text-purple hover:text-black"
						href="https://floorplate.com/radio/doug-stephens/"
						target="_blank" rel="noreferrer"
					>podcast</a
					> covering the trends in the retail industry, an interesting idea was put forward. One of the speakers quipped 'Retail is the New Media and Online is the New Store'. It effectively conveys the idea that over the last few decades, there has been a complete role reversal between the medium of marketing and the medium of sales. With digital shopping being ubiquitous and a large chunk of sales taking place online, stores have to transition into the new medium for brands to market their product.
				</p>
				<p className="py-3">
					It is difficult to believe that many Fortune 500 brands today have opened multiple stores in different cities with no sales taking place in any of these stores. Yet this seems to be the new trend. What is it then that drives them to open these stores? The closest parallel that can be drawn to understand this, is to understand the economics going behind erecting billboard ads or even creating sensational advertisements on social media. No one is thinking in real terms of how much the brand earned directly in sales when the
					<a
						className="font-semibold text-purple hover:text-black"
						href="https://www.thebetterindia.com/71904/amul-girl-golden-jubilee/"
						target="_blank" rel="noreferrer"
					> Amul Girl </a>makes a witty remark on a billboard ad or when Rahul Dravid displays his anger issues in the
					<a
						className="font-semibold text-purple hover:text-black"
						href="https://www.youtube.com/watch?v=Im8-ymK-T_Y"
						target="_blank" rel="noreferrer"
					> Cred ad</a>. The idea of the ads far surpasses the metric of sales and ventures into more qualitative economic metrics which is: to inform, persuade and remind customers of the brand and its product along with creating a strong recall value.
				</p>
				<p className="py-3">
					The key to the future of retail also lies in adopting a strategy which focuses on experience, reach and innovation. Let us consider a stark example of this trend in the
					<a
						className="font-semibold text-purple hover:text-black"
						href="https://floorplate.com/radio/doug-stephens/"
						target="_blank" rel="noreferrer"
					> Cheetos campaign </a>in 2017. They ran a contest in which participants had to submit the wackiest Cheetos shapes they found in their bag of chips. The top prize winner took home a whopping $ 50,000. To display more than 100,000 entries, they opened a pop-up store in New York. Remember, no sales took place in the store. However, Cheetos recorded its strongest sales week ever, when the campaign led to
					<a
						className="font-semibold text-purple hover:text-black"
						href="https://www.prweek.com/article/1438231/instagram-trend-sparks-idea-cheetos-museum"
						target="_blank" rel="noreferrer"
					> 4,831 media placements</a>.
				</p>
				<div className="py-3 w-full md:w-1/2 mx-auto">
					<img className="rounded-lg" src={blog1} alt="blog" layout='responsive' />
					<div className="pt-2 font-semibold text-purple hover:text-black">
						<a href="https://www.hungryforever.com"><span className="text-black">Picture Credits:</span> Hungry Forever</a>
					</div>
				</div>
				<p className="py-3">
					Let us look at another brand adopting a similar strategy but this time the store is situated in the busy street of Harajuku in Tokyo. Dohtonbori is a famous organic health food chain in Japan and in the year 2016, they opened up a temporary storefront at Harajuku which was
					<a
						className="font-semibold text-purple hover:text-black"
						href="https://floorplate.com/radio/doug-stephens/"
						target="_blank" rel="noreferrer"
					> quite bizarre! </a>The pop-up store had a neon red cross glowed behind the counter while two women in white lab coats showed customers scientific-charts and the pop-up had jars of pills stored everywhere. Look at the image below and you'd understand why it could easily pass off as a store conducting scientific experiments. However, a walk into the store revealed an entirely different concept. A closer look at the panel explained the concept succinctly:
				</p>
				<p className="px-10 py-3 font-medium text-center italic">
					“The customer hands over a fast-food restaurant receipt and, in return, receives a bottle of food supplements customized to replace the nutrients missing from that meal … for free"
				</p>
				<p className="py-3">
					There we are! Dohtonbori with a very smart marketing strategy was promoting their new restaurant opening in an adjacent area with a tag-line: “The healthy ingredients in Dohtonbori's healthy okonomiyaki have all the nutrients you need". Similar to the Cheetos concept, nothing was sold at the pop-up store but the traffic at Dohtonbori increased by
					<a
						className="font-semibold text-purple hover:text-black"
						href="https://www.socialtables.com/blog/event-planning/pop-up-examples/"
						target="_blank" rel="noreferrer"
					> 125 percent</a>.
				</p>
				<div className="py-3 w-full md:w-1/2 mx-auto">
					<img className="rounded-lg" src={blog2} alt="blog" layout='responsive' />
					<div className="pt-2 font-semibold text-purple hover:text-black">
						<a href="https://www.stylus.com"><span className="text-black">Picture Credits:</span> Stylus</a>
					</div>
				</div>
				<p className="py-3">
					The aim of this post is to inspire a slightly different way of looking at retail spaces and stores. At LiteStore®, we are passionate about pioneering the future of retail in India. With customisable, themed, pop-up stores, our aim is to allow brands to create rich experiences, innovative marketing strategies, while boosting retail sales. In the following posts, we shall write more about the trends that the physical retail industry has been witnessing. Please do leave a comment below on what you think!
				</p>
			</div>
			<Footer />
		</div>
	)
}