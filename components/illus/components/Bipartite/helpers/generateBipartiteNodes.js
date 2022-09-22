import { isObjectLiteral } from "../../utils";

export const generateBipartiteNodes = (data, edges) => {
	let nodes = {};
	let _source, _target;
	edges.forEach(function (link) {
		if (isObjectLiteral(link.source)) {
			_source = { name: link.source.id, ...link.source };
			link.source =
				nodes[link.source] || (nodes[link.source.name] = _source);
		} else {
			_source = { name: link.source };
			link.source = nodes[link.source] || (nodes[link.source] = _source);
		}
		if (isObjectLiteral(link.target)) {
			_target = { name: link.target.id, ...link.target };
			link.target =
				nodes[link.target] || (nodes[link.target.name] = _target);
		} else {
			_target = { name: link.target };
			link.target = nodes[link.target] || (nodes[link.target] = _target);
		}
	});
	data.forEach(function (element) {
		if (element.link.length === 1) {
			nodes[element.link[0]] = {
				name: element.link[0],
			};
		}
	});
	return Object.values(nodes);
};
