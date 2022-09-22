// pushes overlapping nodes towards the top
const resolveCollisionsBottomToTop = (nodes, y, i, alpha, py) => {
	for (; i >= 0; --i) {
		const node = nodes[i];
		const dy = (node.y1 - y) * alpha;
		if (dy > 1e-6) {
			node.y0 -= dy;
			node.y1 -= dy;
		}
		y = node.y0 - py;
	}
};

// pushes overlapping nodes towards the bottom
const resolveCollisionsTopToBottom = (nodes, y, i, alpha, py) => {
	for (; i < nodes.length; ++i) {
		const node = nodes[i];
		const dy = (y - node.y0) * alpha;
		if (dy > 1e-6) {
			node.y0 += dy;
			node.y1 += dy;
		}
		y = node.y1 + py;
	}
};

export const resolveCollisions = (nodes, alpha, py, y0, y1) => {
	const i = nodes.length >> 1;
	const subject = nodes[i];
	resolveCollisionsBottomToTop(nodes, subject.y0 - py, i - 1, alpha, py);
	resolveCollisionsTopToBottom(nodes, subject.y1 + py, i + 1, alpha, py);
	resolveCollisionsBottomToTop(nodes, y1, nodes.length - 1, alpha, py);
	resolveCollisionsTopToBottom(nodes, y0, 0, alpha, py);
};
