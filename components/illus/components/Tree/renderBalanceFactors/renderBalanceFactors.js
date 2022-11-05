import { attrs } from "../../utils/attrs/attrs";
import { calculateBalanceFactor } from "../calculateBalanceFactor/calculateBalanceFactor";
export const renderBalanceFactors = (
	selection,
	data,
	radius,
	balanceFactorFontSize=0.8,
	offsetX=0,
	offsetY=0,
) => {
	const bfNums = selection
		.append("g")
		.attr("class", "treeBalanceFactorMark");
	const bfNumText = bfNums
		.selectAll("text")
		.data(data)
		.enter()
		.filter((d) => !d.data.display)
		.filter((d) => !d.data.type)
		.append("text")
		.text((d) => calculateBalanceFactor(d));
	attrs(bfNumText, {
		x: (d) => d.x - offsetX,
		y: (d) => d.y - offsetY,
		dy: -radius - radius / 2,
		"text-anchor": "middle",
		"font-size": `${balanceFactorFontSize}em`,
	});
};
