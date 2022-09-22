import { max, sum } from "d3";
import { reorderLinks } from "./reorderLinks";
import { ascendingTargetBreadth } from "./ascendingTargetBreadth";
import { ascendingSourceBreadth } from "./ascendingSourceBreadth";

export const initializeNodeBreadths = (
	columns,
	y1,
	y0,
	py,
	nodes,
	linkSort,
) => {
	let ky = max(
		columns,
		(c) => (y1 - y0 - (c.length - 1) * py) / sum(c, c.value),
	);
	if (!isFinite(ky)) {
		ky = 0;
	}
	for (const nodes of columns) {
		let y = y0;
		for (const node of nodes) {
			node.y0 = y;
			node.y1 = y + node.value * ky;
			y = node.y1 + py;
			for (const link of node.sourceLinks) {
				link.width = link.value * ky;
			}
		}
		y = (y1 - y + py) / (nodes.length + 1);
		for (let i = 0; i < nodes.length; ++i) {
			const node = nodes[i];
			node.y0 += y * (i + 1);
			node.y1 += y * (i + 1);
		}
		reorderLinks(
			nodes,
			linkSort,
			ascendingTargetBreadth,
			ascendingSourceBreadth,
		);
	}
};
