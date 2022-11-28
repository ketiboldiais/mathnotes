import type { NextPage } from 'next'
import Conventions from "./appendix/conventions.mdx";
import Head from "next/head";

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Math Notes</title>
			</Head>
			<h1>Notes</h1>
			<p>
				This is a collection of some math, logic, and CS notes I&#39;ve taken over the years. The collection comprises two volumes, Review of Computer Science and Review of Mathematics. These two volumes are then divided into topics (corresponding to a course I&#39;ve taken), articles (a topic in that course), sections, subsections, and so on. The Index button above provides a table of contents.
			</p>
			<p><a href={"https://ketiboldiais.com/"}>Ketib</a></p>
			<Conventions />
		</div>
	)
}

export default Home
