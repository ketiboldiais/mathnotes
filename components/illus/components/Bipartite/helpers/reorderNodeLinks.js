import { ascendingTargetBreadth } from "./ascendingTargetBreadth";
import { ascendingSourceBreadth } from "./ascendingSourceBreadth";

export const reorderNodeLinks = (
	{ sourceLinks, targetLinks },
	linkSort,
) => {
	if (linkSort === undefined) {
		for (const {
			source: { sourceLinks },
		} of targetLinks) {
			sourceLinks.sort(ascendingTargetBreadth);
		}
		for (const {
			target: { targetLinks },
		} of sourceLinks) {
			targetLinks.sort(ascendingSourceBreadth);
		}
	}
};
