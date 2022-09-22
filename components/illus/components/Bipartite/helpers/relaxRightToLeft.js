import { sourceTop } from "./sourceTop";
import { reorderNodeLinks } from "./reorderNodeLinks";
import { resolveCollisions } from "./resolveCollisions";
import { ascendingBreadth } from "./ascendingBreadth";

export const relaxRightToLeft = (columns, alpha, beta, sort, py) => {
	for (let n = columns.length, i = n - 2; i >= 0; --i) {
		const column = columns[i];
		for (const source of column) {
			let y = 0;
			let w = 0;
			for (const { target, value } of source.sourceLinks) {
				let v = value * (target.layer - source.layer);
				y += sourceTop(source, target) * v;
				w += v;
			}
			if (!(w > 0)) continue;
			let dy = (y / w - source.y0) * alpha;
			source.y0 += dy;
			source.y1 += dy;
			reorderNodeLinks(source);
		}
		if (sort === undefined) column.sort(ascendingBreadth);
		resolveCollisions(column, beta);
	}
};
