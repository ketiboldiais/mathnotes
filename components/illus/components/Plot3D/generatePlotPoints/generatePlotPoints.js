import { setValue } from "../../utils/setValue/setValue";


export const generatePlotPoints = (functionEntry) => {
	let f = functionEntry.f;
	let scale = setValue(functionEntry.scale, 1);
	let xDomain = setValue(functionEntry.xDomain, [-20, 20]);
	let yDomain = setValue(functionEntry.yDomain, [-20, 20]);
	let xDomainLowerBound = xDomain[0];
	let xDomainUpperBound = xDomain[1];
	let yDomainLowerBound = yDomain[0];
	let yDomainUpperBound = yDomain[1];

	let output = [];
	for (let x = xDomainLowerBound; x < xDomainUpperBound; x++) {
		let f0 = [];
		output.push(f0);
		for (let y = yDomainLowerBound; y < yDomainUpperBound; y++) {
			f0.push(f(x, y) * scale);
		}
	}
	return output;
};
