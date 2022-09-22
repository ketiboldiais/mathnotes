export const targetTop = (source, target, py) => {
	let y = source.y0 - ((source.sourceLinks.length - 1) * py) / 2;
	for (const { target: node, width } of source.sourceLinks) {
		if (node === target) break;
		y += width + py;
	}
	for (const { source: node, width } of target.targetLinks) {
		if (node === source) break;
		y -= width;
	}
	return y;
};
