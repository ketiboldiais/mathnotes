export const computeNodeDepths = (nodes) => {
	const n = nodes.length;
	let current = new Set(nodes);
	let next = new Set();
	let x = 0;
	while (current.size) {
		for (const node of current) {
			node.depth = x;
			for (const { target } of node.sourceLinks) {
				next.add(target);
			}
		}
		if (++x > n) throw new Error("circular link");
		current = next;
		next = new Set();
	}
};
