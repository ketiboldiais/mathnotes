import React, { useRef, useEffect } from "react"; import { Base } from
"../base/Base"; import { renderAngle, renderArea,
renderAxes, renderRectangle, renderCircle, renderRay, renderLabel, renderLine,
renderPoint, renderLineSegment, renderBracket, } from "./renderers"; import {
svg, getPropertyValues, canvasHelper } from "../utils"; import {
generateFunctionData } from "./generateFunctionData/generateFunctionData";
import { computePath } from "./computePath/computePath";
import { axisBottom, axisLeft, scaleLinear, select } from "d3";

export const Plot = ({
	id = `plot-${Date.now()}`,
	functions,
	geo,
	caption,
	domain = [-10, 10],
	range = domain,
	samples = 500,
	width = 400,
	height = 400,
	scale = 100,
	containerWidth = scale,
	containerHeight,
	noAxes = false,
	renderXAxis = true,
	renderYAxis = true,
	tickCount = 10,
	xTickCount = tickCount,
	yTickCount = xTickCount,
	noTicks = false,
	xLabel = { text: "x", w: 20 },
	yLabel = { text: "y" },
	fontSize = 0.6,
	tickFontSize = 0.8,
	axesColor = "var(--text-color)",
	plotLineColor = "firebrick",
	strokeWidth = 1,
	marginTop = 10,
	marginRight = 10,
	marginBottom = 10,
	marginLeft = 10,
	margins = [marginTop, marginRight, marginBottom, marginLeft],
	helpers = false,
}) => {
	const _plotREF = useRef();
	const _svg = svg(width, height, margins);
	const _domainLowerBound = domain[0];
	const _domainUpperBound = domain[1];
	const _rangeLowerBound = range[0];
	const _rangeUpperBound = range[1];
	const xScale = scaleLinear(
		[_domainLowerBound, _domainUpperBound],
		[0, _svg.width],
	);
	const scaleDimensionX = scaleLinear(
		[0, _domainUpperBound * 2],
		[0, _svg.width],
	);
	const yScale = scaleLinear(
		[_rangeLowerBound, _rangeUpperBound],
		[_svg.height, 0],
	);
	const xAxis = axisBottom(xScale)
		.tickSizeInner(3)
		.tickSizeOuter(0)
		.ticks(xTickCount);
	const yAxis = axisLeft(yScale)
		.tickSizeInner(3)
		.tickSizeOuter(0)
		.ticks(yTickCount);

	const renderGeometries = (geometries, plot) => {
		for (let i = 0; i < geometries.length; i++) {
			let geometry = geometries[i];
			switch (geometry.type) {
				case "rectangle":renderRectangle(
					plot, geometry, i, xScale, yScale, plotLineColor);
					break;
				case "point":renderPoint(
					plot, geometry, i, xScale, yScale, _plotREF, plotLineColor);
					break;
				case "segment":renderLineSegment(
					plot, geometry, i, xScale, yScale, plotLineColor, _plotREF);
					break;
				case "line":renderLine(plot,geometry,i,xScale,yScale,plotLineColor);
					break;
				case "bracket":renderBracket(
					plot, geometry, i, xScale, yScale,
					plotLineColor, _plotREF, scaleDimensionX,);
					break;
				case "ray":renderRay(plot, geometry, i, xScale, yScale, plotLineColor);
					break;
				case "label":renderLabel(
					plot, geometry, i, xScale, yScale, fontSize, id);
					break;
				case "circle":renderCircle(
					plot, geometry, i, xScale, yScale,
					scaleDimensionX,plotLineColor,_plotREF);
					break;
				case "angle":renderAngle(plot,geometry,i,scaleDimensionX,
					plotLineColor,xScale,yScale,id,fontSize);
					break;}}};

	const renderPlot = (plot) => {
		const userFunctions = getPropertyValues(functions, "f");
		const funcGroupData = generateFunctionData(
			functions,userFunctions,samples,
			_domainUpperBound,_domainLowerBound,_rangeUpperBound,_rangeLowerBound,
		);
		for (let i = 0; i < funcGroupData.length; i++) {
			if (funcGroupData[i].integral) {
				const integral = funcGroupData[i].integral;
				if (integral.bounds) {
					const bounds = integral.bounds;
					plot
						.append("g")
						.attr("class", "integral-area")
						.append("path")
						.datum(funcGroupData[i].data)
						.attr("fill", "red")
						.attr("fill-opacity", 0.2)
						.attr("d", renderArea(bounds, xScale, yScale));
				}
			}
			plot
				.append("g")
				.attr("class", "functionPlot")
				.append("path")
				.datum(funcGroupData[i].data)
				.attr("shape-rendering", "geometric-precision")
				.attr("fill", "none")
				.attr("stroke",
					     funcGroupData[i].color ? funcGroupData[i].color : plotLineColor)
				.attr("stroke-width", strokeWidth)
				.attr("stroke-dasharray",
					     funcGroupData[i].dash ? funcGroupData[i].dash : 0)
				.attr("d", computePath(yScale, xScale));
		}
	};
	useEffect(() => {
		if (_plotREF.current) {
			const canvas = select(_plotREF.current).select("g.svgElement");
			const plot = canvas.append("g").attr("class", "plot");
			if (!noAxes)
				{renderAxes(plot,axesColor,renderXAxis,renderYAxis,_svg,
									  xAxis,yAxis,tickFontSize,noTicks,xLabel,yLabel,
									  fontSize,id)}
			if (functions) { renderPlot(plot)}
			if (geo) {renderGeometries(geo, plot)}
			if (helpers) canvasHelper(_plotREF, _svg, margins);
		}
	});
	return (
		<Base id={_plotREF} type="Plot" caption={caption} width={width}
		height={height} containerWidth={containerWidth}
		containerHeight={containerHeight} margins={margins} />
	);
};
