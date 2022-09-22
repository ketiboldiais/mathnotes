import { select } from "d3";

export function canvasHelper(_canvasRef, svg, margins) {
	const container = select(_canvasRef.current);
	container.style("border", "solid thin red");
	const svgElement = container.select("svg");
	svgElement.style("background-color", "lightgrey");
	const canvas = svgElement.select("g.svgElement");
	canvas
		.append("rect")
		.attr("stroke", "red")
		.attr("fill", "none")
		.attr("width", svg.width)
		.attr("height", svg.height);
	canvas
		.append("text")
		.attr("x", svg.width / 2)
		.attr("y", 0)
		.attr("dy", "-0.5em")
		.text(`${margins[0]}`);
	canvas
		.append("text")
		.attr("x", svg.width + margins[1] / 2)
		.attr("y", svg.height / 2)
		.attr("dy", "-0.5em")
		.text(`${margins[1]}`);
	canvas
		.append("text")
		.attr("x", svg.width / 2)
		.attr("y", svg.height + margins[2])
		.attr("dy", "-0.5em")
		.text(`${margins[2]}`);
	canvas
		.append("text")
		.attr("x", 0 - margins[3] / 2)
		.attr("y", svg.height / 2)
		.attr("dy", "-0.5em")
		.text(`${margins[3]}`);
	canvas
		.selectAll("text")
		.attr("text-anchor", "middle")
		.attr("font-size", "0.75rem");
	// const helperCanvas = canvas.append("g");
	// helperCanvas
	// 	.append("text")
	// 	.attr("font-size", "1em")
	// 	.attr("x", svg.width / 2)
	// 	.attr("y", svg.height - 5)
	// 	.attr("text-anchor", "middle")
	// 	.attr("fill", "lightgrey")
	// 	.text(`${svg.width}`);
	// helperCanvas
	// 	.append("text")
	// 	.attr("font-size", "1em")
	// 	.attr("x", 0)
	// 	.attr("y", svg.height / 2)
	// 	.attr("text-anchor", "middle")
	// 	.attr("fill", "lightgrey")
	// 	.text(`${svg.height}`);
	// helperCanvas
	// 	.append("rect")
	// 	.attr("stroke", "red")
	// 	.attr("fill", "none")
	// 	.attr("width", svg.width)
	// 	.attr("height", svg.height);
	// helperCanvas
	// 	.append("rect")
	// 	.attr("stroke", "blue")
	// 	.attr("fill", "none")
	// 	.attr("width", svg.width + margins[1] + margins[3])
	// 	.attr("height", svg.height + margins[0] + margins[2]);
}
