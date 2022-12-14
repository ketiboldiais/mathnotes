import React, { useRef, useEffect } from "react";
import { svg } from "../utils/svg/svg";
import { generateHTreeData } from "../HTree/generateHTreeData/generateHTreeData";
import { insertArrowDefinitions } from "../utils/insertArrowDefinitions/insertArrowDefinitions";
import { Base } from "../base/Base";
import { translate } from "../utils/translate/translate";
import { linkVertical, select, stratify, tree } from "d3";

export const ParseTree = ({
	data = [],
	width = 450,
	height = 350,
	containerWidth,
	containerHeight,
	margins = [70, 70, 70, 70],
	fontSize = 10,
	isDirected = false,
	sibSpace = 1,
	nSibSpace = 2,
	nodeRadius = 7,
	nodeTextColor = "",
	edgeColor = "grey",
}) => {
	const _ptreeREF = useRef();
	const _svg = svg(width, height, margins);
	const _data = generateHTreeData(data);
	let root = stratify()
		.id((d) => d.child)
		.parentId((d) => d.parent)(_data);
	const diagonal = linkVertical()
		.x((d) => d.x)
		.y((d) => d.y);
	const treeStructure = tree()
		.size([_svg.width, _svg.height])
		.separation((a, b) => (a.parent === b.parent ? sibSpace : nSibSpace));
	treeStructure(root);
	const links = root.links();
	const nodes = root.descendants();

	const renderParseTree = () => {
		const canvas = select(_ptreeREF.current).select("g.svgElement");
		const htree = canvas.append("g").attr("class", "htree");
		if (isDirected)
			insertArrowDefinitions(
				htree,
				"ptree-arrow",
				nodeRadius * 3,
				0.1,
				6,
				6,
				"auto",
				edgeColor,
			);
		const _links = htree.append("g").attr("class", "parseTreeEdges");

		// append paths
		_links
			.selectAll("htree-edge")
			.data(links)
			.enter()
			.filter((d) => !(d.source.data.display || d.target.data.display))
			.append("path")
			.attr("fill", "none")
			.attr("d", (d) => diagonal(d))
			.attr("stroke", edgeColor)
			.attr("marker-end", "url(#ptree-arrow)");
		const _nodes = htree.append("g").attr("class", "parseTreeNodes");
		const _node = _nodes
			.selectAll("htree-node")
			.data(nodes)
			.enter()
			.filter((d) => !(d.data.display === "none"))
			.append("g")
			.attr(
				"class",
				(d) =>
					`ptree-node${
						d.children ? ` ptree-node-branch` : `ptree-node-leaf`
					}`,
			)
			.attr("transform", (d) => translate(d.x, d.y));

		// add text outline
		// _node
		// 	.append("text")
		// 	.text((d) => d.id)
		// 	.attr("stroke", getBackgroundColor(_ptreeREF))
		// 	.attr("fill", getBackgroundColor(_ptreeREF))
		// 	.attr("font-size", fontSize)
		// 	.attr("stroke-width", fontSize / 2)
		// 	.attr("text-anchor", "middle")
		// 	.attr("dy", nodeRadius / 2);

		// add text to the node
		_node
			.append("text")
			.text((d) => d.id)
			.attr("font-size", fontSize)
			.attr("fill", nodeTextColor)
			.attr("text-anchor", "middle")
			.attr("dy", nodeRadius / 2);
	};

	useEffect(() => {
		if (_ptreeREF.current) renderParseTree();
	});

	return (
		<Base
			id={_ptreeREF}
			width={width}
			height={height}
			containerWidth={containerWidth}
			containerHeight={containerHeight}
			margins={margins}
		/>
	);
};
