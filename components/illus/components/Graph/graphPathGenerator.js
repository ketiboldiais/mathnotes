import { nodeContainsLoop } from "./nodeContainsLoop";

export const graphPathGenerator = (d) => {
	const x1 = d.source.x;
	const y1 = d.source.y;
	const x2 = d.target.x;
	const y2 = d.target.y;
	const dx = x2 - x1;
	const dy = y2 - y1;
	const dr = Math.sqrt(dx * dx + dy * dy);
	// Set the defaults for a normal edge
	let drx = dr;
	let dry = dr;
	let xRotation = 0; // units are in degrees
	let largeArc = 0; // edge arc value (1 or 0)
	let sweep = 1; // edge sweep value (1 or 0)

	// Self edge.
	if (nodeContainsLoop(d)) {
		// Angle for orienting the loop.
		xRotation = -45;
		// This value must stay as 1
		largeArc = 1;
		// Change sweep to change orientation of loop.
		// sweep = 0;
		// Making drx and dry different yields an ellipse
		// rather than a circle.
		drx = 10;
		dry = 10;

		// Nudging the arc slighly to prevent collapsing
		x2 = x2 + 1;
		y2 = y2 + 1;
	}

	return `M${x1},${y1}A${drx},${dry} ${xRotation},${largeArc},${sweep} ${x2},${y2}`;
};
