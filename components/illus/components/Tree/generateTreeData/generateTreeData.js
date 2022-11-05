import { isObjectLiteral } from "../../utils/isObjectLiteral/isObjectLiteral";

export const generateTreeData = (rawData) => {
	let data = [];
	for (let i = 0; i < rawData.length; i++) {
		if (isObjectLiteral(rawData[i])) {
			if (rawData[i].child===null) {
				data.push({child:`${Math.random()}`, parent:rawData[i].parent, display:`none`})
			}
			else if (rawData[i].child.val) {
				data.push({child: rawData[i].child.val, parent:rawData[i].parent, ...rawData})
			}
			else {
				data.push(rawData[i]);
			}
		}
		else {
			let node = {
				child: rawData[i][0],
				parent: rawData[i][1],
			};
			data.push(node);
		}
	}
	return data;
};
