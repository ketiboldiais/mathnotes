import {
	computeNodeLayers,
	initializeNodeBreadths,
	relaxRightToLeft,
	relaxLeftToRight,
} from "./index";
import { max } from "d3";

export const computeNodeBreadths = (
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
) => {
	const columns = computeNodeLayers(nodes, x1, x0, dx, align, sort);
	py = Math.min(dy, (y1 - y0) / (max(columns, (c) => c.length) - 1));
	initializeNodeBreadths(columns, y1, y0, py, nodes, linkSort);
	for (let i = 0; i < iterations; ++i) {
		const alpha = Math.pow(0.99, i);
		const beta = Math.max(1 - alpha, (i + 1) / iterations);
		relaxRightToLeft(columns, alpha, beta);
		relaxLeftToRight(columns, alpha, beta);
	}
};
