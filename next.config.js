import createMDX from "@next/mdx";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import remarkPrism from "remark-prism";
import remarkGfm from "remark-gfm";
import remarkSectionize from "remark-sectionize";

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	experimental: { esmExternals: false },
	pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
	images: {
		domains: ["res.cloudinary.com"],
	},
};

const withMDX = createMDX({
	extension: /\.mdx?$/,
	options: {
		providerImportSource: "@mdx-js/react",
		remarkPlugins: [
			remarkMath,
			[remarkPrism, { plugins: ["line-numbers"] }],
			remarkGfm,
			remarkSectionize
		],
		rehypePlugins: [
			[
				rehypeKatex,
				{
					strict: false,
					macros: {
						// text letters
						"\\a": "\\text{a}",
						"\\b": "\\text{b}",
						"\\c": "\\text{c}",
						"\\d": "\\text{d}",
						"\\e": "\\text{e}",
						"\\f": "\\text{f}",
						"\\g": "\\text{g}",
						"\\h": "\\text{h}",
						"\\i": "\\text{i}",
						"\\j": "\\text{j}",
						"\\k": "\\text{k}",
						"\\l": "\\text{l}",
						"\\m": "\\text{m}",
						"\\n": "\\text{n}",
						"\\o": "\\text{o}",
						"\\p": "\\text{p}",
						"\\q": "\\text{q}",
						"\\r": "\\text{r}",
						"\\s": "\\text{s}",
						"\\t": "\\text{t}",
						"\\u": "\\text{u}",
						"\\v": "\\text{v}",
						"\\w": "\\text{w}",
						"\\x": "\\text{x}",
						"\\y": "\\text{y}",
						"\\z": "\\text{z}",

						"\\A": "\\text{A}",
						"\\B": "\\text{B}",
						"\\C": "\\text{C}",
						"\\D": "\\text{D}",
						"\\E": "\\text{E}",
						"\\F": "\\text{F}",
						"\\G": "\\text{G}",
						"\\H": "\\text{H}",
						"\\I": "\\text{I}",
						"\\J": "\\text{J}",
						"\\K": "\\text{K}",
						"\\L": "\\text{L}",
						"\\M": "\\text{M}",
						"\\N": "\\text{N}",
						"\\O": "\\text{O}",
						"\\P": "\\text{P}",
						"\\Q": "\\text{Q}",
						"\\R": "\\text{R}",
						"\\S": "\\text{S}",
						"\\T": "\\text{T}",
						"\\U": "\\text{U}",
						"\\V": "\\text{V}",
						"\\W": "\\text{W}",
						"\\X": "\\text{X}",
						"\\Y": "\\text{Y}",
						"\\Z": "\\text{Z}",

						"\\AA": "\\mathbb{A}",
						"\\BB": "\\mathbb{B}",
						"\\CC": "\\mathbb{C}",
						"\\DD": "\\mathbb{D}",
						"\\EE": "\\mathbb{E}",
						"\\FF": "\\mathbb{F}",
						"\\GG": "\\mathbb{G}",
						"\\HH": "\\mathbb{H}",
						"\\II": "\\mathbb{I}",
						"\\JJ": "\\mathbb{J}",
						"\\KK": "\\mathbb{K}",
						"\\LL": "\\mathbb{L}",
						"\\MM": "\\mathbb{M}",
						"\\NN": "\\mathbb{N}",
						"\\OO": "\\mathbb{O}",
						"\\PP": "\\mathbb{P}",
						"\\QQ": "\\mathbb{Q}",
						"\\RR": "\\mathbb{R}",
						"\\SS": "\\mathbb{S}",
						"\\TT": "\\mathbb{T}",
						"\\UU": "\\mathbb{U}",
						"\\VV": "\\mathbb{V}",
						"\\WW": "\\mathbb{W}",
						"\\XX": "\\mathbb{X}",
						"\\YY": "\\mathbb{Y}",
						"\\ZZ": "\\mathbb{Z}",

						"\\Aa": "\\mathcal{A}",
						"\\Bb": "\\mathcal{B}",
						"\\Cc": "\\mathcal{C}",
						"\\Dd": "\\mathcal{D}",
						"\\Ee": "\\mathcal{E}",
						"\\Ff": "\\mathcal{F}",
						"\\Gg": "\\mathcal{G}",
						"\\Hh": "\\mathcal{H}",
						"\\Ii": "\\mathcal{I}",
						"\\Jj": "\\mathcal{J}",
						"\\Kk": "\\mathcal{K}",
						"\\Ll": "\\mathcal{L}",
						"\\Mm": "\\mathcal{M}",
						"\\Nn": "\\mathcal{N}",
						"\\Oo": "\\mathcal{O}",
						"\\Pp": "\\mathcal{P}",
						"\\Qq": "\\mathcal{Q}",
						"\\Rr": "\\mathcal{R}",
						"\\Ss": "\\mathcal{S}",
						"\\Tt": "\\mathcal{T}",
						"\\Uu": "\\mathcal{U}",
						"\\Vv": "\\mathcal{V}",
						"\\Ww": "\\mathcal{W}",
						"\\Xx": "\\mathcal{X}",
						"\\Yy": "\\mathcal{Y}",
						"\\Zz": "\\mathcal{Z}",

						"\\aA": "\\mathcal{a}",
						"\\bB": "\\mathcal{b}",
						"\\cC": "\\mathcal{c}",
						"\\dD": "\\mathcal{d}",
						"\\eE": "\\mathcal{e}",
						"\\fF": "\\mathcal{f}",
						"\\gG": "\\mathcal{g}",
						"\\hH": "\\mathcal{h}",
						"\\iI": "\\mathcal{i}",
						"\\jJ": "\\mathcal{j}",
						"\\kK": "\\mathcal{k}",
						"\\lL": "\\mathcal{l}",
						"\\mM": "\\mathcal{m}",
						"\\nN": "\\mathcal{n}",
						"\\oO": "\\mathcal{o}",
						"\\pP": "\\mathcal{p}",
						"\\qQ": "\\mathcal{q}",
						"\\rR": "\\mathcal{r}",
						"\\sS": "\\mathcal{s}",
						"\\tT": "\\mathcal{t}",
						"\\uU": "\\mathcal{u}",
						"\\vV": "\\mathcal{v}",
						"\\wW": "\\mathcal{w}",
						"\\xX": "\\mathcal{x}",
						"\\yY": "\\mathcal{y}",
						"\\zZ": "\\mathcal{z}",

						"\\tt": "\\text{#1}",
						"\\ii": "\\textit{#1}",
						"\\mm": "\\texttt{#1}",
						"\\cc": "\\mathcal{#1}",
						"\\bb": "\\mathbb{#1}",
						"\\bxor": "\\texttt{\\textasciicircum}",
						"\\bnot": "\\texttt{\\textasciitilde}",
						"\\bor": "~\\texttt{|}~",
						"\\band": "~\\texttt{\\&}~",
						"\\bls": "~\\texttt{<<}~",
						"\\ltn": "\\texttt{<}",
						"\\lte": "\\texttt{<=}",
						"\\gtn": "\\texttt{>}",
						"\\gte": "\\texttt{>=}",
						"\\brs": "~\\texttt{>>}~",
						"\\divs": "\\space\\vert\\space",
						"\\.": "\\cdot",
						"\\ceil": "\\left\\lceil #1 \\right\\rceil",
						"\\floor": "\\left\\lfloor #1 \\right\\rfloor",
						"\\paren": "\\left( #1 \\right)",
						"\\rem": "~\\text{rem}~",
						"\\rod": "~\\text{mod}~",
						"\\ll": "\\lim\\limits_{#1 \\to #2}",
						"\\gcd": "\\text{gcd}\\left( #1 \\right)",
						"\\tmod": "~\\texttt{\\%}~",
						"\\test": "~\\stackrel{?}{#1}~",
						"\\tnote": "\\overbrace{#1}^{\\text{#2}}",
						"\\bnote": "\\underbrace{#1}_{\\text{#2}}",
						"\\nth": "{#1}^{\\text{\\scriptsize{th}}}",
						"\\out": "\\cancel{#1}",
						"\\eval": "\\left. #1 \\right\\vert_{#2}",
						"\\deval": "\\left. #1 \\right\\vert_{#2}^{#3}",
						"\\integral": "\\int_{#1}^{#2}",
						"\\dd": "\\dfrac{d{#1}}{d{#2}}",
						"\\dsum": "\\displaystyle\\sum_{#1}^{#2}",
						"\\tsum": "\\textstyle\\sum_{#1}^{#2}",
						"\\pick": "\\choose",
						"\\suchthat": "{#1}~\\mid~{#2}",

						// set theory
						"\\rel": "\\mathrel{R}",
						"\\nrel": "\\not\\mathrel{R}",

						// modifieres
						"\\where": "~~\\text{where}~~{#1}",
						"\\st": "~~\\text{such that}~~{#1}",

						// strings
						"\\con": "⧺",


						// number theory
						"\\dv": "\\space\\vert\\space",
						"\\ndv": "\\nmid",

						// combinatorics

						"\\inj": "\\hookrightarrow",
						"\\surj": "\\twoheadrightarrow",
						"\\bij": "\\rightarrowtail",



						// trig
						"\\sincos": "\\small{\\rlap{\\text{sin}}\\raisebox{0.8em}{\\text{cos}}}",


						// algorithms
						"\\fun": "\\bf{function}}~~{\\tt{#1}}{\\paren{#2}",
						// linguistics
						"\\string": "\\text{\\textquotedblleft}\\text{#1}\\text{\\textquotedblright}",
						"\\phone": "\\Braket{\\texttt{#1}}",

						// numbers
						"\\ith": "{#1}^{\\text{th}}",


						// complexity analysis
						"\\bigTheta": "\\Theta\\left({#1}\\right)",
						"\\bigO": "\\mathcal{O}\\left({#1}\\right)",
						"\\littleO": "\\mathcal{o}\\left({#1}\\right)",
						"\\bigOmega": "\\Omega\\left({#1}\\right)",

						// variables
						"\\var": "\\texttt{#1}",
						// matrix variables
						"\\mtx":"{\\bf{#1}}",
						"\\vector":"\\overrightarrow{#1}",

						// matrices

						"\\mx":"\\begin{bmatrix} #1 \\end{bmatrix}",
						"\\aug":"\\bigm|",
						"\\alt":"\\longleftarrow",
						"\\swap":"\\longleftrightarrow",

						//line break
						"\\br":"\\\\",
						"\\nl":"\\\\{#1}",

						// equations
						"\\eqs":"\\begin{aligned} #1 \\end{aligned}",
						"\\sys":"\\begin{array}{rcrrr} #1 \\end{array}",
						"\\no":"\\phantom{#1}",


						// functions
						"\\avg": "\\texttt{avg}",
						"\\abs": "\\lvert #1 \\rvert ",

						// arithmetic operators



						// logic
						"\\def": "\\mm{:=}",
						"\\lxor": "\\veebar",
						"\\lnand": "\\barwedge",
						"\\lnor": "\\overline{\\vee}",
						"\\lxnor": "\\overline{\\veebar}",
						"\\ltau": "\\top",
						"\\lcon": "\\bot",
						"\\lentails": "\\vdash",
						"\\lmodels": "\\models",
						"\\lif": "{#1} ~ \\implies ~ {#2}",
						"\\liff": "{#1} ~ \\iff ~ {#2}",
						"\\loif": "{#1} ~ \\impliedby ~ {#2}",
						"\\lnot": "\\neg({#1})",
						"\\lex": "\\exist",
						"\\lnex": "\\nexists",
						"\\lset": "\\left\\{ #1 \\right\\}",
						"\\seq": "\\Braket{ #1 }",
						"\\Seq": "\\texttt{[} #1 \\texttt{]}",
						"\\size": "n\\left( #1 \\right)",
						"\\nil": "\\varnothing",

						// algorithms
						"\\line":"\\text{line}\\texttt{[#1]}",
						"\\let":"{#1} \\gets {#2}",

						// finance
						"\\cash": "\\text{\\textdollar}",

						// hebrew
						"\\tav": "\\char\"05EA",

						// set theory
						"\\card": "\\text{n}",
						"\\op": "~{\\texttt{f}}~",
						"\\bop": "\\star",
						"\\pop": "\\circ",
						"\\dom": "\\text{dom}\\left({#1}\\right)",
						"\\ran": "\\text{ran}\\left({#1}\\right)",
						"\\class": "\\llbracket{#1}\\rrbracket",
					},
				},
			],
		],
	},
});

export default withMDX(nextConfig);
