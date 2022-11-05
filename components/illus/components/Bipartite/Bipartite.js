import React, { useRef, useEffect } from "react";
import { Base } from "../base/Base";
import { linkHorizontal, select } from "d3";
import {
	svg,
	translate,
	MathText,
	Trim,
	insertArrowDefinitions,
} from "../utils";
import {
	generateBipartiteEdges,
	generateBipartiteNodes,
	justify,
	computeNodeLinks,
	computeNodeValues,
	computeNodeDepths,
	computeNodeHeights,
	computeNodeBreadths,
	computeLinkBreadths,
} from "./helpers";

export const Bipartite = ({
	data = [[], [], []],
	width = 300,
	caption,
	height = 300,
	scale = 100,
	containerWidth = scale,
	containerHeight,
	marginTop = 50,
	marginRight = 50,
	marginBottom = 50,
	marginLeft = 50,
	margins = [marginTop, marginRight, marginBottom, marginLeft],
	fontSize = 1,
	edgeColor = "black",
	nodeStrokeColor = edgeColor,
	gap = 20,
	nodePadding = 10,
	nodeFillColor = "white",
	nodeRadius = 5,
	isDirected = false,
	className = "Bipartite",
	id = "Bipartite",
	groups,
	label,
	symmetric = false,
	reverseArrows = false,
}) => {
	const _bipartiteREF = useRef();
	const _svg = svg(width, height, margins);
	const edges = generateBipartiteEdges(data);
	const nodes = generateBipartiteNodes(data, edges);
	const nodeCount = nodes.length;
	const x0 = gap;
	const y0 = gap;
	const x1 = _svg.width - x0;
	const y1 = _svg.height - y0;
	const dx = 0;
	const py = nodePadding;
	const dy = py ? py : nodeCount * 4;
	const _id = (d) => d.index;
	const align = justify;
	const iterations = 6;
	let sort;
	let linkSort;
	computeNodeLinks(nodes, edges, _id);
	computeNodeValues(nodes);
	computeNodeDepths(nodes);
	computeNodeHeights(nodes);
	computeNodeBreadths(
		nodes,
		x1,
		x0,
		dx,
		align,
		sort,
		py,
		dy,
		y1,
		y0,
		iterations,
		linkSort,
	);
	computeLinkBreadths(nodes);
	const linkGen = linkHorizontal()
		.source((d) => [d.source.x1, d.source.y1])
		.target((d) => [d.target.x0, d.target.y0]);

	const renderBipartite = () => {
		// set up group
		const canvas = select(_bipartiteREF.current).select("g.svgElement");
		const bipartite = canvas.append("g").attr("class", "Bipartite");
		const edgeGroup = bipartite
			.append("g")
			.attr("class", "BipartiteEdges");
		if (isDirected) {
			insertArrowDefinitions(
				bipartite,
				`${className}ArrowEnd`,
				16,
				0,
				6,
				6,
				"auto",
				"inherit",
			);
			insertArrowDefinitions(
				bipartite,
				`${className}ArrowStart`,
				16,
				0,
				6,
				6,
				"auto-start-reverse",
				"inherit",
			);
		}
		// add link paths to edge group
		edgeGroup
			.selectAll("paths")
			.data(edges)
			.enter()
			.append("path")
			.attr("d", (d) => linkGen(d))
			.attr("stroke", edgeColor)
			.attr("fill", "none")
			.attr("marker-end", (d) => {
				if (!reverseArrows) {
					return `url(#${className}ArrowEnd)`;
				} else {
					return;
				}
			})
			.attr("marker-start", (d) => {
				if (symmetric || reverseArrows) {
					return `url(#${className}ArrowStart)`;
				}
				if (d?.sym) {
					return `url(#${className}ArrowStart)`;
				}
			})
			.attr("display", (d) => {
				if (d.source.hide || d.target.hide) return "none";
			});
		const nodeGroup = bipartite
			.append("g")
			.attr("class", "BipartiteNodes");
		// add nodes to node group
		const nodeEnter = nodeGroup
			.selectAll(".node")
			.data(nodes)
			.enter()
			.append("g")
			.attr("class", "bipartiteNode")
			.attr("transform", (d) => translate(d.x0, d.y0))
			.attr("display", (d) => (d.hide ? "none" : ""));
		// add circles to each node
		nodeEnter
			.append("circle")
			.attr("stroke", nodeStrokeColor)
			.attr("fill", nodeFillColor)
			.attr("r", nodeRadius);
		// append labels
		nodeEnter
			.append("g")
			.attr("transform", translate(-3, 5))
			.each(function (d, i) {
				const graphId = Trim(id, [/ /]);
				let sel = select(this);
				MathText(
					sel,
					d.name,
					fontSize,
					50,
					10,
					`${graphId}-${d.name}-${i}`,
					"black",
				);
			});
		// append graph label, if provided
		if (label) {
			const labelGroup = bipartite
				.append("g")
				.attr(
					"transform",
					translate(
						_svg.width / 2 - gap / 2,
						_svg.height - margins[2] / 6,
					),
				);
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
		if (groups) {
			const domain = bipartite
				.append("g")
				.attr("class", "bipartiteGroup bipartiteDomain");
			const rectWidth = gap * 2;
			const rectHeight = _svg.height;
			const range = bipartite
				.append("g")
				.attr("class", "bipartiteGroup bipartiteRange")
				.attr("transform", translate(_svg.width - gap * 2, 0));
			const domainLabel = domain
				.append("g")
				.attr("transform", translate(rectWidth / 4 + 3, 0));
			const rangeLabel = range
				.append("g")
				.attr("transform", translate(rectWidth / 4 + 3, 0));
			MathText(
				domainLabel,
				groups[0],
				fontSize,
				50,
				50,
				`${id}_${groups[0]}`,
				"inherit",
			);
			MathText(
				rangeLabel,
				groups[1],
				fontSize,
				50,
				50,
				`${id}_${groups[1]}`,
				"inherit",
			);
		}
	};

	useEffect(() => {
		if (_bipartiteREF.current) renderBipartite();
	});
	return (
		<Base
			id={_bipartiteREF}
			caption={caption}
			type={"BipartiteContainer"}
			width={width}
			height={height}
			containerWidth={containerWidth}
			containerHeight={containerHeight}
			margins={margins}
		/>
	);
};
