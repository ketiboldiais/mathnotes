export const removeEndTicks = (
	selection,
	xAxisClassName = "g.plot-x-axis",
	yAxisClassName = "g.plot-y-axis",
) => {
	const xTickCount = selection.selectAll(`${xAxisClassName} .tick`)
		._groups[0].length;
	const yTickCount = selection.selectAll(`${yAxisClassName} .tick`)
		._groups[0].length;
	selection
		.selectAll(`${xAxisClassName} .tick line`)
		.each(function (d, i) {
			if (i === 0 || i === xTickCount - 1) this.remove();
		});
	selection
		.selectAll(`${yAxisClassName} .tick line`)
		.each(function (d, i) {
			if (i === 0 || i === yTickCount - 1) this.remove();
		});
};
