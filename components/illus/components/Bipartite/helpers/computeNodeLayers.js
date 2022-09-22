import { max } from "d3";

export const computeNodeLayers = (nodes, x1, x0, dx, align) => {
	const x = max(nodes, (d) => d.depth) + 1;
	const kx = (x1 - x0 - dx) / (x - 1);
	const columns = new Array(x);
	for (const node of nodes) {
		const i = Math.max(
			0,
			Math.min(x - 1, Math.floor(align.call(null, node, x))),
		);
		node.layer = i;
		node.x0 = x0 + i * kx;
		node.x1 = node.x0 + dx;
		if (columns[i]) columns[i].push(node);
		else columns[i] = [node];
	}
	return columns;
};
