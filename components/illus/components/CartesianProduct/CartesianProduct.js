import TeX from "@matejmazur/react-katex";

function generatePermutations(array = []) {
	if (array.length === 1) {
		return array[0];
	} else {
		let result = [];
		let permutations = generatePermutations(array.slice(1));
		for (let i = 0; i < permutations.length; i++) {
			for (let j = 0; j < array[0].length; j++) {
				let val = `${array[0][j]}, ${permutations[i]}`;
				result.push(val);
			}
		}
		return result;
	}
}

function parenthesize(array = []) {
	for (let i = 0; i < array.length; i++) {
		array[i] = `(${array[i]})`;
	}
	return array;
}

export const CartesianProduct = ({
	sets = [["a", "b"], ["c"], ["d", "e", "f"]],
	cols = 3,
	rows = 1,
	colgap = 0,
	rowgap = 0,
}) => {
	const divStyles = {
		display: "grid",
		gridTemplateColumns: `repeat(${cols}, 1fr)`,
		gridTemplateRows: `repeat(${rows}, 1fr)`,
		gap: `${rowgap}px ${colgap}px`,
		width: 'fit-content',
		margin: '0 auto'
	};
	const cellStyles = {
		padding: "5px",
	};
	const cartProduct = parenthesize(generatePermutations(sets));
	return (
		<div style={divStyles}>
			{cartProduct.map((d, i) => (
				<div key={`${d}${i}`} style={cellStyles}>
					<TeX math={d} />
				</div>
			))}
			<div style={cellStyles}>Size: {cartProduct.length}</div>
		</div>
	);
};
