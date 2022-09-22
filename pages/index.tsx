import type { NextPage } from 'next'
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
			<Head>
				<title>Sublimis</title>
				<meta name={"keywords"} content={"math and cs notes"} />
			</Head>
			<h1>Math/CS Notes</h1>
			<p>
				This is a collection of some math and CS notes I&#39;ve taken over the
				years. The collection comprises two volumes, Review of Computer
				Science and Review of Mathematics. These two volumes are then
				divided into topics (corresponding to a course I&#39;ve taken),
				articles (a topic in that course), sections, subsections, and so
				on. Click the Index button above to navigate.
			</p>
			<p>
				If errors, inaccuracies, or front-end bugs are found, please email
				me at koldiais@gmail.com. I keep a running list of errata that, so
				far, has stayed fairly short. That said, I don&#39;t catch everything.
				So, if you see something, say something.
			</p>
			<p>
				<a href={"https://ketiboldiais.com/"}>
					Ketib
				</a>
			</p>
		</div>
  )
}

export default Home
