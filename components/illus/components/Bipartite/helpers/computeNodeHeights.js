export const computeNodeHeights = (nodes) => {
	const n = nodes.length;
	let current = new Set(nodes);
	let next = new Set();
	let x = 0;
	while (current.size) {
		for (const node of current) {
			node.height = x;
			for (const { source } of node.targetLinks) {
				next.add(source);
			}
		}
		if (++x > n) throw new Error("circular link");
		current = next;
		next = new Set();
	}
};
