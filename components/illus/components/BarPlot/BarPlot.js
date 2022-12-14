import React, { useRef, useEffect } from "react";
import {
	isObjectLiteral,
	translate,
	svg,
	setValue,
	getArrayMax,
	getArrayMin,
	getPropertyValues,
} from "../utils";
import { Base } from "../base/Base";
import { select, scaleBand, scaleLinear, axisBottom, axisLeft } from "d3";

const formatData = (arr = []) => {
	let data = [];
	for (let i = 0; i < arr.length; i++) {
		if (isObjectLiteral(arr[i])) {
			data.push(arr[i]);
		} else {
			let datum = {
				x: arr[i][0],
				y: arr[i][1],
				label: setValue(arr[i][2], ""),
			};
			data.push(datum);
		}
	}
	return data;
};

export const BarPlot = ({
	data,
	colorWeight = [],
	xTickRotate = 0,
	xAxisLabel,
	yAxisLabel,
	width = 500,
	height = 450,
	scale=100,
	wh=[width,height],
	containerWidth=scale,
	containerHeight,
	margin=70,
	margins = [margin, margin, margin, margin],
}) => {
	const ref = useRef();
	const _data = formatData(data);
	const _svg = svg(wh[0], wh[1], margins);

	const _yMin = setValue(getArrayMin(getPropertyValues(_data, "y")));
	const _yMax = setValue(getArrayMax(getPropertyValues(_data, "y")));

	const xScale = scaleBand()
		.domain(getPropertyValues(_data, "x"))
		.range([0, _svg.width])
		.padding(0.05);
	const yScale = scaleLinear()
		.domain([0, _yMax])
		.range([_svg.height, 0]);
	const color = colorWeight
		? scaleLinear().domain([_yMin, _yMax]).range(colorWeight)
		: "salmon";
	const xAxis = axisBottom().scale(xScale);
	const yAxis = axisLeft().scale(yScale);

	useEffect(() => {
		const BarPlot = select(ref.current).select("g.svgElement");
		const bars = BarPlot.selectAll("rectangles")
			.data(_data)
			.enter()
			.append("g")
			.attr("class", "bar-plot-bar");
		// bar rectangles
		bars
			.append("rect")
			.attr("fill", (d) => color(d.y))
			.attr("x", (d) => xScale(d.x))
			.attr("y", (d) => yScale(d.y))
			.attr("height", (d) => _svg.height - yScale(d.y))
			.attr("width", xScale.bandwidth());

		const xAxisGroup = BarPlot.append("g")
			.attr("class", "x-axis")
			.attr("transform", translate(0, _svg.height));
		const yAxisGroup = BarPlot.append("g").attr("class", "y-axis");

		// render x-axis
		xAxisGroup.call(xAxis);
		if (xTickRotate) {
			xAxisGroup
				.selectAll(".tick")
				.select("text")
				.attr("text-anchor", "start")
				.attr("transform", `rotate(${xTickRotate})`)
				.attr("dx", "0.6em");
		}
		// render y-axis
		yAxisGroup.call(yAxis);
		// add x-label if provided by user
		if (xAxisLabel) {
			const labelXPosition = _svg.width + margins[1] / 4;
			const labelYPosition = margins[2] / 7;
			const _xAxisLabel = xAxisGroup
				.select("g")
				.append("g")
				.attr("transform", translate(labelXPosition, labelYPosition));
			_xAxisLabel
				.append("text")
				.attr("class", "axis-label x-axis-label")
				.text(xAxisLabel);
		}
		// add y-label if provided by user
		if (yAxisLabel) {
			const ylabelXPosition = 0;
			const ylabelYPosition = -_svg.height - margins[0] / 5;
			const _yAxisLabel = yAxisGroup
				.select("g")
				.append("g")
				.attr("transform", translate(ylabelXPosition, ylabelYPosition));
			_yAxisLabel
				.append("text")
				.attr("class", "axis-label y-axis-label")
				.text(yAxisLabel);
		}
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
