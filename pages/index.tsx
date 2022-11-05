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
			<p>
				The sections below define the conventions and styles I adopt throughout the notes. If a particular syntactic structure, idiom, morpheme, glyph, or symbol is unclear, return to this page for reference. These are personal conventions. They should not be treated as standards or assumed to be common place.
			</p>
			<p><a href={"https://ketiboldiais.com/"}>Ketib</a></p>
			<Conventions />
		</div>
	)
}

export default Home
