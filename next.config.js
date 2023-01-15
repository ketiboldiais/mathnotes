import nextMDX from "@next/mdx";
import rehypeKatex from "rehype-katex";
import rehypeSlug from "rehype-slug";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import remarkPrism from 'remark-prism';
import { macros } from "./katexMacros.js";

const withMDX = nextMDX({
	extension: /\.mdx?$/,
	options: {
		providerImportSource: "@mdx-js/react",
		remarkPlugins: [
			remarkPrism,
			[remarkMath, {
				strict: false,
				unicodeTextInMathMode: true,
			}],
			remarkGfm,
		],
		rehypePlugins: [
			rehypeSlug,
			[rehypeKatex,{
				output: 'html',
				strict: false,
				macros
			}]
		],
	},
});

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	swcMinify: true,
	pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],
	images: {
		domains: ["res.cloudinary.com"],
	},
};

export default withMDX(nextConfig);
