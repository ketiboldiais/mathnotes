import React, { useRef, useEffect } from "react";
import { svg, canvasHelper, translate } from "../utils";
import { Base } from "../base/Base";
import * as d3 from "d3";
import { generatePlotPoints } from "./generatePlotPoints/generatePlotPoints";
import { renderSurface } from "./renderSurface/renderSurface";
import { colorFunction } from "./colorFunction/colorFunction";

export const Plot3D = ({
	functions = [],
	width = 600,
	height = 600,
	scale = 100,
	containerWidth = scale,
	containerHeight,
	marginTop = 60,
	marginRight = 60,
	marginBottom = 60,
	marginLeft = 60,
	margins = [marginTop, marginRight, marginBottom, marginLeft],
	yaw = 0.5,
	pitch = 0.5,
	helpers = false,
	xDomain = [-10, 10],
	yDomain = [-2, 2],
	zRange = xDomain,
	renderXAxis = true,
	renderYAxis = true,
	renderZAxis = true,
	xTickCount = 10,
	yTickCount = 2,
	zTickCount = 10,
}) => {
	const Plot3DFigure = useRef();
	const _svg = svg(width, height, margins);
	const xLowerBound = xDomain[0];
	const yLowerBound = yDomain[0];
	const zLowerBound = zRange[0];
	const xUpperBound = xDomain[1];
	const yUpperBound = yDomain[1];
	const zUpperBound = zRange[1];
	const xScale = d3.scaleLinear(
		[xLowerBound, xUpperBound],
		[0, _svg.width - margins[2]],
	);
	const yScale = d3.scaleLinear([0, yUpperBound], [0, margins[0]]);
	const zScale = d3.scaleLinear(
		[zLowerBound, zUpperBound],
		[_svg.height, 0],
	);
	const xAxis = d3
		.axisBottom(xScale)
		.tickSizeInner(3)
		.tickSizeOuter(0)
		.ticks(xTickCount);
	const yAxis = d3
		.axisTop(yScale)
		.tickSizeInner(3)
		.tickSizeOuter(0)
		.ticks(yTickCount);
	const zAxis = d3
		.axisLeft(zScale)
		.tickSizeInner(3)
		.tickSizeOuter(0)
		.ticks(zTickCount);

	useEffect(() => {
		const canvas = d3.select(Plot3DFigure.current).select("g.svgElement");
		const plot3d = canvas.append("g").attr("class", "plot3d");
		let _data;
		let _surface;
		for (let i = 0; i < functions.length; i++) {
			_data = generatePlotPoints(functions[i]);
			_surface = renderSurface(_data, _svg.width, _svg.height, yaw, pitch);
			plot3d
				.selectAll("paths")
				.data(_surface)
				.enter()
				.append("path")
				.attr("d", (d) => d.path)
				.attr("fill", (d) => colorFunction(d.data));
		}
		const plotAxes = plot3d.append("g").attr("class", "plot3dAxes");
		const xAxisGroup = plotAxes
			.append("g")
			.attr("class", "3dPlot_xAxis")
			.attr("transform", `${translate(0, _svg.height)} rotate(10)`);
		xAxisGroup.call(xAxis);
		const yAxisGroup = plotAxes
			.append("g")
			.attr("class", "3dPlot_yAxis")
			.attr("transform", `rotate(-10)`);
		yAxisGroup.call(yAxis);
		const zAxisGroup = plotAxes.append("g").attr("class", "3dPlot_zAxis");
		zAxisGroup.call(zAxis);

		if (helpers) canvasHelper(Plot3DFigure, _svg, margins);
	});
	return (
		<Base
			id={Plot3DFigure}
			width={width}
			height={height}
			containerWidth={containerWidth}
			containerHeight={containerHeight}
			margins={margins}
		/>
	);
};
