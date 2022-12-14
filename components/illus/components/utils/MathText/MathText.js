import { createRoot } from "react-dom/client";
import TeX from "@matejmazur/react-katex";

export const MathText = (
	selection,
	text = "katex",
	fontSize = 0.7,
	width = 1,
	height = 1,
	id,
	color,
	background='inherit',
	x=0,
	y=0,
) => {
	const foreignObject = selection
		.append("foreignObject")
		.attr("width", width)
		.attr("x",x)
		.attr("y",y)
		.style("overflow", "visible")
		.attr("height", height);
	// div element
	foreignObject
		.append("xhtml:div")
		.attr("id", id)
		.style("font-size", `${fontSize}rem`)
		.style("background-color", background)
		.style("padding", "0")
		.style("color", color)
		.style("position", "fixed")
		.attr("xmlns", "http://www.w3.org/1999/xhtml")
		.html(function () {
			const container = document.getElementById(id);
			const root = createRoot(container);
			return root.render(<TeX math={`${text}`} />);
		});
};
