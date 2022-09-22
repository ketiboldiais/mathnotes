import { targetTop } from "./targetTop";
import { ascendingBreadth } from "./ascendingBreadth";
import { resolveCollisions } from "./resolveCollisions";

export const relaxLeftToRight = (columns, alpha, beta, sort) => {
	for (let i = 1, n = columns.length; i < n; ++i) {
		const column = columns[i];
		for (const target of column) {
			let y = 0;
			let w = 0;
			for (const { source, value } of target.targetLinks) {
				let v = value * (target.layer - source.layer);
				y += targetTop(source, target) * v;
				w += v;
			}
			if (!(w > 0)) continue;
			let dy = (y / w - target.y0) * alpha;
			target.y0 += dy;
			target.y1 += dy;
			reorderNodeLinks(target);
		}
		if (sort === undefined) column.sort(ascendingBreadth);
		resolveCollisions(column, beta);
	}
};
