import React, { useRef, useEffect } from "react";
import { Base } from "../base/Base";
import { renderLevelMarks } from "./renderLevelMarks/renderLevelMarks";
import { renderDepthMarks } from "./renderDepthMarks/renderDepthMarks";
import { renderHeightMarks } from "./renderHeightMarks/renderHeightMarks";
import { renderBalanceFactors } from "./renderBalanceFactors/renderBalanceFactors";
import { generateTreeData } from "./generateTreeData/generateTreeData";
import {
	className,
	svg,
	translate,
	Trim,
	MathText,
} from "../utils";
import { select, stratify, tree } from "d3";

export const Tree = ({
	data = [],
	elw=50,
	elh=10,
	elbg='var(--background-color)',
	label = "",
	width = 450,
	height = width/2,
	wh = [width,height],
	ex=0,
	ey=0,
	tw,
	th,
	id=`bbbb`,
	anon=false,
	flat=false,
	scale=70,
	sibsep=1,
	nsibsep=1.1,
	containerWidth = scale,
	containerHeight,
	tighten=0,
	margin=10,
	margins = [margin,margin+tighten,margin,margin+tighten],
	labelOffsetX = 0,
	labelOffsetY = 0,
	r = 4,
	nodeColor = "var(--background-color)",
	edgeColor = "#000000",
	markBalanceFactor = false,
	markHeight = false,
	markDepth = false,
	markLevels = false,
	fs=1,
	tx=-11,
	ty=-7,
	heightFontSize = 10,
	heightTextColor = edgeColor,
	balanceFactorFontSize = 0.7,
	levelLineColor = "grey",
	levelTextColor = "grey",
	levelFontSize = 7,
}) => {
	const TreeFigure = useRef();
	const _svg = svg(wh[0], wh[1], margins);
	th = th ? th : _svg.height;
	tw = tw ? tw : _svg.width;
	const _data = generateTreeData(data);
	const root = stratify()
		.id((d) => d.child.id||d.child)
		.parentId((d) => d.parent)(_data);
	const treeStructure = tree()
		.size([tw,th])
		.separation((a, b) => (a.parent === b.parent ? sibsep : nsibsep));
	treeStructure(root);
	let _links = root.links();
  let _nodes = root.descendants();
	for (let i = 0; i < _nodes.length; i++) {
		_nodes[i].name = _nodes[i].data.n || _nodes[i].data.n === 0 ? _nodes[i].data.n : _nodes[i].id;
		let className = 'tree-node';
		if (_nodes[i].parent && _nodes[i].parent.data.tc) { className += " " + `${_nodes[i].parent.data.tc}`}
		if (_nodes[i].data.tc) { className += " " + `${_nodes[i].data.tc}` }
		if (_nodes[i].data.class) { className += " " + `${_nodes[i].data.class}` }
		_nodes[i].class = className;
	}
	for (let i = 0; i < _links.length; i++) {
		if (_links[i].source.data.tc) {
			_links[i].source.treeClass = _links[i].source.data.tc;
			_links[i].target.treeClass = _links[i].source.data.tc;
		}
		if (_links[i].target.data.tc) {
			_links[i].target.treeClass = _links[i].target.data.tc;
		}
		if (_links[i].target.data.el) {
			_links[i].target.edgeLabel = _links[i].target.data.el;
		}
		if (_links[i].target.data.ec) {
			_links[i].target.edgeClass = _links[i].target.data.ec;
		}
	}
	const renderTree = () => {
		const canvas = select(TreeFigure.current).select("g.svgElement");
		const tree = canvas.append("g").attr("class", className.tree.canvas);
		// links
		const links = tree.append("g").attr("class", className.tree.edgeGroup);
		links
			.selectAll("line")
			.data(_links)
			.enter()
			.append("line")
			.attr('stroke', edgeColor)
			.attr('class', (d) => {
				if (d.target.edgeClass) {
					if (d.source.treeClass) {
						return d.source.treeClass + " " + d.source.treeClass;
					}
					if (d.target.treeClass) {
						return d.target.treeClass + " " + d.target.treeClass;
					}
					return d.target.edgeClass;
				}
				if (d.source.treeClass) {
					return d.source.treeClass;
				}
				if (d.target.treeClass) {
					return d.target.treeClass;
				}
				return 'tree-edge'
			})
			.attr("x1", (d) => d.source.x)
			.attr("y1", (d) => d.source.y)
			.attr("x2", (d) => d.target.x)
			.attr("y2", (d) => d.target.y)
			.attr("display", (d) =>
				d.source.data.display || d.target.data.display
					? "none"
					: "initial",
			);
		const nodeGroup = tree
			.append("g")
			.attr("class", className.tree.nodeGroup);
		const nodes = nodeGroup
			.selectAll("circles")
			.data(_nodes)
			.enter()
			.append("g")
			.attr('class', (d) => d.class ? (flat ? d.class + " " + "no-circle" : d.class) : d.treeClass)
		const annotations=tree
			.append("g")
			.selectAll('ants')
			.data(root)
			.enter()
			.filter((d) => d.data.ant)
			.filter((d) => !d.data.display)
			.filter((d) => !d.data.label)
			.append('g')
			.attr('class', 'node-label')
		annotations
			.attr("transform", (d) => {
				const xoffset = d.data.tx!==undefined ? d.data.tx : 0;
				const yoffset = d.data.ty !==undefined ? d.data.ty : 0;
				const x = d.x + xoffset;
				const y = d.y + yoffset;
				return translate(x,y);
			})
			.each(function (d, i) {
				const graphId = Trim(id, [/ /]);
				let sel = select(this);
				MathText(sel,d.data.ant,fs,50,50,`${graphId}-${d.id}-${i}`,"initial");
			});		
			nodes
				.filter((d) => d.data.display !== "none")
				.filter((d) => !d.data.display)
				.filter((d) => !d.data.noCircle)
				.filter((d) => !d.data.type)
				.append("circle")
				.attr("fill", flat ? "var(--background-color)" : nodeColor)
				.attr("r", r)
				.attr("cx", (d) => d.x)
				.attr("cy", (d) => d.y)

		// node labels
		if (!anon) {
			const nodeLabel = nodes
				.filter((d) => !d.data.display).filter((d) => !d.data.label)
				.append('g')
				.attr('transform', d => `translate(${d.x},${d.y})`)
				.attr('class', 'node-label')
			nodeLabel
				.append("g")
				.attr("transform", (d) => {
					const x = d.data.dx ? d.data.dx : tx;
					const y = d.data.dy ? d.data.dy : ty;
					return translate(x, y);
				})
				.each(function (d, i) {
					const graphId = Trim(id, [/ /]);
					let sel = select(this);
					MathText( sel, d.name, fs, 50, 50, `${graphId}-${d.name}-${i}`, "black");
				});
		}
		// edge labels
		const linkLabels = links.selectAll("linkLabels").data(_links).enter()
		linkLabels
			.filter((d) => d.target.edgeLabel)
			.append('g')
			.attr('transform', (d) => {
				let xoffset = d.target.data.ex ? ex + d.target.data.ex : ex;
				let yoffset = d.target.data.ey ? ey + d.target.data.ey : ey;
				const x1 = d.source.x;
				const y1 = d.source.y;
				const x2 = d.target.x;
				const y2 = d.target.y;
				return translate(((x1+x2)/2)+xoffset, ((y1+y2)/2)+yoffset)
			})
			.each(function (d,i) {
				const graphId = Trim(id, [/ /]);
				const ecw=d.target.data.elw ? d.target.data.elw + elw : elw;
				const ech=d.target.data.elh ? d.target.data.elh + elh : elh;
				let sel = select(this);
				MathText( sel, d.target.edgeLabel, fs, ecw, ech, `${graphId}-${d.target.edgeLabel}-${i}`, "black", elbg);
			});
				
		

		
		
		if (markLevels) renderLevelMarks(tree,root,_svg,levelFontSize,levelTextColor,levelLineColor);
		if (markDepth) renderDepthMarks(tree, root, r);
		if (markHeight) renderHeightMarks(tree,root,r+2,heightTextColor,heightFontSize);
		if (markBalanceFactor) renderBalanceFactors(tree,_nodes,r,balanceFactorFontSize,0,0);
		if (label) {
			tree
				.append("g")
				.attr("class", "treeLabel")
				.attr("transform",translate(_svg.width / 2 + labelOffsetX,_svg.height + labelOffsetY))
				.attr("font-size", levelFontSize + 2)
				.attr("text-anchor", "middle")
				.append("text")
				.text(label);
		}
	};

	useEffect(() => {
		if (TreeFigure.current) renderTree();
	},[]);
	return (
		<Base
			id={TreeFigure}
			width={width}
			height={height}
			containerWidth={containerWidth}
			containerHeight={containerHeight}
			margins={margins}
		/>
	);
};
