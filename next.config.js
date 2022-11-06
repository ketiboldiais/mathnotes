import createMDX from "@next/mdx";
import rehypeKatex from "rehype-katex";
import rehypeSlug from "rehype-slug";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import remarkSectionize from "remark-sectionize";
import remarkUnwrapImages from "remark-unwrap-images";

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
			remarkUnwrapImages,
			remarkSectionize,
			[remarkMath, {
				strict: false,
				unicodeTextInMathMode: true,
			}],
			remarkGfm,
		],
		rehypePlugins: [
			rehypeSlug,
			[rehypeKatex,{
					strict: false,
					unicodeTextInMathMode: true,
					macros: {
						// text letters
						"\\a": "\\text{a}", "\\b": "\\text{b}",
						"\\c": "\\text{c}", "\\d": "\\text{d}",
						"\\e": "\\text{e}", "\\f": "\\text{f}",
						"\\g": "\\text{g}", "\\h": "\\text{h}",
						"\\i": "\\text{i}", "\\j": "\\text{j}",
						"\\k": "\\text{k}", "\\l": "\\text{l}",
						"\\m": "\\text{m}", "\\n": "\\text{n}",
						"\\o": "\\text{o}", "\\p": "\\text{p}",
						"\\q": "\\text{q}", "\\r": "\\text{r}",
						"\\s": "\\text{s}", "\\t": "\\text{t}",
						"\\u": "\\text{u}", "\\v": "\\text{v}",
						"\\w": "\\text{w}", "\\x": "\\text{x}",
						"\\y": "\\text{y}", "\\z": "\\text{z}",

						"\\A": "\\text{A}", "\\B": "\\text{B}",
						"\\C": "\\text{C}", "\\D": "\\text{D}",
						"\\E": "\\text{E}", "\\F": "\\text{F}",
						"\\G": "\\text{G}", "\\H": "\\text{H}",
						"\\I": "\\text{I}", "\\J": "\\text{J}",
						"\\K": "\\text{K}", "\\L": "\\text{L}",
						"\\M": "\\text{M}", "\\N": "\\text{N}",
						"\\O": "\\text{O}", "\\P": "\\text{P}",
						"\\Q": "\\text{Q}", "\\R": "\\text{R}",
						"\\S": "\\text{S}", "\\T": "\\text{T}",
						"\\U": "\\text{U}", "\\V": "\\text{V}",
						"\\W": "\\text{W}", "\\X": "\\text{X}",
						"\\Y": "\\text{Y}", "\\Z": "\\text{Z}",

						"\\AA": "\\mathbf{A}", "\\BB": "\\mathbf{B}",
						"\\CC": "\\mathbf{C}", "\\DD": "\\mathbf{D}",
						"\\EE": "\\mathbf{E}", "\\FF": "\\mathbf{F}",
						"\\GG": "\\mathbf{G}", "\\HH": "\\mathbf{H}",
						"\\II": "\\mathbf{I}", "\\JJ": "\\mathbf{J}",
						"\\KK": "\\mathbf{K}", "\\LL": "\\mathbf{L}",
						"\\MM": "\\mathbf{M}", "\\NN": "\\mathbf{N}",
						"\\OO": "\\mathbf{O}", "\\PP": "\\mathbf{P}",
						"\\QQ": "\\mathbf{Q}", "\\RR": "\\mathbf{R}",
						"\\SS": "\\mathbf{S}", "\\TT": "\\mathbf{T}",
						"\\UU": "\\mathbf{U}", "\\VV": "\\mathbf{V}",
						"\\WW": "\\mathbf{W}", "\\XX": "\\mathbf{X}",
						"\\YY": "\\mathbf{Y}", "\\ZZ": "\\mathbf{Z}",

						"\\aa": "\\mathbf{a}", "\\bb": "\\mathbf{b}",
						"\\cc": "\\mathbf{c}", "\\dd": "\\mathbf{d}",
						"\\ee": "\\mathbf{e}", "\\ff": "\\mathbf{f}",
						"\\gg": "\\mathbf{g}", "\\hh": "\\mathbf{h}",
						"\\ii": "\\mathbf{i}", "\\jj": "\\mathbf{j}",
						"\\kk": "\\mathbf{k}", "\\ll": "\\mathbf{l}",
						"\\mm": "\\mathbf{m}", "\\nn": "\\mathbf{n}",
						"\\oo": "\\mathbf{o}", "\\pp": "\\mathbf{p}",
						"\\qq": "\\mathbf{q}", "\\rr": "\\mathbf{r}",
						"\\ss": "\\mathbf{s}", "\\tt": "\\mathbf{t}",
						"\\uu": "\\mathbf{u}", "\\vv": "\\mathbf{v}",
						"\\ww": "\\mathbf{w}", "\\xx": "\\mathbf{x}",
						"\\yy": "\\mathbf{y}", "\\zz": "\\mathbf{z}",

						"\\Aa": "\\mathcal{A}", "\\Bb": "\\mathcal{B}",
						"\\Cc": "\\mathcal{C}", "\\Dd": "\\mathcal{D}",
						"\\Ee": "\\mathcal{E}", "\\Ff": "\\mathcal{F}",
						"\\Gg": "\\mathcal{G}", "\\Hh": "\\mathcal{H}",
						"\\Ii": "\\mathcal{I}", "\\Jj": "\\mathcal{J}",
						"\\Kk": "\\mathcal{K}", "\\Ll": "\\mathcal{L}",
						"\\Mm": "\\mathcal{M}", "\\Nn": "\\mathcal{N}",
						"\\Oo": "\\mathcal{O}", "\\Pp": "\\mathcal{P}",
						"\\Qq": "\\mathcal{Q}", "\\Rr": "\\mathcal{R}",
						"\\Ss": "\\mathcal{S}", "\\Tt": "\\mathcal{T}",
						"\\Uu": "\\mathcal{U}", "\\Vv": "\\mathcal{V}",
						"\\Ww": "\\mathcal{W}", "\\Xx": "\\mathcal{X}",
						"\\Yy": "\\mathcal{Y}", "\\Zz": "\\mathcal{Z}",

						// number sets
						"\\com": "\\mathbb{C}",
						"\\uint": "\\mathbb{Z}",
						"\\pint": "\\mathbb{Z}^+",
						"\\nint": "\\mathbb{Z}^-",
						"\\primes": "\\mathbb{P}",
						"\\nat": "\\natnums",
						"\\rat": "\\mathbb{Q}",
						"\\field": "\\mathbb{F}",

						// combinatorics
						"\\sib": "~{\\small{{\\succ}{#1}{\\prec}}}~",
						"\\vex": "~{\\mathrlap{~v}{\\text{---}}}~",
						"\\eex": "~{\\mathrlap{~e}{\\text{---}}}~",
						"\\vad": "\\overset{v}{+}",
						"\\ead": "\\overset{e}{+}",

						// cancel
						"\\gy": "\\fcolorbox{grey}{grey}{#1}",
						"\\mi": "\\texttt{-}",
						"\\pl": "\\texttt{+}",

						"\\cls": "\\lBrace{#1}\\rBrace",
						"\\as": "~{\\overset{\\tx{def}}{=}}~",

						// intervals
						"\\cic": "\\texttt{[}{#1},{#2}\\texttt{]}",
						"\\oio": "\\texttt{]}{#1},{#2}\\texttt{[}",
						"\\cio": "\\texttt{[}{#1},{#2}\\texttt{[}",
						"\\oic": "\\texttt{]}{#1},{#2}\\texttt{]}",

						
						"\\ceil": "\\left\\lceil #1 \\right\\rceil",
						"\\floor": "\\left\\lfloor #1 \\right\\rfloor",
						"\\trunc": "\\left\\lceil #1 \\right\\rfloor",
						"\\rem": "~\\text{rem}~",
						"\\quo": "~\\text{div}~",
						"\\rod": "~\\text{mod}~",
						"\\by": "\\cdot",
						"\\llt": "~\\texttt{≪}~",
						"\\ggt": "~\\texttt{≫}~",
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
						"\\di": "\\frac{\\d{#1}}{\\d{#2}}",
						"\\ec": "\\approx_{\\varepsilon}",
						"\\dc": "\\approx_{\\delta}",
						"\\dsum": "\\displaystyle\\sum_{#1}^{#2}",
						"\\integral": "\\int_{#1}^{#2}",
						"\\dprod": "\\displaystyle\\prod_{#1}^{#2}",
						"\\tsum": "\\textstyle\\sum_{#1}^{#2}",
						"\\ssum": "\\sum_{\\substack{#1}}",
						"\\tprod": "\\textstyle\\prod_{#1}^{#2}",
						"\\pick": "\\choose",
						"\\suchthat": "{#1}~\\mid~{#2}",

						// shapes
						"\\ws": "\\square",
						"\\bs": "\\blacksquare",
						"\\wc": "\\circ",
						"\\bc": "\\bullet",

						// set theory
						"\\rel": "\\mathrel{R}",
						"\\nrel": "\\not\\mathrel{R}",
						"\\nevens": "2 \\mathbb{N}",
						"\\bits": "\\mathbb{B}",
						"\\nodds": "\\mathbb{N} \\setminus 2 \\mathbb{N}",
						"\\evens": "2 \\mathbb{Z}",
						"\\odds": "\\mathbb{Z} \\setminus 2 \\mathbb{Z}",
						"\\Sq": "\\overset{\\footnotesize{#2}}{\\underset{\\scriptsize{#1}}{\\large{\\text{N}}}}~ ",
						"\\sq": "{\\large{\\text{N}}}_{\\tiny{#1}}^{{\\footnotesize{#2}}}~",

						// modifieres
						"\\where": "~~\\text{where}~~{#1}",
						"\\st": "~~\\text{such that}~~{#1}",

						// number theory
						"\\dv": "\\space\\vert\\space",
						"\\ndv": "\\nmid",
						"\\pf": "\\textup{primes}",
						"\\lcm": "\\textup{lcm}",

						// combinatorics

						"\\inj": "\\rightharpoonup",
						"\\surj": "\\twoheadrightarrow",
						"\\bij": "\\rightarrowtail",

						// trig
						"\\sincos": "\\small{\\rlap{\\text{sin}}\\raisebox{0.8em}{\\text{cos}}}",


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

						// matrix variables
						"\\mtx":"{\\bf{#1}}",
						"\\vector":"\\overrightarrow{#1}",

						// matrices

						"\\mx":"\\begin{bmatrix} #1 \\end{bmatrix}",
						"\\bx":"\\begin{Bmatrix} #1 \\end{Bmatrix}",
						"\\ax":"\\begin{matrix} #1 \\end{matrix}",
						"\\aug":"\\bigm|",
						"\\alt":"\\longleftarrow",
						"\\swap":"\\longleftrightarrow",
						"\\span":"\\text{span}",

						// sequences
						"\\seq":"{\\left(~{#1}~\\right)}_{#2}^{#3}",
						"\\iter":"{{\\mathbb{I}}_{#1}^{#2}}",
						"\\diter":"{\\overset{#2}{\\underset{#1}{\\Large \\mathbb{I}}}}",
						"\\Seq":"{\\left({#1},~{#2}\\right)}",

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

						// logic
						"\\true": "\\texttt{0}",
						"\\tf": "\\vdash",
						"\\ft": "\\dashv",
						"\\false": "\\texttt{1}",
						"\\nc": "\\rArr",
						"\\cn": "\\lArr",
						"\\lxor": "~\\veebar~",
						"\\lnand": "~\\barwedge~",
						"\\lnor": "~\\overline{\\vee}~",
						"\\lxnor": "~\\overline{\\veebar}~",
						"\\ltau": "\\top",
						"\\lcon": "\\bot",
						"\\lentails": "\\vdash",
						"\\lmodels": "\\models",
						"\\lif": "{#1} ~ \\implies ~ {#2}",
						"\\liff": "{#1} ~ \\iff ~ {#2}",
						"\\loif": "{#1} ~ \\impliedby ~ {#2}",
						"\\lnot": "\\neg({#1})",
						"\\all": "\\forall",
						"\\nall": "~\\cancel{\\forall}~",
						"\\lex": "\\exist",
						"\\uni": "\\exist{\\texttt{!}}",
						"\\lnex": "\\nexists",
						"\\lset": "\\left\\{ #1 \\right\\}",
						"\\ix": "\\texttt{[} #1 \\texttt{]}",
						"\\px": "\\texttt{(} #1 \\texttt{)}",
						"\\rw": "{#1}\\texttt{[}\\text{#2}\\texttt{]}",
						"\\mc": "~{\\tiny\\bullet}~",
						"\\range": "{\\texttt{[}}{#1}~{..}~{#2}{\\texttt{]}}",
						"\\nil": "\\varnothing",
						"\\iff": "\\lrArr",

						// algorithms
						"\\line":"\\textup{line}\\texttt{[}#1\\texttt{]}",
						"\\goto":"\\textup{goto}(\\textup{line}~{#1})",
						"\\fun": "\\bf{function}}~~{\\tt{#1}}{\\ar{#2}",
						"\\let":"{#1} \\gets {#2}",
						"\\df":"\\textup{#1}",
						"\\if":"\\textup{if}~",
						"\\then":"\\textup{then}~",
						"\\else":"\\textup{else}~",
						"\\elif":"\\textup{else}~\\textup{if}",
						"\\struct":"\\textup{struct}~",
						"\\var":"\\textup{variable}~",
						"\\vars":"\\textup{variables}~",
						"\\const":"\\textup{constant}~",
						"\\consts":"\\textup{constants}~",
						"\\cond":"\\textup{condition}~",
						"\\opt":"\\textup{option}~",
						"\\opts":"\\textup{options}~",
						"\\class":"\\textup{class}~",
						"\\type":"\\textup{type}~",
						"\\len":"\\textup{length}~",
						"\\reach":"\\textup{reach}",
						"\\capa":"\\textup{capacity}",
						"\\list":"\\textup{list}",
						"\\inc":"\\texttt{++}",
						"\\dec":"\\texttt{--}",

						// fonts
						"\\tx":"\\text{#1}",
						"\\mo":"\\texttt{#1}",

						// long division
						"\\ldiv":"{#1}{\\overline{\\smash{\\big)}\\,{#2}}}",

						"\\ar":"\\left({#1}\\right)",
						"\\tup": "\\left\\langle{#1}\\right\\rangle",
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
						"\\con": "⧺",

						// geometry
						"\\vc":"\\vec{#1}",
						"\\seg":"\\overlinesegment{#1}",
						"\\lin":"\\overline{#1}",
						"\\ang":"\\angle{#1}",
						"\\tri":"\\triangle{#1}",


						// finance
						"\\cash": "\\text{\\textdollar}",
						// cases
						"\\case": "\\begin{cases}#1\\end{cases}",
						"\\rcase": "\\begin{rcases}#1\\end{rcases}",
						// hebrew
						"\\tav": "\\char\"05EA",

						// probability
						"\\pb":"{\\texttt{P}\\left\\{#1\\right\\}}",
								
						// box
						"\\sd": "{\\boxed{#1}}",
						"\\rd": "{\\fcolorbox{black}{ffdada}{$#1$}}",
						"\\bd": "{\\fcolorbox{black}{a1cec8}{$#1$}}",
						"\\yd": "{\\fcolorbox{black}{ffe8c0}{$#1$}}",
						"\\gd": "{\\fcolorbox{black}{c5eac5}{$#1$}}",
						"\\wd": "{\\fcolorbox{black}{cacaca}{$#1$}}",

						// set theory
						"\\card": "\\texttt{\\#}",
						"\\ct": "\\text{n}\\left(#1\\right)",
						"\\kper": "{\\_{#1}{\\text{P}}_{#2}}",
						"\\count": "\\text{\\#}",
						"\\num": "{\\texttt{\\#}}(#1)",
						"\\per": "\\llbracket{#1}\\rrbracket",
						"\\bag": "\\lBrace{#1}\\rBrace",
						"\\dif": "\\triangle",
						"\\nin": "\\notin",
						"\\lt": "~\\texttt{<}~",
						"\\gt": "~\\texttt{>}~",
						"\\le": "~\\texttt{≦}~",
						"\\ge": "~\\texttt{≧}~",
						"\\eq": "~\\texttt{=}~",
						"\\are": "\\subset",
						"\\arent": "~\\cancel{\\subset}~",
						"\\is": "\\subseteq",
						"\\isnt": "\\nsubseteq",
						"\\dap": "\\sqcap",
						"\\bcap": "\\bigcap",
						"\\bdap": "\\bigsqcap",
						"\\bcup": "\\bigcup",
						"\\dup": "\\sqcup",
						"\\bdup": "\\bigsqcup",
						"\\nix": "{#1}^{\\texttt{c}}",
						"\\seteq": "~{\\underline{\\overline{\\approx}}}~",
						"\\rid": "\\smallsetminus",
						"\\tar": "\\gets\\text{#1}-",
						"\\tal": "-\\text{#1}\\to",
						"\\del": "\\notni",
						"\\capp": "\\text{cap}",
						"\\dis": "~\\cancel{\\cap}~",
						"\\pow": "~\\mathcal{P}\\left({#1}\\right)",
						"\\mul": "~{⍟}~",
						"\\op": "~{\\star}~",
						"\\lamp": "~{⍝}~",
						"\\bop": "\\star",
						"\\push": "\\Lleftarrow",
						"\\pop": "\\Rrightarrow",
						"\\dom": "\\text{dom}\\left({#1}\\right)",
						"\\ran": "\\text{ran}\\left({#1}\\right)",
						"\\class": "\\left\\llbracket{#1}\\right\\rrbracket",
					},
			}]
		],
	},
});

export default withMDX(nextConfig);
