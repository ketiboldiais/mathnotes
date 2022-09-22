import { insertArrowDefinitions } from "../../utils/insertArrowDefinitions/insertArrowDefinitions";

const x_arrow_left = {
	id: "x_ArrowLeft",
	orient: "0",
};

const x_arrow_right = {
	id: "x_ArrowRight",
	orient: "180",
};

const y_arrow_top = {
	id: "y_ArrowTop",
	orient: "-90",
};

const y_arrow_bottom = {
	id: "y_ArrowBottom",
	orient: "90",
};

const defs = [x_arrow_left, x_arrow_right, y_arrow_top, y_arrow_bottom];

export const appendArrowDefinitions = (selection, color) => {
	for (let i = 0; i < defs.length; i++) {
		insertArrowDefinitions(
			selection,
			defs[i].id,
			8,
			0,
			6,
			6,
			defs[i].orient,
			color,
		);
	}
};
