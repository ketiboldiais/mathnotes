import Layout from "../components/Layout";
import React from "react";
import { MDXProvider } from "@mdx-js/react";
import "katex/dist/katex.min.css";
import "../styles/globals.css";
import MDXComponents from "../components/MDXComponents";

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<MDXProvider components={MDXComponents}>
				<Component {...pageProps} />
			</MDXProvider>
		</Layout>
	);
}

export default MyApp;
