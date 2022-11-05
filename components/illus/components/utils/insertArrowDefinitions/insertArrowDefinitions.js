export const insertArrowDefinitions = (
	selection,
	markerId = "marker-end",
	refX = 8,
	refY = 0,
	markerWidth = 5,
	markerHeight = 5,
	orient = "auto",
	fill = "black",
	className="arrowMarker",
) => {
	selection
		.append("svg:defs")
		.selectAll("marker")
		.data(["end"])
		.enter()
		.append("svg:marker")
		.attr("id", markerId)
		.attr("viewBox", "0 -5 10 10")
		.attr("refX", refX)
		.attr("refY", refY)
		.attr("markerWidth", markerWidth)
		.attr("markerHeight", markerHeight)
		.attr("orient", orient)
		.append("svg:path")
		.attr('class', `${className}ArrowHead`)
		.attr('fill', fill)
		.attr("d", "M0,-5L10,0L0,5Z");
};
