import React, { useRef, useEffect } from "react";
import { svg, canvasHelper, translate } from "../utils";
import { Base } from "../base/Base";
import { generatePlotPoints } from "./generatePlotPoints/generatePlotPoints";
import { renderSurface } from "./renderSurface/renderSurface";
import { colorFunction } from "./colorFunction/colorFunction";
import { scaleLinear, select } from "d3";

export const Plot3D = ({
	functions = [],
	wh=[500,500],
	width = wh[0],
	height = wh[1],
	scale = 100,
	containerWidth = scale,
	containerHeight,
	m=10,
	marginTop = m,
	marginRight = m,
	marginBottom = m,
	marginLeft = m,
	margins = [marginTop, marginRight, marginBottom, marginLeft],
	yaw = 0.5,
	pitch = 0.6,
	helpers = false,
}) => {
	const Plot3DFigure = useRef();
	const _svg = svg(width, height, margins);
	useEffect(() => {
		const canvas = select(Plot3DFigure.current).select("g.svgElement");
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
				.attr("fill", (d) => colorFunction(d.data))
				.attr('stroke', 'black')
				.attr('stroke-width',2)
		}


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
