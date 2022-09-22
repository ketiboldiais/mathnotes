import { ascendingTargetBreadth } from "./ascendingTargetBreadth";
import { ascendingSourceBreadth } from "./ascendingSourceBreadth";

export const reorderLinks = (nodes, linkSort) => {
	if (linkSort === undefined) {
		for (const { sourceLinks, targetLinks } of nodes) {
			sourceLinks.sort(ascendingTargetBreadth);
			targetLinks.sort(ascendingSourceBreadth);
		}
	}
};
