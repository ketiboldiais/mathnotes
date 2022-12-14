import { range, scaleBand, select } from "d3";
import React, { useRef, useEffect } from "react";
import { Base } from "../base/Base";
import {
	className,
	isObjectLiteral,
	setClassName,
	svg,
	translate,
} from "../utils";

const formatData = (arr = []) => {
	let data = [];
	for (let i = 0; i < arr.length; i++) {
		if (isObjectLiteral(arr[i])) {
			data.push(arr[i]);
		} else {
			let queuer = { val: arr[i] };
			data.push(queuer);
		}
	}
	return data;
};

export const Queue = ({
	data = [],
	width = 300,
	height = 300,
	scale = 100,
	containerWidth = scale,
	containerHeight = 0.5,
	margins = [20, 20, 20, 20],
}) => {
	const queueFigure = useRef();
	const _svg = svg(width, height, margins);
	const _data = formatData(data);
	const frameCount = _data.length;
	const xScale = scaleBand()
		.domain(range(frameCount))
		.range([0, _svg.width])
		.paddingInner(0.1);
	const yScale = scaleBand()
		.domain(range(frameCount))
		.range([_svg.height, 0]);

	const renderQueue = () => {
		const canvas = select(queueFigure.current).select("g.svgElement");
		const queueGroup = canvas
			.selectAll("g.queuers")
			.data(_data)
			.enter()
			.append("g")
			.attr("class", (d) => setClassName(d.focus, className.queue.queuer))
			.attr("transform", (d, i) => translate(xScale(i), 0));
		const queuerRectangle = queueGroup
			.append("rect")
			.attr("width", xScale.bandwidth())
			.attr("height", yScale.bandwidth())
			.attr("fill", "white")
			.attr("stroke", "black");
		const queuerText = queueGroup
			.append("text")
			.attr("text-anchor", "middle")
			.attr("fill", "black")
			.attr("x", xScale.bandwidth() / 2)
			.attr("y", yScale.bandwidth() / 2)
			.attr("dy", "0.4em")
			.text((d) => d.val);
		const queuerIndex = queueGroup
			.append("g")
			.attr("class", className.queue.index);
		// index rectangles
		queuerIndex
			.append("rect")
			.attr("width", xScale.bandwidth())
			.attr("height", yScale.bandwidth() / 2)
			.attr("y", yScale.bandwidth())
			.attr("fill", "white")
			.attr("stroke", "black");
		// index text
		queuerIndex
			.append("text")
			.attr("text-anchor", "middle")
			.attr("fill", "black")
			.attr("x", xScale.bandwidth() / 2)
			.attr("y", yScale.bandwidth() + yScale.bandwidth() / 3)
			.attr('dy', '0.15em')
			.text((d, i) => i);
		// annotation
		queueGroup
			.filter((d) => d.ant)
			.append("g")
			.attr("class", className.queue.annotation)
			.append("text")
			.attr("text-anchor", "middle")
			.attr("x", xScale.bandwidth() / 2)
			.attr("y", -4)
			.text((d) => d.ant);
	};

	useEffect(() => {
		if (queueFigure.current) renderQueue();
	});
	return (
		<Base
			id={queueFigure}
			width={width}
			height={height}
			containerWidth={containerWidth}
			containerHeight={containerHeight}
			margins={margins}
		/>
	);
};
