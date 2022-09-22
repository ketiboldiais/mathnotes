import { ascendingBreadth } from "./ascendingBreadth";

export const ascendingTargetBreadth = (a, b) => {
	return ascendingBreadth(a.target, b.target) || a.index - b.index;
};