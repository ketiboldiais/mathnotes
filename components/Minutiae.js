import styles from "./Minutiae.module.css";
import { useState } from "react";

export function Minutiae({ children, tx='solution'}) {
	const [isActive, setActive] = useState("false");
	const handleToggle = () => {
		setActive(!isActive);
	};
	return (
	<div className={styles.container}>
		<button onClick={handleToggle}>{tx}</button>
		<div className={isActive ? styles.contentActive : styles.contentInactive}>
			<button onClick={handleToggle} className={styles.containerCloseButton}>⊗</button>
			<div className={styles.contentBody}>
				{children}
			</div>
		</div>
	</div>
	);
}
