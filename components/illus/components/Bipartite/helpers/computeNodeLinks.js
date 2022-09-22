import { find } from "./find";

export const computeNodeLinks = (nodes, links, id) => {
	for (const [i, node] of nodes.entries()) {
		node.index = i;
		node.sourceLinks = [];
		node.targetLinks = [];
	}
	const nodeById = new Map(nodes.map((d, i) => [id(d, i, nodes), d]));
	for (const [i, link] of links.entries()) {
		link.index = i;
		let { source, target } = link;
		if (typeof source !== "object")
			source = link.source = find(nodeById, source);
		if (typeof target !== "object")
			target = link.target = find(nodeById, target);
		source.sourceLinks.push(link);
		target.targetLinks.push(link);
	}
};