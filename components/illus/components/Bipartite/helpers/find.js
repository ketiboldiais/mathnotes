export const find = (nodeById, id) => {
	const node = nodeById.get(id);
	if (!node) throw new Error("missing: " + id);
	return node;
};