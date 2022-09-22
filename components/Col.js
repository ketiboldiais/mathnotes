export function Col({ children, cols = 2, rows = 1 }) {
	return (
		<div
			className={"Col"}
			style={{
				display: "grid",
				gridTemplateColumns: `repeat(${cols}, 1fr)`,
				gridTemplateRows: `repeat(${rows}, 1fr)`,
				fontFamily: "CMU Serif",
			}}
		>
			{children}
		</div>
	);
}
