import React, { useRef, useEffect } from "react";
import { removeEndTicks, svg, translate } from "../utils";
import { Base } from "../base/Base";
import * as d3 from "d3";

export const PairMatrix = ({
	data = [
		["a", "Democrat"],
		["b", "Republican"],
		["c", "Independent"],
		["d", "Independent"],
	],
	width = 500,
	height = 450,
	containerWidth,
	containerHeight,
	margins = [70, 70, 70, 70],
}) => {
	const ref = useRef();
	const _svg = svg(width, height, margins);
	const xVals = data.map((d) => d[1]);
	const yVals = data.map((d) => d[0]);
	console.log(yVals);
	console.log(xVals);
	const xScale = d3.scaleBand().domain(xVals).range([0, _svg.width]);
	const yScale = d3.scaleBand().domain(yVals).range([0, _svg.height]);

	const renderXAxis = (selection) => {
		const xAxis = d3.axisTop().scale(xScale).tickSizeOuter(0);
		const xAxisGroup = selection
			.append("g")
			.attr("class", "dot_matrix_x_axis");
		xAxisGroup.call(xAxis);
		xAxisGroup.selectAll("line").remove();
	};

	const renderYAxis = (selection) => {
		const yAxis = d3.axisLeft().scale(yScale).tickSizeOuter(0);
		const yAxisGroup = selection
			.append("g")
			.attr("class", "dot_matrix_y_axis");
		yAxisGroup.call(yAxis);
		yAxisGroup.selectAll("line").remove();
	};

	const renderDotMatrix = () => {
		const canvas = d3.select(ref.current).select("g.svgElement");
		const dotMatrixCanvas = canvas.append("g").attr("class", "DotMatrix");
		renderXAxis(dotMatrixCanvas);
		renderYAxis(dotMatrixCanvas);
		dotMatrixCanvas
			.selectAll("circles")
			.data(data)
			.enter()
			.append("circle")
			.attr('foo', d => console.log(d))
			.attr('cx', (d) => xScale(d[0]))
			.attr('cy', (d) => yScale(d[1]))
			.attr('r', 5)
			.attr('stroke', 'black')
	};

	useEffect(() => {
		renderDotMatrix();
	});
	return (
		<Base
			id={ref}
			width={width}
			height={height}
			containerWidth={containerWidth}
			containerHeight={containerHeight}
			margins={margins}
		/>
	);
};
