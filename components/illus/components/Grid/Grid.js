export const Grid = ({
  children,
  cols = 1,
  rows = 1,
  colgap = 6,
  rowgap = 0,
  width = 100,
  d = "grid",
  align = "space-evenly",
  rc = [],
}) => {
  let gridStyles = {
    display: d,
    width: `${width}%`,
		margin: `0 auto`,
  };
  if (d === "flex") {
    gridStyles.justifyContent = align;
  }
  if (d === "grid") {
    gridStyles.gridTemplateColumns = `repeat(${cols}, minmax(0, 1fr))`;
    gridStyles.gridTemplateRows = `repeat(${rows}, minmax(0, 1fr))`;
    gridStyles.gap = `${rowgap}px ${colgap}px`;
  }

  return (
    <div style={gridStyles} className={`grid-map-container`}>
      {children.map((child, i) => {
        return (
          <div
            style={{ width: rc[i] ? `${rc[i]}%` : "100%" }}
            key={`${i}_${child.props.id}`}
            className={`grid-container`}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
};
