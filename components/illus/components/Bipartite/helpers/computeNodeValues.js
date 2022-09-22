import { sum } from "d3";

export const computeNodeValues = (nodes) => {
	for (const node of nodes) {
		node.value =
			node.fixedValue === undefined
				? Math.max(
						sum(node.sourceLinks, node.value),
						sum(node.targetLinks, node.value),
				  )
				: node.fixedValue;
	}
};
