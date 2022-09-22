export const computeLinkBreadths = (nodes) => {
	for (const node of nodes) {
		let y0 = node.y0;
		let y1 = y0;
		for (const link of node.sourceLinks) {
			link.y0 = y0 + link.width / 2;
			y0 += link.width;
		}
		for (const link of node.targetLinks) {
			link.y1 = y1 + link.width / 2;
			y1 += link.width;
		}
	}
};
