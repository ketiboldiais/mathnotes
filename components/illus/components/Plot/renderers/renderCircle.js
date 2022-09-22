import { getBackgroundColor } from "../../utils/getBackgroundColor/getBackgroundColor";
import { attrs } from "../../utils/attrs/attrs";
import { translate } from "../../utils";
import { MathText } from "../../utils";

export const renderCircle = (
	selection,
	datum,
	index,
	xScale,
	yScale,
	scaleDimensionX,
	plotLineColor,
	_plotREF,
) => {
	const cx = xScale(datum.xy[0]);
	const cy = yScale(datum.xy[1]);
	const stroke = datum.stroke ? datum.stroke : plotLineColor;
	const fill = datum.fill ? datum.fill : getBackgroundColor(_plotREF);
	const r = datum.r ? scaleDimensionX(datum.r) : scaleDimensionX(5);
	
	const className = datum.class
		? `plotCircle ${datum.class}`
		: `plotCircle`;
	const circleCanvas = selection.append("g").attr("class", className);
	if (datum.id) {
		const xPosition = datum.xy ? xScale(datum.xy[0]) : xScale(cx);
		const yPosition = datum.xy ? yScale(datum.xy[1]) : yScale(cy);
		const labelFontSize = datum.fontSize ? datum.fontSize : 1.7;
		const _id = `${Date.now()}` + datum.id.replace(/\s/g, "") + `${index}`;
		const fill = datum.fill ? datum.fill : "";
		const labelProperties = {
			class: datum.class ? `plot_label ${datum.class}` : "plot_label",
			transform: translate(xPosition-10, yPosition-15),
		};
		const _width = datum.w ? datum.w : 70;
		const _height = datum.h ? datum.h : 5;
		const label = selection.append("g");
		attrs(label, labelProperties);
		MathText(label, datum.id, labelFontSize, _width, _height, _id, fill);
	}
	const circle = circleCanvas.append("circle");
	attrs(circle, { r, stroke, fill, cx, cy });
	if (datum.markCenter) {
		const center = circleCanvas.append("circle");
		attrs(center, { stroke, fill, r: 2, cx, cy });
	}
	
};
