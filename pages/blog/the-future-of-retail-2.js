import Head from 'next/head'
import Link from 'next/link'

import Header from '../layout/Header'
import Footer from '../layout/Footer'

const blog1 = '/images/blog/room.jpg'
const blog2 = '/images/blog/blog2.webp'

export default function blog() {
	return (
		<div>
			<Head>
				<title>Blog | LiteStore</title>
				<meta name="description" content="LiteStore" />
			</Head>
			<Header />
			<div className="px-5 md:px-80 pt-5 md:pt-5 pb-10 font-light bg-white text-justify">
				<h1 className="py-5 font-serif text-gray-700 text-4xl text-center">The Future of Retail: More Than Just Space - II</h1>
				<p><span className="font-semibold">Date:</span> 19 May 2021</p>
				<p className="pt-3">
					In the previous
					<Link href="/blog/the-future-of-retail-1"><a className="font-semibold text-purple hover:text-black"> blog post</a>
					</Link>, we wrote about how physical retail spaces as we understand today might undergo what experts term as a 'brick & mortar renaissance'. The focus will not be about the stores as much as the stories that these stores narrate. Stories that are presented through the design of the store and the themes they display. The earlier post looked at breaking away fromthe notion that stores are the focal point of driving sales, in this post we will look at another trend that's been explored by brands across Tokyo, Barcelona and New York.
				</p>
				<p className="py-3 font-semibold">
					II. Less is more - keeping the experience intimate
				</p>
				<p className="py-3">
					Have you ever wondered why some of the Michelin Star restaurants serve very
					<a className="font-semibold text-purple hover:text-black" href="https://www.blueskydreamers.com/why-do-fancy-restaurants-serve-small-portions/" target="_blank" rel="noreferrer"> small portions </a>
					of food? Apart fromthe fact that it makes for Instagram-worthy pictures, consumer psychology offers a clinical understanding to it. The taste buds are most excited by the first few bites of eating the dish which makes the experience moremeaningful & relevant. On a similar note, stores which have a minimal or a modular themed focus enhances the sensory experiences of customers compared to stores which are packed to the rafters leaving little or no spacefor customers to interact with the products.
				</p>
				<p className="py-3">
					A classic example of this is a
					<a className="font-semibold text-purple hover:text-black" href="https://medium.com/culturistique/morioka-shoten-a-single-room-with-a-single-book-a224595f7045" target="_blank" rel="noreferrer">bookstore in Ginza, Tokyo</a>. Each week abook is chosen and sold with no other books displayed. There is no browsing here. Only a rich, deep and intentional focus with a singular intimate experience with the product i.e a book. The modular store is designed withthe theme of the book displayed that week. The value addition of the store is that the authors receive an invitation from the publisher. When an author enters the bookstore, open dialogues and conversations emerge betweenthe visitors and the author. Imagine walking into a store on a given day and you found Ruskin Bond or Vikram Seth having a light moment with their readers! The buzz that would create and persuade people to visit such storesand create a lasting public memory, far surpasses the need to hoard books and fill in space with just books.
				</p>
				<p className="py-3">
					Admittedly, from a sales point of view, it makes more financial sense to pack the store with inventory. But that would be missing the point. Creating a lasting impression of your brand in a customer's mind is not merely about making a sale then and there.It is about creating an experience which builds a positive association with the brand. Doing this offline, in a physical store, is not only unique but creates a deeper, more personal bond with the customer.
				</p>
				<div className="py-3 w-1/2 mx-auto">
					<img className="rounded-lg" src={blog1} alt="blog" layout='responsive' />
					<div className="pt-2 font-semibold text-purple hover:text-black">
						<a href="http://www.pen-online.jp"><span className="text-black">Picture Credits:</span> Pen Online</a>
					</div>
				</div>
				<p className="py-3 font-semibold">
					II. Less is more - keeping the experience intimate
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
				<div className="py-3 w-1/2 mx-auto">
					<img className="rounded-lg" src={blog2} alt="blog" layout='responsive' />
					<div className="pt-2 font-semibold text-purple hover:text-black">
						<a href="https://www.artsy.net"><span className="text-black">Picture Credits:</span> Artsy</a>
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