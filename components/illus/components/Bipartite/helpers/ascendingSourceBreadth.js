import { ascendingBreadth } from "./ascendingBreadth";

export const ascendingSourceBreadth = (a, b) => {
	return ascendingBreadth(a.source, b.source) || a.index - b.index;
};
