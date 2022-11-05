export function HashTable({ children, width=50}) {
	let styles = {
		width: `${width}%`,
		margin:`0 auto`
	}
	return <div className="hashtbl" style={styles}>{children}</div>;
}