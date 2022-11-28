import React, { useRef, useEffect } from "react";
import { Base } from "../base/Base";
import {
	svg,
	MathText,
	translate,
	insertArrowDefinitions,
	Trim,
} from "../utils";
import { generateEdges } from "./generateEdges/generateEdges";
import { nodeContainsLoop } from "./nodeContainsLoop";
import { generateNodes } from "./generateNodes/generateNodes";
import { graphPathGenerator } from "./graphPathGenerator";
import { forceCenter, forceCollide, forceLink, forceManyBody, forceSimulation, forceX, forceY, select } from "d3";

export const Graph = ({
	data = [[]],
	wh=[500,500],
	width=wh[0],
	height=wh[1],
	scale = 100,
	containerWidth = scale,
	fontSize = 0.4,
	containerHeight,
	repulsion = 0.1,
	edgeLength = 30,
	collisionRadius = 20,
	margin = 0,
	noCirc=false,
	marginTop = margin,
	marginRight = margin,
	marginBottom = margin,
	marginLeft = margin,
	margins = [marginTop, marginRight, marginBottom, marginLeft],
	nodeRadius = 4,
	edgeColor = "#00b2e8",
	nodeFillColor = "#e3f7ca",
	nodeStrokeColor = edgeColor,
	ty = -7,
	tx = -10,
	dimensionsHelper = false,
	isDirected=false,
	straightEdges=true,
	className = "Graph",
	noNodeLabels = false,
	id = `${Date.now()}`,
	label,
}) => {
	const _graphREF = useRef();
	const _svg = svg(width, height, margins);
	const edges = generateEdges(data);
	const nodes = Object.values(generateNodes(data, edges));
	const networkCenter = forceCenter()
		.x(_svg.width / 2)
		.y(_svg.height / 2);
	const manyBody = forceManyBody().strength(-150).distanceMax(100);
	const xForce = forceX(_svg.width / 2).strength(repulsion);
	const yForce = forceY(_svg.height / 2).strength(repulsion);
	const force = forceSimulation(nodes)
		.force("charge", manyBody)
		.force("link", forceLink(edges).distance(edgeLength).iterations(1))
		.force("center", networkCenter)
		.force("x", xForce)
		.force("y", yForce)
		.force("collision", forceCollide().radius(collisionRadius))
	const renderGraph = () => {
		const canvas = select(_graphREF.current).select("g.svgElement");
		if (dimensionsHelper) {
			select(_graphREF.current).style("border", "solid thin red");
			canvas
				.append("rect")
				.attr("width", _svg.width)
				.attr("height", _svg.height)
				.attr("fill", "red");
		}
		const graph = canvas
			.append("g")
			.attr("class", className ? `Graph ${className}` : "Graph");

		// edge enter selection
		const edgeEnter = graph
			.selectAll("g.edges")
			.data(edges)
			.enter()
			.append("g")
			.attr("class", (d) => `graphEdge${d.class ? ` ${d.class}` : ""}`);

		// edge paths element
		if (straightEdges) {
			edgeEnter.append("line");
			insertArrowDefinitions(
				graph,
				`ArrowHead${id}`,
				14,
				0,
				6,
				6,
				"auto",
				"rgb(161, 206, 200)",
				className,
			);
		} else {
			edgeEnter.append("path");
			insertArrowDefinitions(
				graph,
				`ArrowHead${id}`,
				14,
				0,
				6,
				6,
				"auto",
				"rgb(161, 206, 200)",
				className,
			);
		}
		edgeEnter.attr("fill", "none").attr("stroke", edgeColor);

		if (isDirected) {
			edgeEnter
				.filter((d) => !nodeContainsLoop(d))
				.attr("marker-end", `url(#ArrowHead${id})`);
		}

		// node enter selection
		const nodeEnter = graph
			.selectAll("g.nodes")
			.data(nodes)
			.enter()
			.append("g")
			.attr("class", (d) =>
				d.class ? `graphNode ${d.class}` : `graphNode`,
			);

		// the node circles
			nodeEnter
				.append("circle")
				.attr("r", (d) => (d.r || d.r === 0 ? d.r : nodeRadius))
				.attr("class", noCirc ? "no-circle" : "graph-node-circle")
				

		// if the node is radial, append an additional circle
		// yields a "radar" effect
		nodeEnter
			.filter((d) => d.radial)
			.append("circle")
			.attr("class", "graphRadialNode")
			.attr("r", (d) =>
				typeof d.radial === "number" ? d.radial : radialRadius,
			)
			.attr("fill-opacity", 0.3)
			.attr("stroke-width", 1)
			.attr("stroke-opacity", 0.6);
		nodeEnter
			.selectAll("circle")
			.attr("stroke", nodeStrokeColor)
			.attr("fill", nodeFillColor);
		if (!noNodeLabels) {
			nodeEnter
				.append("g")
				.attr("transform", (d) => {
					const x = d.dx ? d.dx : tx;
					const y = d.dy ? d.dy : ty;
					return translate(x, y);
				})
				.each(function (d, i) {
					const graphId = Trim(id, [/ /]);
					let sel = select(this);
					MathText(
						sel,
						d.id,
						d.fs?d.fs:fontSize,
						50,
						50,
						`${graphId}-${d.id}-${i}`,
						"black",
					);
				});
		}

		if (label) {
			const labelGroup = graph
				.append("g")
				.attr("transform", translate(_svg.width / 2 - 25, _svg.height));
			const labelId = Trim(label, [/ /]);
			MathText(
				labelGroup,
				label,
				fontSize - 0.2,
				50,
				50,
				`${id}-${labelId}`,
				"black",
			);
		}
		const edgeLabels = edgeEnter
			.filter((d) => d.id)
			.append("g")
			.attr("class", "edgeLabel")
			.attr('foo', (d) => console.log(d))
			.each(function (d, i) {
				const graphId = Trim(id, [/ /]);
				let x = d.ex !== undefined ? d.ex : 0;
				let y = d.ey !== undefined ? d.ey : 0;
				let sel = select(this);
				MathText( sel, d.id, fontSize, 50, 10, `${graphId}-${d.id}-${i}`, "black","white",x,y);
			});
		force.on("tick", function () {
			let edgeSelection;
			if (straightEdges) {
				edgeSelection = edgeEnter.selectAll("line");
				edgeSelection
					.attr("x1", (d) => d.source.x)
					.attr("y1", (d) => d.source.y)
					.attr("x2", (d) => d.target.x)
					.attr("y2", (d) => d.target.y);
			} else {
				edgeSelection = edgeEnter.selectAll("path");
				edgeSelection.attr("d", (d) => graphPathGenerator(d));
			}
			nodeEnter.attr("transform", (d) => `translate(${d.x}, ${d.y})`);
			edgeLabels.attr("transform", (d) => {
				const x0 = d.source.x;
				const y0 = d.source.y;
				const x1 = d.target.x;
				const y1 = d.target.y;
				return translate((x0 + x1) / 2, (y0 + y1) / 2);
			});
		});
	};
	useEffect(() => {
		renderGraph();
	});
	return (
		<Base
			id={_graphREF}
			width={width}
			height={height}
			containerWidth={containerWidth}
			containerHeight={containerHeight}
			margins={margins}
		/>
	);
};
