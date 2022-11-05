export const Grid = ({
	children,
	cols = 1,
	rows = 1,
	colgap = 6,
	rowgap = 0,
	width = 100
}) => {
	const gridStyles = {
		display: "grid",
		width: `${width}%`,
		gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
		gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
		gap: `${rowgap}px ${colgap}px`,
	};

	return (
		<div style={gridStyles} className={`grid-map-container`}>
			{children.map((child, i) => {
				return <div key={`${i}_${child.props.id}`} className={`grid-container`}>{child}</div>;
			})}
		</div>
	);
};
