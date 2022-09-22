export const sourceTop = (source, target, py) => {
	let y = target.y0 - (target.targetLinks.length - 1) / 2;
	for (const { source: node, width } of target.targetLinks) {
		if (node === source) break;
		y += width + py;
	}
	for (const { target: node, width } of source.sourceLinks) {
		if (node === target) break;
		y -= width;
	}
	return y;
};
