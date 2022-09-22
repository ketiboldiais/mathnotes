import React, { useState, useRef } from "react";
import navStyles from "../styles/Nav.module.css";
import Routes from "./routes";
import Tree from "./TreeList";

export const NavBody = ({ className }) => {
	const ref = useRef();
	const [navbarOpen, setNavbarOpen] = useState("");
	const handleToggle = () => {
		setNavbarOpen((prev) => !prev);
	};
	return (
		<>
			<div className={navStyles.navControls}>
				<button
					className={
						navbarOpen
							? `${navStyles.pressed} ${navStyles.button}`
							: navStyles.button
					}
					onClick={handleToggle}
					ref={ref}>
					{navbarOpen
						? "Close"
						: "Index"}
				</button>
			</div>
			<div
				className={`${navStyles.navContent} ${
					navbarOpen ? navStyles.showNav : ""
				}`}>
				<Tree data={Routes} allLinks={true} clickHandler={handleToggle} />
			</div>
		</>
	);
};
