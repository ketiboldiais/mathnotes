export function Array({ children, width=100}) {
	let styles = {
		width: `${width}%`,
	}
	return <div className="table-array" style={styles}>{children}</div>;
}