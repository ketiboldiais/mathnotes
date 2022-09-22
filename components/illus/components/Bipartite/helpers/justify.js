export const justify = (node, n) => {
	return node.sourceLinks.length ? node.depth : n - 1;
};